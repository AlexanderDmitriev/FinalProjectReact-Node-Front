import * as React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  FormInput,
  GoogleButton,
  TextGoogleButton,
  Input,
  InputEmail,
  Label,
  FieldInput,
  Button,
  TextButton,
  Text,
  Author,
  NavRegister,
  TextBox,
  Mark,
  Border,
} from './styled/Login.styled';

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';

export default function Login() {
  return (
    <Box>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Невірна адреса')
            .required("Поле обов'язкове"),
          password: Yup.string()
            .min(6, 'Мінімум 6 символів')
            .required("Поле обов'язкове"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <FormInput>
            <Input>
              <GoogleButton type="submit">
                <TextGoogleButton>Google</TextGoogleButton>
              </GoogleButton>
              <InputEmail>
                <Label htmlFor="email">Електронна адреса</Label>
                <FieldInput
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                />
                <ErrorMessage name="email" />
              </InputEmail>
              <Label htmlFor="password">Пароль</Label>
              <FieldInput name="password" type="text" placeholder="Пароль" />
              <ErrorMessage name="password" />
            </Input>

            <Button type="submit">
              <TextButton>Увійти</TextButton>
            </Button>

            <NavRegister to="/register">Реєстрація</NavRegister>
          </FormInput>
        </Form>
      </Formik>

      <TextBox>
        <Mark />
        <Text>
          Книги — это корабли мысли, странствующие по волнам времени и бережно
          несущие свой драгоценный груз от поколения к поколению.
        </Text>
        <Border />
        <Author>Бэкон Ф.</Author>
      </TextBox>
    </Box>
  );
}
