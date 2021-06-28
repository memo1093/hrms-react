import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Container, Form, Image } from "semantic-ui-react";
import * as yup from "yup";
import ResumeService from "../../services/ResumeService";
import { getResumeById } from "../../store/actions/resumeActions";

export const UpdateResume = () => {
  let { id } = useParams();
  const resumeService = new ResumeService();
  const resume = useSelector((state) => state.resume);
  const history=useHistory()
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
      resumeService
        .addResume(values)
        .then((result) => {
          toast.success("Güncelleme işlemi başarılı")
          history.push(`/resumes/${resume.resume.candidate?.id}`);
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

  useEffect(() => {
    dispatch(getResumeById(id));
  }, [id,dispatch]);
  return !resume.loading ? (
    <Container>
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
            label="Özet bilgi"
            value={formik.values.coverLetter}
            name="coverLetter"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.coverLetter && formik.errors.coverLetter}
          />
        </Form.Field>
        {console.log(resume)}
        <Form.Field>
          <Button type="submit" color="violet">
            Güncelle
          </Button>
        </Form.Field>
      </Form>
    </Container>
  ) : (
    <Image src={"./img/loading.gif"}></Image>
  );
};
