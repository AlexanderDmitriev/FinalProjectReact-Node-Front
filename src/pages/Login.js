import * as React from 'react';
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
  // IconWrapper,
  // Icon,
} from './styled/Login.styled';

// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/authAPI/auth-operation';
// import google from '../images/login + register img/googleicon.svg';

export default function Login() {
  const dispatch = useDispatch();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'email':
  //       return setEmail(value);
  //     case 'password':
  //       return setPassword(value);
  //     default:
  //       return;
  //   }
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   dispatch(authOperations.logIn({ email, password }));
  // };

  const validationSchema = yup.object().shape({
    email: yup.string().email('Невірна адреса').required("Поле обов'язкове"),
    password: yup
      .string()
      .min(6, 'Мінімум 6 символів')
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
                    <GoogleButton type="submit">
                      {/* <IconWrapper>
                        <Icon width="18" height="18">
                          <use href={google}></use>
                        </Icon>
                      </IconWrapper> */}
                      <TextGoogleButton>Google</TextGoogleButton>
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
            Книги — это корабли мысли, странствующие по волнам времени и бережно
            несущие свой драгоценный груз от поколения к поколению.
          </Text>
          <Border />
          <Author>Бэкон Ф.</Author>
        </TextBox>
      </Box>
    </>
  );
}
