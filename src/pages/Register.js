import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import background from '../img/pic.jpg';

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';

const Box = styled.div`
  position: absolute;
  width: 549px;
  height: 850px;
  left: 0px;
  top: 0px;

  background: rgba(9, 30, 63, 0.8);
  background-image: url(${background});

  // @media screen and (max-width: 480px) {
  //   display: flex;
  //   flex-direction: column;
  //   // width: 100%;
  //   // background: #ffffff;
  // }
`;

const FormInput = styled.div`
  position: absolute;
  width: 400px;
  height: 609px;
  left: 74px;
  top: 150px;
  background: #ffffff;
  padding-top: 133px;

  display: block;
  flex-direction: column;
`;

const Input = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 35px;

  display: flex;
  flex-direction: column;
`;

const InputField = styled.div`
  margin-bottom: 45px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  width: 154px;
  height: 17px;
  left: 115px;
  top: 353px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  color: #898f9f;
`;

// const FieldInput = styled.input`
//   width: 320px;
//   height: 42px;
//   left: 115px;
//   top: 378px;
//   background: #f5f7fa;
//   box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
// `;

const Button = styled.button`
  width: 320px;
  height: 60px;
  left: 115px;
  top: 539px;
  background: #ff6b08;
  margin-left: 40px;
`;

const TextButton = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;

const TextTitle = styled.h1`
  position: absolute;
  width: 231px;
  height: 38px;
  left: 799px;
  top: 239px;

  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 38px;

  color: #242a37;
`;

const Text = styled.p`
  position: absolute;
  width: 158px;
  height: 38px;
  left: 676px;
  top: 325px;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 38px;

  color: #242a37;
`;

const TextItems = styled.li`
  position: absolute;
  width: 400px;
  height: 17px;
  left: 692px;
  top: 377px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  color: #898f9f;
`;

const NavText = styled.p`
  width: 135px;
  height: 16px;
  left: 207px;
  top: 703px;

  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;

  text-align: center;

  color: #898f9f;
`;

const NavLogin = styled.p`
  width: 76px;
  height: 16px;
  left: 237px;
  top: 619px;

  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;

  text-decoration-line: underline;
  text-align: center;

  color: #ff6b08;
`;

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
              <InputField>
                <Label htmlFor="name">Ім'я</Label>
                <Field name="name" type="text" placeholder="..." />
                <ErrorMessage name="name" />
              </InputField>
              <InputField>
                <Label htmlFor="email">Електронна адреса</Label>
                <Field name="email" type="email" placeholder="your@email.com" />
                <ErrorMessage name="email" />
              </InputField>
              <InputField>
                <Label htmlFor="password">Пароль</Label>
                <Field name="password" type="text" placeholder="..." />
                <ErrorMessage name="password" />
              </InputField>
              <Label htmlFor="repeatPassword">Підтвердіть пароль</Label>
              <Field name="repeatPassword" type="text" placeholder="..." />
              <ErrorMessage name="repeatPassword" />
            </Input>
            <Button type="submit">
              <TextButton>Зареєструватися</TextButton>
            </Button>
            <NavText>Вже за нами?</NavText>
            <NavLogin>
              <NavLink to="/login">Увійти</NavLink>
            </NavLogin>
          </FormInput>
        </Form>
      </Formik>
      <TextTitle>Books Reading</TextTitle>
      <Text>Допоможе вам</Text>
      <TextItems>
        <ul>
          <li>Швидше сформулювати свою ціль і розпочати читати</li>
          <li>Пропорційно розподілити навантаження на кожний день</li>
          <li>Відстежувати особистий успіх</li>
        </ul>
      </TextItems>
      <Text>Також ви зможете </Text>
      <TextItems>
        <ul>
          <li>Формувати особисту думку незалежну від інших</li>
          <li>Підвищити свої професійні якості опираючись на нові знання</li>
          <li>Стати цікавим співрозмовником</li>
        </ul>
      </TextItems>
    </Box>
  );
}
