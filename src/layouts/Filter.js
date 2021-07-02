import { useFormik } from "formik";
import moment from "moment";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Button, Form, Grid, Input } from "semantic-ui-react";
import CityService from "../services/CityService";
import JobPositionService from "../services/JobPositionService";
import { addFilter, clearFilter } from "../store/actions/filterActions";

export const Filter = () => {
  const dispatch = useDispatch();
  const [cities, setCities] = useState([]);
  const [jobPositions, setjobPositions] = useState([]);
  const [jobTimes, setJobTimes] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);

  const [searchJobPosition, setSearchJobPosition] = useState("");
  const [searchCity, setsearchCity] = useState("");

  const filters = useSelector((state) => state.filters.filters);
  const jobTimeOptions = [];
  const jobTypeOptions = [];
  const cityOptions = [];
  const jobPositionOptions = [];
  const dateOptions = [
    { key: 1, text: "Tümü", value: moment().endOf("day").format("YYYY-MM-DD") },
    {
      key: 2,
      text: "7 gün önce",
      value: moment().add(-7, "days").endOf("Day").format("YYYY-MM-DD"),
    },
    {
      key: 3,
      text: "15 gün önce",
      value: moment().add(-15, "days").endOf("Day").format("YYYY-MM-DD"),
    },
  ];
  jobTimes.map((jobTime) =>
    jobTimeOptions.push({
      key: jobTime.id,
      text: jobTime.type,
      value: jobTime.id,
    })
  );
  jobTypes.map((jobType) =>
    jobTypeOptions.push({
      key: jobType.id,
      text: jobType.type,
      value: jobType.id,
    })
  );
  const formik = useFormik({
    initialValues: {
      date: filters.date,
      cityId: filters.cityId,
      jobTypeId: filters.jobTypeId,
      jobTimeId: filters.jobTimeId,
      jobPositionId: filters.jobPositionId,
    },
    onSubmit: (values) => {
      dispatch(addFilter(values));
    },
  });
  const handleFiltersRemove = () => {
    dispatch(clearFilter());
    formik.resetForm(formik.values);
  };
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

    jobPositionService
      .getAllJobTimes()
      .then((result) => setJobTimes(result.data.data))
      .catch((error) => console.log(error.message));

    jobPositionService
      .getAllJobTypes()
      .then((result) => setJobTypes(result.data.data))
      .catch((error) => console.log(error.message));
  }, [filters, formik.values]);

  cities
    .filter((city) =>
      city.city
        .toLocaleLowerCase("tr-TR")
        .includes(searchCity.toLocaleLowerCase("tr-TR"))
    )
    .map((city) =>
      cityOptions.push({ key: city.id, text: city.city, value: city.id })
    );
  jobPositions
    .filter((jobPosition) =>
      jobPosition.position
        .toLocaleLowerCase("tr-TR")
        .includes(searchJobPosition.toLocaleLowerCase("tr-TR"))
    )
    .map((jobPosition) =>
      jobPositionOptions.push({
        key: jobPosition.id,
        text: jobPosition.position,
        value: jobPosition.id,
      })
    );

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Field label="Tarih" />
        <div
          style={{ overflowY: "auto", maxHeight: "200px", margin: "10px 10px" }}
        >
          {dateOptions.map((option) => (
            <Form.Radio
              onChange={(e, { value }) => formik.setFieldValue("date", value)}
              checked={formik.values.date === option.value}
              key={option.key}
              label={option.text}
              value={option.value}
            />
          ))}
        </div>
        <Form.Field label="Çalışma tipi" />
        <div
          style={{ overflowY: "auto", maxHeight: "200px", margin: "10px 10px" }}
        >
          {jobTypeOptions.map((option) => (
            <Form.Checkbox
              onChange={(e, { value }) => {
                formik.setFieldValue(
                  "jobTypeId",
                  formik.values.jobTypeId.includes(value)
                    ? [...formik.values.jobTypeId.filter((i) => i !== value)]
                    : [...formik.values.jobTypeId, value]
                );
              }}
              key={option.key}
              label={option.text}
              checked={formik.values.jobTypeId.includes(option.value)}
              value={option.value}
            />
          ))}
        </div>
        <Form.Field label="Çalışma zamanı" />
        <div
          style={{ overflowY: "auto", maxHeight: "200px", margin: "10px 10px" }}
        >
          {jobTimeOptions.map((option) => (
            <Form.Checkbox
              onChange={(e, { value }) => {
                formik.setFieldValue(
                  "jobTimeId",
                  formik.values.jobTimeId.includes(value)
                    ? [...formik.values.jobTimeId.filter((i) => i !== value)]
                    : [...formik.values.jobTimeId, value]
                );
              }}
              key={option.key}
              checked={formik.values.jobTimeId.includes(option.value)}
              label={option.text}
              value={option.value}
            />
          ))}
        </div>

        <Form.Field
          control={Input}
          label="Şehir"
          value={searchCity}
          placeholder="Şehir Ara..."
          onChange={(e) => setsearchCity(e.target.value)}
        />
        <div
          style={{ overflowY: "auto", maxHeight: "200px", margin: "10px 10px" }}
        >
          {cityOptions.map((option) => (
            <Form.Checkbox
              onChange={(e, { value }) => {
                formik.setFieldValue(
                  "cityId",
                  formik.values.cityId.includes(value)
                    ? [...formik.values.cityId.filter((i) => i !== value)]
                    : [...formik.values.cityId, value]
                );
              }}
              key={option.key}
              checked={formik.values.cityId.includes(option.value)}
              label={option.text}
              value={option.value}
            />
          ))}
        </div>

        <Form.Field
          control={Input}
          label="Sektör Ara"
          placeholder="Sektör Ara..."
          value={searchJobPosition}
          onChange={(e) => setSearchJobPosition(e.target.value)}
        />
        <div
          style={{ overflowY: "auto", maxHeight: "200px", margin: "10px 10px" }}
        >
          {jobPositionOptions.map((option) => (
            <Form.Checkbox
              onChange={(e, { value }) => {
                formik.setFieldValue(
                  "jobPositionId",
                  formik.values.jobPositionId.includes(value)
                    ? [
                        ...formik.values.jobPositionId.filter(
                          (i) => i !== value
                        ),
                      ]
                    : [...formik.values.jobPositionId, value]
                );
              }}
              key={option.key}
              checked={formik.values.jobPositionId.includes(option.value)}
              label={option.text}
              value={option.value}
            />
          ))}
        </div>
        <Grid>
          <Grid.Row centered>
            <Grid.Column textAlign="center">
              <Button type="submit" color="violet" content="Ara" />
              <Button
                type="submit"
                onClick={() => handleFiltersRemove()}
                color="violet"
                content="Filtreyi Temizle"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
      <Grid>
        <Grid.Row centered>
          <Grid.Column textAlign="center"></Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};
