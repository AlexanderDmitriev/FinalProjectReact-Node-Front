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
  height: 430px;
  left: 75px;
  top: 245px;
  background: #ffffff;
  padding-top: 133px;

  display: block;
  flex-direction: column;
`;

const Input = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
`;

const InputEmail = styled.div`
  margin-bottom: 40px;
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

const Text = styled.div`
  position: absolute;
  width: 397px;
  height: 200px;
  left: 716px;
  top: 328px;

  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;

  text-align: center;

  color: #242a37;

  // display: flex;
`;

const Author = styled.p`
  position: absolute;
  width: 92px;
  height: 24px;
  left: 868px;
  top: 560px;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  color: #898f9f;
`;

const NavRegister = styled.p`
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
              <InputEmail>
                <Label htmlFor="email">Електронна адреса</Label>
                <Field name="email" type="email" placeholder="your@email.com" />
                <ErrorMessage name="email" />
              </InputEmail>

              <Label htmlFor="password">Пароль</Label>
              {/* <FieldInput> */}
              <Field name="password" type="text" placeholder="Пароль" />
              {/* </FieldInput> */}
              <ErrorMessage name="password" />
            </Input>

            <Button type="submit">
              <TextButton>Увійти</TextButton>
            </Button>
            <NavRegister>
              <NavLink to="/register">Реєстрація</NavLink>
            </NavRegister>
          </FormInput>
        </Form>
      </Formik>
      <Text>
        Книги — это корабли мысли, странствующие по волнам времени и бережно
        несущие свой драгоценный груз от поколения к поколению.
      </Text>
      <Author>Бэкон Ф.</Author>
    </Box>
  );
}
