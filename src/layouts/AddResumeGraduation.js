import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Button, Form, Grid, Message } from 'semantic-ui-react';
import { addGraduation } from '../store/actions/resumeActions';
import tr from "date-fns/locale/tr";
import DatePicker from "react-datepicker";
import * as yup from 'yup'
import moment from 'moment';

export const AddResumeGraduation = ({setAdded,resumeId,progress,setProgress}) => {
    const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      id: "",
      resumeId: resumeId,
      schoolName: "",
      schoolDegree: "",
      schoolDepartment: "",
      stillStudying: false,
      startDate: "",
      endDate: "",
    },
    onSubmit: (values) => {
        dispatch(addGraduation(values))
        toast.success("Mezuniyet bilgisi eklendi")
        setAdded(false)
        
    },
    validationSchema: yup.object().shape({
      schoolName: yup
        .string()
        .required("Okul adı girilmelidir")
        .min(2, "Mezuniyet derecesi en az iki haneli olmalıdır"),

      schoolDegree: yup
        .string()
        .required("Okul Derecesi girilmelidir")
        .min(2, "Mezuniyet derecesi en az iki haneli olmalıdır"),
      schoolDepartment: yup
        .string()
        .required("Bölüm girilmelidir")
        .min(2, "Bölüm en az iki haneli olmalıdır"),
      stillStudying: yup.boolean().required("Öğrenme durumu seçilmelidir"),
      startDate: yup.date().required("Tarih girilmelidir"),
      endDate: yup.date().max(new Date(),"Bitiş tarihi gelecek bir tarihten olamaz"),
    }),
  });
  const parsedStartDate = Date.parse(
    moment(formik.values.startDate).format("DD-MM-YYYY")
  );
  const parsedEndDate = Date.parse(
    moment(formik.values.endDate).format("DD-MM-YYYY")
  );
  const handleNext =()=>{
    if (progress) {
      setProgress(progress+1)
    }
  }
    return (
        <Grid centered>
      <Grid.Row centered columns={2}>
        <Grid.Column>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
              <Form.Input
                label="Okul adı"
                value={formik.values.schoolName}
                name="schoolName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.schoolName && formik.errors.schoolName}
              />
            </Form.Field>
            <Form.Field required>
              <Form.Input
                label="Okulun derecesi"
                value={formik.values.schoolDegree}
                name="schoolDegree"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.schoolDegree && formik.errors.schoolDegree
                }
              />
              <Form.Input
                label="Bölüm"
                value={formik.values.schoolDepartment}
                name="schoolDepartment"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.schoolDepartment &&
                  formik.errors.schoolDepartment
                }
              />
            </Form.Field>
            <Form.Field>
              <label>Mezuniyet durumu</label>

              <Form.Radio
                name="stillStudying"
                label="Devam ediyor"
                value={true}
                checked={formik.values.stillStudying}
                onChange={(e) => formik.setFieldValue("stillStudying", true)}
              />

              {formik.touched.stillStudying && formik.errors.stillStudying && (
                <Message negative>
                  {formik.touched.stillStudying && formik.errors.stillStudying}
                </Message>
              )}
              <Form.Radio
                name="stillStudying"
                label="Mezun"
                value={false}
                checked={!formik.values.stillStudying}
                onChange={(e) => formik.setFieldValue("stillStudying", false)}
              />

              {formik.touched.stillStudying && formik.errors.stillStudying && (
                <Message negative>
                  {formik.touched.stillStudying && formik.errors.stillStudying}
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

            {!formik.values.stillStudying && (
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
                    <Button icon={progress?"plus":"save"} type="submit" color="violet"></Button>
                    {!progress&&<Button icon="times" color="red" onClick={()=>setAdded(false)}></Button>}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Form.Field>
          </Form>
        </Grid.Column>
      </Grid.Row>
                  {progress&&<Grid.Row><Grid.Column textAlign="center"> <Button positive onClick={()=>handleNext()}>İleri</Button></Grid.Column></Grid.Row>}
    </Grid>
    )
}
