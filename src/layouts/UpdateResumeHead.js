import { useFormik } from "formik";
import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Button, Form, Grid, Icon, Image,Reveal } from "semantic-ui-react";
import * as yup from "yup";
import { addResumeImage, updateResumeHead } from "../store/actions/resumeActions";

export const UpdateResumeHead = ({ setUpdateable, resume,progress,setProgress}) => {
  const imageRef = useRef();
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      candidateId: resume.resume.candidate?.id,
      id: resume.resume.id,
      coverLetter: resume.resume.coverLetter,
      title: resume.resume.title,
      profilePicture: resume.resume.profilePicture,
    },
    onSubmit: (values) => {
      dispatch(updateResumeHead(values));
      setUpdateable(false);
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

  
  const handleImageUpload = (e) => {
    if (!e.target.files[0].name.endsWith(".jpg"||".png"||".jpeg")) {
      toast.warning("Dosya formatı doğru değil");
    }else if(e.target.files[0].size>20971520){ //byte
      toast.warning("Dosya boyutu 20mb den küçük olmalıdır");
    }else{
      const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("resumeId", formik.values.id);
    dispatch(addResumeImage(formData))

    }

    
  };

  return !resume.loading ? (
    <Grid centered>
      <Grid.Row columns={2} centered>
        <Grid.Column>
          <Form.Field required></Form.Field>

          <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
              <Reveal animated="fade" >
                <Reveal.Content visible>
                  <Image
                    src={formik.values.profilePicture}
                    circular
                    size="small"
                    onClick={() => imageRef.current.click()}
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image
                    style={{ opacity: "0.5" }}
                    src={formik.values.profilePicture}
                    circular
                    size="small"
                    onClick={() => imageRef.current.click()}
                    
                  />
                  <Icon name="plus" color="grey" style={{position:"absolute",marginTop:"-5rem",marginLeft:"5rem"}}/>
                  
                </Reveal.Content>
              </Reveal>

              

              <input
                ref={imageRef}
                type="file"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </Form.Field>
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
                  {!progress&&(<Button
                    icon="times"
                    color="red"
                    onClick={() => setUpdateable(false)}
                  ></Button>)
                  }
                  
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ) : (
    <Image src={"./img/loading.gif"}></Image>
  );
};
