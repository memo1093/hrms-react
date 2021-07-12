import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { updateLanguage } from "../store/actions/resumeActions";
import * as yup from "yup";
import { Button, Form, Grid, Message, Rating } from "semantic-ui-react";

export const UpdateResumeLanguage = ({ setUpdateable, language, resumeId }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: language.id,
      language: language.language,
      rate: language.rate,
      resumeId: resumeId,
    },
    onSubmit: (values) => {
      dispatch(updateLanguage(values));
      setUpdateable(false);
    },
    validationSchema: yup.object().shape({
      language: yup
        .string()
        .required("Dil adı girilmelidir")
        .min(2, "Dil adı en az iki haneli olmalıdır"),
      rate: yup.number().required("Dil derecesi seçilmelidir"),
    }),
  });

  return (
    <Grid centered>
      <Grid.Row centered columns={2}>
        <Grid.Column>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
              <Form.Input
                label="Dil"
                value={formik.values.language}
                name="language"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.language && formik.errors.language}
              />
            </Form.Field>

            <Form.Field>
              <label>Derece</label>
              <Rating
                icon="star"
                defaultRating={formik.values.rate}
                maxRating={5}
                onRate={(e, { rating }) => formik.setFieldValue("rate", rating)}
              />
              {formik.touched.rate && formik.errors.rate && (
                <Message negative>
                  {formik.touched.rate && formik.errors.rate}
                </Message>
              )}
            </Form.Field>

            <Form.Field>
              <Grid>
                <Grid.Row>
                  <Grid.Column textAlign="right">
                    <Button icon="save" type="submit" color="violet"></Button>
                    <Button
                      icon="times"
                      color="red"
                      onClick={() => setUpdateable(false)}
                    ></Button>
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
