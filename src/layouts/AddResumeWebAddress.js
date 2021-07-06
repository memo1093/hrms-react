import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { addWebAdresses } from '../store/actions/resumeActions';
import * as yup from 'yup'
import { Button, Form, Grid } from 'semantic-ui-react';

export const AddResumeWebAddress = ({
    setAdded,
    resumeId,
    progress,
    setProgress
  }) => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      id:"" ,
      linkedInAddress: "",
      githubAddress: "",
      twitterAddress: "",
      anotherAddress: "",
      anotherAddress2: "",

      resumeId: resumeId,
    },
    onSubmit: (values) => {
        dispatch(addWebAdresses(values))
        toast.success("Web adresleri eklendi")
        setAdded(false)
    },
    validationSchema: yup.object().shape({
        linkedInAddress: yup
        .string()
        .min(2, "Yetenek adı en az iki haneli olmalıdır").matches("[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)","Lütfen geçerli bir adres girin"),
        githubAddress: yup
        .string()
        .min(2, "Yetenek adı en az iki haneli olmalıdır").matches("[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)","Lütfen geçerli bir adres girin"),
        twitterAddress: yup
        .string()
        .min(2, "Yetenek adı en az iki haneli olmalıdır").matches("[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)","Lütfen geçerli bir adres girin"),
        anotherAddress: yup
        .string()
        .min(2, "Yetenek adı en az iki haneli olmalıdır").matches("[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)","Lütfen geçerli bir adres girin"),
        anotherAddress2: yup
        .string()
        .min(2, "Yetenek adı en az iki haneli olmalıdır").matches("[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)","Lütfen geçerli bir adres girin"),
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
          <p>Tüm web sitesi alanlarının doldurulması şart değildir</p>
        <Grid.Column>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field required>
              <Form.Input
                label="LinkedIn adresi"
                value={formik.values.linkedInAddress}
                name="linkedInAddress"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.linkedInAddress && formik.errors.linkedInAddress}
              />
            </Form.Field>
            <Form.Field required>
              <Form.Input
                label="GitHub Adresi"
                value={formik.values.githubAddress}
                name="githubAddress"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.githubAddress && formik.errors.githubAddress}
              />
            </Form.Field>
            <Form.Field required>
              <Form.Input
                label="Twitter Adresi"
                value={formik.values.twitterAddress}
                name="twitterAddress"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.twitterAddress && formik.errors.twitterAddress}
              />
            </Form.Field>
            <Form.Field required>
              <Form.Input
                label="Web adresi"
                value={formik.values.anotherAddress}
                name="anotherAddress"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.anotherAddress && formik.errors.anotherAddress}
              />
            </Form.Field>
            <Form.Field required>
              <Form.Input
                label="Web adresi 2"
                value={formik.values.anotherAddress2}
                name="anotherAddress2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.anotherAddress2 && formik.errors.anotherAddress2}
              />
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
    )
}
