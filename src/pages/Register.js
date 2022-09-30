import * as React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

import {
  Box,
  FormBox,
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
  TextBox,
  Title,
  List,
  MainListItem,
  Subtitle,
  ListItem,
} from './styled/Register.styled';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/authAPI/auth-operation';
import { useMediaQuery } from 'react-responsive';

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

  const isTablet = useMediaQuery({
    query: '(min-width: 768px)',
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
            // onSubmit={(values, { setSubmitting }) => {
            //   setTimeout(() => {
            //     alert(JSON.stringify(values, null, 2));
            //     setSubmitting(false);
            //   }, 400);
            // }}
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
                      type="text"
                      placeholder="..."
                      value={name}
                      onChange={handleChange}
                    />
                    <ErrorMessage name="name" />
                  </InputField>
                  <InputField>
                    <Label htmlFor="email">Електронна адреса</Label>
                    <FieldInput
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={handleChange}
                    />
                    <ErrorMessage name="email" />
                  </InputField>
                  <InputField>
                    <Label htmlFor="password">Пароль</Label>
                    <FieldInput
                      name="password"
                      type="text"
                      placeholder="..."
                      value={password}
                      onChange={handleChange}
                    />
                    <ErrorMessage name="password" />
                  </InputField>
                  <Label htmlFor="repeatPassword">Підтвердіть пароль</Label>
                  <FieldInput
                    name="repeat_password"
                    type="text"
                    placeholder="..."
                    value={repeat_password}
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
