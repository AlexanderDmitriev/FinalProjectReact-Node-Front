import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  Box,
  FormBox,
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
  Error,
  Star,
} from '../components/Login.styled';

import { useDispatch } from 'react-redux';
import authOperations from '../redux/authAPI/auth-operation';

export default function Login() {
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .min(2, 'Мінімум 2 символа')
      .email('Невірна адреса')
      .required("Поле обов'язкове"),
    password: yup
      .string()
      .min(5, 'Мінімум 5 символів')
      .max(30, 'Максимум 30 символів')
      .required("Поле обов'язкове"),
  });

  return (
    <>
      <Box>
        <FormBox>
          <Formik
            initialValues={{ email: '', password: '' }}
            validateOnBlur
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              dispatch(
                authOperations.logIn({
                  email: values.email,
                  password: values.password,
                })
              );
              /* resetForm(); */
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isValid,
              handleSubmit,
              dirty,
            }) => (
              <Form>
                <FormInput>
                  <GoogleButton type="button">
                    <a href="http://localhost:3002/api/users/google">
                      <TextGoogleButton>Google</TextGoogleButton>
                    </a>
                  </GoogleButton>
                  <Input>
                    <InputEmail>
                      <Label htmlFor="email">
                        Електронна адреса<Star>*</Star>
                      </Label>
                      <FieldInput
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.email && errors.email && (
                        <ErrorMessage name="email">
                          {msg => <Error>{msg}</Error>}
                        </ErrorMessage>
                      )}
                    </InputEmail>

                    <Label htmlFor="password">
                      Пароль<Star>*</Star>
                    </Label>
                    <FieldInput
                      name="password"
                      type="password"
                      placeholder="..."
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.password && errors.password && (
                      <ErrorMessage name="password">
                        {msg => <Error>{msg}</Error>}
                      </ErrorMessage>
                    )}
                  </Input>

                  <Button
                    type="submit"
                    disabled={!isValid && !dirty}
                    onClick={handleSubmit}
                  >
                    <TextButton>Увійти</TextButton>
                  </Button>

                  <NavRegister to="/register">Реєстрація</NavRegister>
                </FormInput>
              </Form>
            )}
          </Formik>
        </FormBox>

        <TextBox>
          <Mark />
          <Text>
            Книги — це кораблі думок, які мандрують по хвилям часу та дбайливо
            несуть свій дорогоцінний груз від покоління до покоління.
          </Text>
          <Border />
          <Author>Бекон Ф.</Author>
        </TextBox>
      </Box>
    </>
  );
}
