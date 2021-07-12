import { useFormik } from "formik";
import React from "react";
import { Button, Form, Grid } from "semantic-ui-react";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import {  updateTalent } from "../store/actions/resumeActions";

export const UpdateResumeTalent = ({
  setUpdateable,
  talent,
  resumeId,
}) => {
  const dispatch = useDispatch()

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id:talent.id ,
      name: talent.name,
      resumeId: resumeId,
    },
    onSubmit: (values) => {
        dispatch(updateTalent(values))
        setUpdateable(false)
    },
    validationSchema: yup.object().shape({
      name: yup
        .string()
        .required("Yetenek adı girilmelidir")
        .min(2, "Yetenek adı en az iki haneli olmalıdır"),
    }),
  });
  

  return (
    <Grid centered>
      <Grid.Row centered columns={2}>
        <Grid.Column>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field required>
              <Form.Input
                label="Yetenek adı"
                value={formik.values.name}
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && formik.errors.name}
              />
            </Form.Field>
           
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
