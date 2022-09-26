import * as React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {
  Box,
  FormInput,
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
  //  Title,
  // List,
  // MainListItem,
  // Subtitle,
  // ListItem,
} from './styled/Register.styled';

export default function Register() {
  return (
    <Box>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          repeatPassword: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, 'Максимум 15 символів')
            .required("Поле обов'язкове"),
          email: Yup.string()
            .email('Невірна адреса')
            .required("Поле обов'язкове"),
          password: Yup.string()
            .min(6, 'Мінімум 6 символів')
            .required("Поле обов'язкове"),
          repeatPassword: Yup.string()
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
              <InputField>
                <Label htmlFor="name">Ім'я</Label>
                <FieldInput name="name" type="text" placeholder="..." />
                <ErrorMessage name="name" />
              </InputField>
              <InputField>
                <Label htmlFor="email">Електронна адреса</Label>
                <FieldInput
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                />
                <ErrorMessage name="email" />
              </InputField>
              <InputField>
                <Label htmlFor="password">Пароль</Label>
                <FieldInput name="password" type="text" placeholder="..." />
                <ErrorMessage name="password" />
              </InputField>
              <Label htmlFor="repeatPassword">Підтвердіть пароль</Label>
              <FieldInput name="repeatPassword" type="text" placeholder="..." />
              <ErrorMessage name="repeatPassword" />
            </Input>
            <Button type="submit">
              <TextButton>Зареєструватися</TextButton>
            </Button>
            <NavBox>
              <NavText>
                Вже з нами? <NavLogin to="/login">Увійти</NavLogin>
              </NavText>
            </NavBox>
          </FormInput>
        </Form>
      </Formik>
      {/* <Title>Books Reading</Title>
      <List>
        <MainListItem>
          <Subtitle>Will help you to</Subtitle>
          <List>
            <ListItem>Create your goal faster and proceed to read</ListItem>
            <ListItem>Divide process proportionally for each day</ListItem>
            <ListItem>Track your success</ListItem>
          </List>
        </MainListItem>
        <MainListItem>
          <Subtitle>You may also</Subtitle>
          <List>
            <ListItem>Pose your own independent point of view</ListItem>
            <ListItem>
              Improve your professional skills according to new knowledge
            </ListItem>
            <ListItem>Become an interesting interlocutor</ListItem>
          </List>
        </MainListItem>
      </List> */}
    </Box>
  );
}
