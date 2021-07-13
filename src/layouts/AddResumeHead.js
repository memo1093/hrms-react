import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { addResumeHead } from '../store/actions/resumeActions';
import * as yup from 'yup'
import { Button, Form, Grid } from 'semantic-ui-react';

export const AddResumeHead = ({setAdded,candidateId,setProgress,progress}) => {
  const dispatch = useDispatch();
   
  const formik = useFormik({
    initialValues: {
      candidateId: candidateId,
      coverLetter: "",
      title: "",
    },
    onSubmit: (values) => {
      dispatch(addResumeHead(values));
     
      setAdded&&setAdded(false);
      progress&&setProgress(progress+1)
          
      
    },
    validationSchema: yup.object().shape({
      coverLetter: yup
        .string()
        .required("Özet bilgi girilmelidir")
        .min(10, "Özet bilgi 10 karakterden fazla olmalıdır."),
      title: yup
        .string()
        .required("Başlık girilmelidir")
        .min(3, "Başlık minimum 3 karakter içermelidir"),
    }),
  });

  
  

  return (
    <Grid centered>
      <Grid.Row columns={2} centered>
        <Grid.Column>
          <Form.Field required></Form.Field>

          <Form onSubmit={formik.handleSubmit}>
           
            <Form.Field>
              <Form.Input
                label="Başlık"
                value={formik.values.title}
                name="title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.title && formik.errors.title}
              />
            </Form.Field>
            <Form.Field required>
              
              <Form.TextArea
                label="Özet bilgiler"
                value={formik.values.coverLetter}
                name="coverLetter"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.coverLetter && formik.errors.coverLetter}
              />
            </Form.Field>

            <Grid>
              <Grid.Row>
                <Grid.Column textAlign="right">
                  <Button icon="save" type="submit" color="violet"></Button>
                  {!progress&&<Button
                    icon="times"
                    color="red"
                    onClick={() => setAdded(false)}
                  ></Button>}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
