import * as React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

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

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/authAPI/auth-operation';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeat_password, setRepeatPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      case 'repeat_password':
        return setRepeatPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      authOperations.register({ name, email, password, repeat_password })
    );
  };

  return (
    <Box>
      <Formik
         initialValues={{
           name: '',
           email: '',
           password: '',
           repeat_password: '',
         }}

        // validationSchema={Yup.object({
        //   name: Yup.string()
        //     .max(15, 'Максимум 15 символів')
        //     .required("Поле обов'язкове"),
        //   email: Yup.string()
        //     .email('Невірна адреса')
        //     .required("Поле обов'язкове"),
        //   password: Yup.string()
        //     .min(6, 'Мінімум 6 символів')
        //     .required("Поле обов'язкове"),
        //   repeatPassword: Yup.string()
        //     .min(6, 'Мінімум 6 символів')
        //     .required("Поле обов'язкове"),
        // })}
        /* onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }} */
        onSubmit={handleSubmit}
      >
       
        <Form onSubmit={handleSubmit}>
          <FormInput>
            <Input>
              <GoogleButton type="submit">
                <TextGoogleButton>Google</TextGoogleButton>
              </GoogleButton>
              <InputField>
                <Label htmlFor="name">Ім'я</Label>
                <FieldInput
                  name="name"
                  value={name}
                  type="text"
                  placeholder="..."
                  onChange={handleChange}
                />
                <ErrorMessage name="name" />
              </InputField>
              <InputField>
                <Label htmlFor="email">Електронна адреса</Label>
                <FieldInput
                  name="email"
                  type="email"
                  value={email}
                  placeholder="your@email.com"
                  onChange={handleChange}
                />
                <ErrorMessage name="email" />
              </InputField>
              <InputField>
                <Label htmlFor="password">Пароль</Label>
                <FieldInput
                  name="password"
                  type="text"
                  value={password}
                  placeholder="..."
                  onChange={handleChange}
                />
                <ErrorMessage name="password" />
              </InputField>
              <Label htmlFor="repeatPassword">Підтвердіть пароль</Label>
              <FieldInput
                name="repeat_password"
                type="text"
                value={repeat_password}
                placeholder="..."
                onChange={handleChange}
              />
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
