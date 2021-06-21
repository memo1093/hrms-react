import moment from "moment";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from "semantic-ui-react";
import CityService from "../services/CityService";
import JobPositionService from "../services/JobPositionService";

export const Filter = () => {
  const [cities, setCities] = useState([]);
  const [jobPositions, setjobPositions] = useState([]);
  const [checkedDate, setCheckedDate] = useState({});
  const [checkedJobs, setCheckedJobs] = useState([]);
  const [searchJobPosition, setSearchJobPosition] = useState("");
  const cityOptions = [];
  const handleChange = (e, { value }) => setCheckedDate({ value });
  const dateOptions = [
    { key: 1, text: "Tümü", value: "1" },
    {
      key: 2,
      text: "Bugünün ilanları",
      value: moment().endOf("Day").calendar(),
    },
    {
      key: 3,
      text: "Son 7 gün",
      value: moment().add(-7, "days").endOf("Day").calendar(),
    },
    {
      key: 4,
      text: "Son 15 gün",
      value: moment().add(-15, "days").endOf("Day").calendar(),
    },
  ];
  const jobPositionOptions = [];

  useEffect(() => {
    let cityService = new CityService();
    let jobPositionService = new JobPositionService();
    cityService
      .getAll()
      .then((result) => setCities(result.data.data))
      .catch((error) => console.log(error.message));

    jobPositionService
      .getAll()
      .then((result) => setjobPositions(result.data.data))
      .catch((error) => console.log(error.message));
  }, []);

  cities.map((city) =>
    cityOptions.push({ key: city.id, text: city.city, value: city.id })
  );
  jobPositions
    .filter((jobPosition) =>
      jobPosition.position
        .toLowerCase()
        .includes(searchJobPosition.toLowerCase())
    )
    .map((jobPosition) =>
      jobPositionOptions.push({
        key: jobPosition.id,
        text: jobPosition.position,
        value: jobPosition.id,
      })
    );

  return (
    <Form>
      <Form.Field label="Tarih" />
      {dateOptions.map((option) => (
        <Form.Radio
          defaultChecked={option.value === "1"}
          onChange={(e, { value }) => setCheckedDate(value)}
          checked={checkedDate === option.value}
          key={option.key}
          label={option.text}
          value={option.value}
        />
      ))}
      <Form.Group></Form.Group>
      <Form.Group inline></Form.Group>
      <Form.Field
        control={Select}
        label="Şehir"
        options={cityOptions}
        placeholder="Şehir seçin"
      />

      <Form.Field
        control={Input}
        label="Sektör Ara"
        placeholder="Sektör Ara..."
        value={searchJobPosition}
        onChange={(e) => setSearchJobPosition(e.target.value)}
      />

      {jobPositionOptions.map((option) => (
        <Form.Checkbox
          onChange={(e, { value }) => {
            setCheckedJobs(checkedJobs.includes(value)?[...checkedJobs.filter(i=>i!==value)]:[...checkedJobs, value]);
            
          }}
          key={option.key}
          label={option.text}
          value={option.value}
        />
      ))}
    </Form>
  );
};
