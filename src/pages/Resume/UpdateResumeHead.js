import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { toast } from "react-toastify";
import { Button, Form, Grid, Icon, Image } from "semantic-ui-react";
import * as yup from "yup";
import ResumeService from "../../services/ResumeService";

export const UpdateResumeHead = ({ setUpdateable, resume }) => {
  const imageRef = useRef();
  const resumeService = new ResumeService();
  const [selectedImage, setSelectedImage] = useState({});

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
      resumeService
        .addOrUpdateResumeHead(values)
        .then((result) => {
          toast.success("Güncelleme işlemi başarılı");
          setUpdateable(false);
        })
        .catch((error) => toast.error("Beklenmedik bir hata oluştu"));
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


  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };
  const handleImageUpload = () => {
    if (!selectedImage) {
      toast.warning("Dosya Seçilmedi");
    }
    const formData = new FormData();
    formData.append("file", selectedImage, selectedImage.name);
    formData.append("resumeId", formik.values.id);
    resumeService
      .addOrUpdateImage(formData)
      .then((response) => {
        
        toast.success("Profil fotoğrafı güncelleme işlemi başarılı");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Beklenmedik bir hata oluştu");
      });
  };

  return !resume.loading ? (
    <Grid centered>
      <Grid.Row columns={2} centered>
        <Grid.Column>
          <Form.Field required></Form.Field>

          <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
              <Image
                src={formik.values.profilePicture}
                circular
                size="tiny"
                onClick={() => imageRef.current.click()}
              />
              <Icon
                name="save"
                size="large"
                style={{ marginLeft: "2rem" }}
                onClick={handleImageUpload}
              />
              <input
                ref={imageRef}
                type="file"
                onChange={handleImageChange}
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
