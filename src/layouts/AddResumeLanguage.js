import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Button, Form, Grid, Message, Rating } from 'semantic-ui-react';
import { addLanguage } from '../store/actions/resumeActions';
import * as yup from 'yup'

export const AddResumeLanguage = ({setAdded,resumeId,progress,setProgress}) => {
    const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      id:"" ,
      language: "",
      rate:1,
      resumeId: resumeId,
    },
    onSubmit: (values) => {
       
        dispatch(addLanguage(values))
        toast.success("Dil bilgisi eklendi")
        setAdded(false)
    },
    validationSchema: yup.object().shape({
        language: yup
        .string()
        .required("Dil adı girilmelidir")
        .min(2, "Dil adı en az iki haneli olmalıdır"),
        rate:yup.number().required("Dil derecesi seçilmelidir")
    }),
  });
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
            <Form.Field required>
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
            <Rating icon='star' defaultRating={1} maxRating={5} onRate={(e,{rating})=>formik.setFieldValue("rate",rating)} />
             {formik.touched.rate&&formik.errors.rate&&(<Message negative>{formik.touched.rate&&formik.errors.rate}</Message>)} 
            </Form.Field>
           
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
  );
}
