import { useFormik } from "formik";
import React from "react";
import { Button, Form, Grid} from "semantic-ui-react";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addTalent } from "../store/actions/resumeActions";

export const AddResumeTalent = ({
  setAdded,
  resumeId,
  progress,
  setProgress
}) => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      id:"" ,
      name: "",
      resumeId: resumeId,
    },
    onSubmit: (values) => {
        dispatch(addTalent(values))
        setAdded(false)
    },
    validationSchema: yup.object().shape({
      name: yup
        .string()
        .required("Yetenek adı girilmelidir")
        .min(2, "Yetenek adı en az iki haneli olmalıdır"),
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
              required
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
};
