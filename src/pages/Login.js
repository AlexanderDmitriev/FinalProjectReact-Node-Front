import * as React from 'react';
import { Formik, ErrorMessage } from 'formik';
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
  Border,LibraryForm,
} from './styled/Login.styled';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/authAPI/auth-operation';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
  };

  return (
    <Box>
      <Formik
        // initialValues={{ email: '', password: '' }}
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
        <LibraryForm onSubmit={handleSubmit}>
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
                  onChange={handleChange}
                />
                <ErrorMessage name="email" />
              </InputEmail>
              <Label htmlFor="password">Пароль</Label>
              <FieldInput
                name="password"
                type="text"
                placeholder="Пароль"
                onChange={handleChange}
              />
              <ErrorMessage name="password" />
            </Input>

            <Button type="submit">
              <TextButton>Увійти</TextButton>
            </Button>

            <NavRegister to="/register">Реєстрація</NavRegister>
          </FormInput>
        </LibraryForm>
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
