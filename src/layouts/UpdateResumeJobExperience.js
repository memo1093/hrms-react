import { useFormik } from "formik";
import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Grid, Message } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import * as yup from "yup";
import tr from "date-fns/locale/tr";
import { updateJobExperience } from "../store/actions/resumeActions";


export const UpdateResumeJobExperience = ({
  setUpdateable,
  jobExperience,
  resumeId,
}) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: jobExperience.id,
      resumeId: resumeId,
      companyName: jobExperience.companyName,
      position: jobExperience.position,
      stillWorking: jobExperience.stillWorking,
      startDate: jobExperience.startDate,
      endDate: jobExperience.endDate,
    },
    onSubmit: (values) => {
      dispatch(updateJobExperience(values));
      setUpdateable(false);
    },
    validationSchema: yup.object().shape({
        companyName: yup
          .string()
          .required("Şirket adı girilmelidir")
          .min(2, "Şirket adı en az iki haneli olmalıdır"),
  
          position: yup
          .string()
          .required("Pozisyon girilmelidir")
          .min(2, "Pozisyon adı en az iki haneli olmalıdır"),
          stillWorking: yup
          .boolean()
          .required("Çalışma durumu seçilmelidir"),
          
        startDate: yup.date().required("Tarih girilmelidir"),
        endDate: yup.date().max(new Date(),"Son tarih bugünün tarihinden fazla olamaz"),
      }),
  });
  const parsedStartDate = Date.parse(
    moment(formik.values.startDate).format("DD-MM-YYYY")
  );
  const parsedEndDate = Date.parse(
    moment(formik.values.endDate).format("DD-MM-YYYY")
  );
  return (
  <Grid centered>
    <Grid.Row centered columns={2}>
      <Grid.Column>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Field>
            <Form.Input
              label="Şirket adı"
              value={formik.values.companyName}
              name="companyName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.companyName && formik.errors.companyName}
            />
          </Form.Field>
          <Form.Field required>
            <Form.Input
              label="Pozisyon"
              value={formik.values.position}
              name="position"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.position && formik.errors.position
              }
            />
            </Form.Field>
          <Form.Field>
            <label>Çalışma durumu</label>

            <Form.Radio
              name="stillWorking"
              label="Devam ediyor"
              value={true}
              checked={formik.values.stillWorking}
              onChange={(e) => formik.setFieldValue("stillWorking", true)}
            />

            {formik.touched.stillWorking && formik.errors.stillWorking && (
              <Message negative>
                {formik.touched.stillWorking && formik.errors.stillWorking}
              </Message>
            )}
            <Form.Radio
              name="stillWorking"
              label="Ayrıldı"
              value={false}
              checked={!formik.values.stillWorking}
              onChange={(e) => formik.setFieldValue("stillWorking", false)}
            />

            {formik.touched.stillWorking && formik.errors.stillWorking && (
              <Message negative>
                {formik.touched.stillWorking && formik.errors.stillWorking}
              </Message>
            )}
          </Form.Field>
          <Form.Field required>
            <label>Başlangıç Tarihi</label>
            <DatePicker
              locale={tr}
              selected={parsedStartDate}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              onChange={(value) => {
                formik.setFieldValue(
                  "startDate",
                  moment(value).format("YYYY-MM-DD")
                );
              }}
            />
            {formik.touched.startDate && formik.errors.startDate && (
              <Message negative>
                {formik.touched.startDate && formik.errors.startDate}
              </Message>
            )}
          </Form.Field>

          {!formik.values.stillWorking && (
            <Form.Field>
              <label>Bitiş Tarihi</label>

              <DatePicker
                selected={parsedEndDate}
                locale={tr}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                onChange={(value) => {
                  formik.setFieldValue(
                    "endDate",
                    moment(value).format("YYYY-MM-DD")
                  );
                }}
              />

              {formik.touched.endDate && formik.errors.endDate && (
                <Message negative>
                  {formik.touched.endDate && formik.errors.endDate}
                </Message>
              )}
            </Form.Field>
          )}
          <Form.Field>
            <Grid>
              <Grid.Row>
                <Grid.Column textAlign="right">
                  <Button icon="save" type="submit" color="violet"></Button>
                  <Button icon="times" color="red" onClick={()=>setUpdateable(false)}></Button>

                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form.Field>
        </Form>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  );
};
