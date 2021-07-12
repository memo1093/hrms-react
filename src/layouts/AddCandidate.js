import { useFormik } from "formik";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Grid, Message } from "semantic-ui-react";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import tr from "date-fns/locale/tr";
import { addCandidate } from "../store/actions/candidateActions";

export const AddCandidate = ({onSubmitted}) => {
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [repasswordVisible, setRepasswordVisible] = useState(true);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repassword: "",
      firstName: "",
      lastName: "",
      identityNumber: "",
      birthDate: moment(new Date()).format("DD-MM-YYYY"),
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
      firstName: yup
        .string()
        .matches(/^[A-Za-z]+$/, "Bu alana sayı değerleri girilemez")
        .required("Ad alanı zorunludur")
        .min(2, "Ad alanının minimum 2 karakter olması gerekmektedir"),
      lastName: yup
        .string()
        .matches(/^[A-Za-z]+$/, "Bu alana sayı değerleri girilemez")
        .required("Soyad alanı zorunludur")
        .min(2, "Soyad alanının minimum 2 karakter olması gerekmektedir"),
      identityNumber: yup
        .string()
        .matches(/^\d+$/, "Bu alana sayı değerleri dışında değerler girilemez")
        .required("Kimlik numarası girilmesi zorunludur")
        .length(11, "Bu alan 11 karakter içermelidir"),
      birthDate: yup
        .date()
        .required("Doğum tarihi zorunludur")
        .max(
          moment(new Date()).add(-15, "years"),
          "Kaydolmak için 15 yaşından büyük olmak gerekmektedir"
        ),
    }),
    onSubmit: (values) => {
      dispatch(addCandidate(values))
      
      onSubmitted()
    },
  });
  const parsedBirthDate = Date.parse(
    moment(formik.values.birthDate).format("DD-MM-YYYY")
  );
  return (
    <Grid centered>
      <Grid.Row columns={2} centered>
        <Grid.Column>
          <Form.Field required></Form.Field>

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
                action={{ icon: passwordVisible ? "eye":"eye slash outline"  , 
                          onClick:()=>setPasswordVisible(!passwordVisible)    }}
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
                action={{ icon: repasswordVisible ? "eye":"eye slash outline"  , 
                onClick:()=>setRepasswordVisible(!repasswordVisible)    }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.repassword && formik.errors.repassword}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                required
                label="Ad"
                value={formik.values.firstName}
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.firstName && formik.errors.firstName}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                required
                label="Soyad"
                value={formik.values.lastName}
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lastName && formik.errors.lastName}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                required
                label="Tc Kimlik No"
                value={formik.values.identityNumber}
                name="identityNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.identityNumber && formik.errors.identityNumber
                }
              />
            </Form.Field>
            <Form.Field required>
              <label>Doğum Tarihi</label>
              <DatePicker
                locale={tr}
                selected={parsedBirthDate}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                onChange={(value) => {
                  formik.setFieldValue(
                    "birthDate",
                    moment(value).format("YYYY-MM-DD")
                  );
                }}
              />
              {formik.touched.birthDate && formik.errors.birthDate && (
                <Message negative>
                  {formik.touched.birthDate && formik.errors.birthDate}
                </Message>
              )}
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
