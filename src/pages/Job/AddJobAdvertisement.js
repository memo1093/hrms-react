import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import * as yup from "yup";
import tr from "date-fns/locale/tr";
import { Button, Container, Form, Grid, Message } from "semantic-ui-react";
import JobPositionService from "../../services/JobPositionService";
import CityService from "../../services/CityService";
import JobAdvertisementService from "../../services/JobAdvertisementService";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addJobAdvertisement } from "../../store/actions/jobAdvertisementActions";

export const AddJobAdvertisement = () => {
  const [jobPositions, setjobPositions] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);
  const [jobTimes, setJobTimes] = useState([]);
  const [cities, setCities] = useState([]);
  const [lastApplicationDate, setlastApplicationDate] = useState(new Date());

  const history = useHistory();
  const dispatch = useDispatch()

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    let cityService = new CityService();

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

    cityService
      .getAll()
      .then((result) => setCities(result.data.data))
      .catch((error) => console.log(error.message));
  }, []);

  const positionOptions = [];
  const cityOptions = [];

  jobPositions.map((jobPosition) =>
    positionOptions.push({
      key: jobPosition.id,
      text: jobPosition.position,
      value: jobPosition.id,
    })
  );

  cities.map((city) =>
    cityOptions.push({
      key: city.id,
      text: city.city,
      value: city.id,
    })
  );

  const formik = useFormik({
    initialValues: {
      jobPositionId: "",
      description: "",
      minSalary: 0,
      maxSalary: 0,
      jobTypeId: "",
      jobTimeId: "",
      cityId: "",
      employerId: 22 /* //! Session tamamland??????nda user id de??erini sessiondan alacak */,
      activePositions: 1,
      lastApplicationDate: "",
    },
    onSubmit: (values) => {
      dispatch(addJobAdvertisement(values))
      history.push("/jobAdvertisements")
    },
    validationSchema: yup.object().shape({
      jobPositionId: yup.number().required("Pozisyon bo?? b??rak??lamaz"),
      description: yup.string().required("A????klama alan?? bo?? b??rak??lamaz"),
      minSalary: yup
        .number("L??tfen say??sal bir de??er giriniz")
        .min(0, "Minimum maa?? de??eri 0 dan k??????k olamaz"),
      maxSalary: yup
        .number("L??tfen say??sal bir de??er giriniz")
        .min(0, "Maksimum maa?? 0 dan k??????k olamaz"),
      jobTypeId: yup.string().required("??al????ma tipi bo?? ge??ilemez"),
      jobTimeId: yup.string().required("??al????ma zaman?? bo?? ge??ilemez"),
      cityId: yup.string().required("??ehir se??ilmelidir"),
      activePositions: yup
        .number()
        .min(1, "A????k pozisyon en az 1 olmal??d??r")
        .required("Aktif posizyon k??sm?? bo?? b??rak??lamaz"),
      lastApplicationDate: yup
        .date()
        .required("Son ba??vuru tarihi mutlaka se??ilmelidir")
        .min(new Date()),
    }),
  });

  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Field>
          <Form.Select
            required
            id="jobPositionId"
            label="Pozisyon"
            placeholder="Pozisyon ara"
            width={16}
            pointing="bottom"
            fluid
            search
            selection
            options={positionOptions}
            value={formik.values.jobPositionId}
            onChange={(e, value) =>
              formik.setFieldValue("jobPositionId", value.value)
            }
            onBlur={formik.handleBlur}
            error={formik.touched.jobPositionId && formik.errors.jobPositionId}
          />
          <Form.Input
            required
            id="activePositions"
            label="A????k pozisyon say??s??"
            width={16}
            placeholder="1"
            fluid
            value={formik.values.activePositions}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.activePositions && formik.errors.activePositions
            }
          />

          <Form.Field width={16}>
            <Form.TextArea
              required
              name="description"
              id="description"
              label="A????klama"
              placeholder="A????klama girin"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.description && formik.errors.description}
            />
          </Form.Field>
        </Form.Field>

        <Form.Input
          id="minSalary"
          label="Tahmini Minimum Maa??"
          width={6}
          placeholder="2000"
          fluid
          value={formik.values.minSalary}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.minSalary}
        />
        <Form.Input
          id="maxSalary"
          label="Tahmini Maksimum Maa??"
          width={6}
          placeholder="5000"
          fluid
          value={formik.values.maxSalary}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.maxSalary}
        />

        <Form.Field required widths="equal">
          <label>??al????ma tipi</label>
          {jobTypes.map((jobType) => (
            <Form.Radio
              key={jobType.id}
              id={`jobTypeId-${jobType.id}`}
              name="jobTypeId"
              label={jobType.type}
              value={jobType.id}
              onChange={(e, { value }) =>
                formik.setFieldValue("jobTypeId", { value }.value)
              }
              checked={formik.values.jobTypeId === jobType.id}
            />
          ))}
          {formik.touched.jobTypeId && formik.errors.jobTypeId && (
            <Message negative>
              {formik.touched.jobTypeId && formik.errors.jobTypeId}
            </Message>
          )}

          <label>??al????ma Zaman??</label>
          {jobTimes.map((jobTime) => (
            <Form.Radio
              key={jobTime.id}
              id={`jobTimeId-${jobTime.id}`}
              name="jobTimeId"
              label={jobTime.type}
              value={jobTime.id}
              onChange={(e, { value }) =>
                formik.setFieldValue("jobTimeId", { value }.value)
              }
              checked={formik.values.jobTimeId === jobTime.id}
            />
          ))}
          {formik.touched.jobTimeId && formik.errors.jobTimeId && (
            <Message negative>
              {formik.touched.jobTimeId && formik.errors.jobTimeId}
            </Message>
          )}
        </Form.Field>
        <Form.Field>
          <Form.Select
            label="??ehir"
            width={16}
            placeholder="??ehir ara"
            fluid
            search
            selection
            options={cityOptions}
            value={formik.values.cityId}
            onChange={(e, { value }) =>
              formik.setFieldValue("cityId", { value }.value)
            }
            error={formik.touched.cityId && formik.errors.cityId}
          />
        </Form.Field>
        <Form.Field>
          <label>Son Ba??vuru Tarihi</label>
          <DatePicker
            locale={tr}
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            selected={lastApplicationDate}
            onSelect={(date) => setlastApplicationDate(date)}
            onChange={(value) => {
              formik.setFieldValue(
                "lastApplicationDate",
                moment(value).format("YYYY-MM-DD")
              );
            }}
          />
          {formik.touched.lastApplicationDate &&
            formik.errors.lastApplicationDate && (
              <Message negative>
                {formik.touched.lastApplicationDate &&
                  formik.errors.lastApplicationDate}
              </Message>
            )}
        </Form.Field>
        <Form.Field>
          <Grid>
            <Grid.Row centered>
              <Button
                floated="right"
                color="violet"
                labelPosition="right"
                icon="save"
                content="Kaydet"
                type="submit"
              />
              
            </Grid.Row>
          </Grid>
        </Form.Field>
      </Form>
    </Container>
  );
};
