import * as React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  Box,
  FormBox,
  FormInput,
  NavGoogle,
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
} from './styled/Login.styled';

import { useDispatch } from 'react-redux';
import authOperations from '../redux/authAPI/auth-operation';

// import Timers from '../components/Timers/Timers';

export default function Login() {
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    email: yup.string().email('Невірна адреса').required("Поле обов'язкове"),
    password: yup
      .string()
      .min(6, 'Мінімум 6 символів')
      .required("Поле обов'язкове"),
  });

  return (
    <>
    {/* <Timers></Timers> */}
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
              resetForm();
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
                  <Input>
                    <GoogleButton type="button">
                      <NavGoogle to="http://localhost:3001/api/users/google">
                        <TextGoogleButton>Google</TextGoogleButton>
                      </NavGoogle>
                    </GoogleButton>
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
