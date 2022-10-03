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
  InputField,
  Label,
  FieldInput,
  Button,
  TextButton,
  NavLogin,
  NavText,
  NavBox,
  TextBox,
  Title,
  List,
  MainListItem,
  Subtitle,
  ListItem,
  Error,
  Star,
} from './styled/Register.styled';

import { useDispatch } from 'react-redux';
import authOperations from '../redux/authAPI/auth-operation';
import { useMediaQuery } from 'react-responsive';

export default function Register() {
  const dispatch = useDispatch();

  const isTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .max(15, 'Максимум 15 символів')
      .required("Поле обов'язкове"),
    email: yup.string().email('Невірна адреса').required("Поле обов'язкове"),
    password: yup
      .string()
      .min(6, 'Мінімум 6 символів')
      .required("Поле обов'язкове"),
    repeat_password: yup
      .string()
      .oneOf([yup.ref('password')], 'Паролі не співпадають'),
  });

  return (
    <>
      <Box>
        <FormBox>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              repeat_password: '',
            }}
            validateOnBlur
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              dispatch(
                authOperations.register({
                  name: values.name,
                  email: values.email,
                  password: values.password,
                  repeat_password: values.repeat_password,
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
                    <InputField>
                      <Label htmlFor="name">
                        Ім'я<Star>*</Star>
                      </Label>
                      <FieldInput
                        name="name"
                        type="text"
                        placeholder="..."
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.name && errors.name && (
                        <ErrorMessage name="name">
                          {msg => <Error>{msg}</Error>}
                        </ErrorMessage>
                      )}
                    </InputField>
                    <InputField>
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
                    </InputField>
                    <InputField>
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
                    </InputField>
                    <Label htmlFor="repeat_password">
                      Підтвердіть пароль<Star>*</Star>
                    </Label>
                    <FieldInput
                      name="repeat_password"
                      type="password"
                      placeholder="..."
                      value={values.repeat_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.repeat_password && errors.repeat_password && (
                      <ErrorMessage name="repeat_password">
                        {msg => <Error>{msg}</Error>}
                      </ErrorMessage>
                    )}
                  </Input>

                  <Button
                    type="submit"
                    disabled={!isValid && !dirty}
                    onClick={handleSubmit}
                  >
                    <TextButton>Зареєструватися</TextButton>
                  </Button>

                  <NavBox>
                    <NavText>
                      Вже з нами? <NavLogin to="/login">Увійти</NavLogin>
                    </NavText>
                  </NavBox>
                </FormInput>
              </Form>
            )}
          </Formik>
        </FormBox>

        {isTablet && (
          <TextBox>
            <Title>Books Reading</Title>
            <List>
              <MainListItem>
                <Subtitle>Допоможе вам</Subtitle>
                <List>
                  <ListItem>
                    Швидше сформулювати свою ціль і розпочати читати
                  </ListItem>
                  <ListItem>
                    Пропорційно розподілити навантаження на кожний день
                  </ListItem>
                  <ListItem>Відстежувати особистий успіх</ListItem>
                </List>
              </MainListItem>
              <MainListItem>
                <Subtitle>Також ви зможете </Subtitle>
                <List>
                  <ListItem>
                    Формувати особисту думку незалежну від інших
                  </ListItem>
                  <ListItem>
                    Підвищити свої професійні якості опираючись на нові знання
                  </ListItem>
                  <ListItem>Стати цікавим співрозмовником</ListItem>
                </List>
              </MainListItem>
            </List>
          </TextBox>
        )}
      </Box>
    </>
  );
}
