import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Grid,Form } from "semantic-ui-react";
import * as yup from "yup";
import { addEmployer } from "../store/actions/employerActions";

export const AddEmployer = ({onSubmitted}) => {
    const dispatch = useDispatch()
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [repasswordVisible, setRepasswordVisible] = useState(true);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repassword: "",
      companyName: "",
      phoneNumber: "",
      webAddress: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email("Geçerli bir email giriniz")
        .required("Email girilmesi zorunludur"),
      password: yup.string().required("Şifre girilmesi zorunludur").min(6,"Şifre minimum 6 karakter içermelidir"),
      repassword: yup
        .string()
        .required("Şifre girilmesi zorunludur")
        .oneOf([yup.ref("password")], "Şifreler eşleşmiyor"),
      companyName: yup
        .string()
        .required("Şirket adı alanı zorunludur")
        .min(2, "Şirket adı alanının minimum 2 karakter olması gerekmektedir"),
      phoneNumber: yup
        .string()
        .matches(/^\d+$/, "Bu alana sayı değerleri girilemez")
        .required("Soyad alanı zorunludur")
        .min(2, "Soyad alanının minimum 2 karakter olması gerekmektedir"),
      webAddress: yup
        .string()
        .matches(
          /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
          "Lütfen geçerli bir internet adresi giriniz"
        )
        .required("Kimlik numarası girilmesi zorunludur")
    }),
    onSubmit: (values) => {
      dispatch(addEmployer(values))
      onSubmitted()
    },
  });
  return (
    <Grid centered>
      <Grid.Row columns={2} centered>
        <Grid.Column>

          <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
              <Form.Input
                required
                label="Email"
                value={formik.values.email}
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && formik.errors.email}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                required
                label="Şifre"
                value={formik.values.password}
                type={passwordVisible ? "password" : ""}
                name="password"
                action={{
                  icon: passwordVisible ? "eye" : "eye slash outline",
                  onClick: () => setPasswordVisible(!passwordVisible),
                }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && formik.errors.password}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                required
                label="Şifre Tekrarı"
                value={formik.values.repassword}
                type="password"
                name="repassword"
                action={{
                  icon: repasswordVisible ? "eye" : "eye slash outline",
                  onClick: () => setRepasswordVisible(!repasswordVisible),
                }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.repassword && formik.errors.repassword}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                required
                label="Şirket Adı"
                value={formik.values.companyName}
                name="companyName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.companyName && formik.errors.companyName}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                required
                label="Telefon Numarası"
                value={formik.values.phoneNumber}
                name="phoneNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phoneNumber && formik.errors.phoneNumber}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                required
                label="İnternet Adresi"
                value={formik.values.webAddress}
                name="webAddress"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.webAddress && formik.errors.webAddress}
              />
            </Form.Field>

            <Grid>
              <Grid.Row>
                <Grid.Column textAlign="right">
                  <Button
                    icon="user"
                    content="Kaydol"
                    type="submit"
                    color="violet"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
);
};
