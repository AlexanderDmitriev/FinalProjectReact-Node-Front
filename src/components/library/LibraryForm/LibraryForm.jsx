import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { AddButton } from './LibraryForm.styled';
import { NavLink } from 'react-router-dom';

import {
  FormInput,
  Input,
  InputItem,
  InputItemTitle,
  InputItemAuthor,
  Label,
  FieldInput,
} from './LibraryForm.styled';

export default function LibraryForm() {
  const validateSchema = yup.object().shape({
    title: yup
      .string()
      .min(2, 'Дуже коротко!')
      .max(50, 'Надто довге!')
      .typeError('Назва книги?')
      .required("Поле обов'язкове"),
    author: yup
      .string()
      .min(2, 'Дуже коротко!')
      .max(50, 'Надто довге!')
      .typeError('Імя автора?')
      .required("Поле обов'язкове"),
    year: yup.string().typeError('Вкажіть рік').required("Oбов'язкове"),
    pages: yup.number().typeError('Потрібно число').required("Oбов'язкове"),
  });

  return (
    <>
      <Formik
        initialValues={{
          title: '',
          author: '',
          year: '',
          pages: '',
        }}
        validateOnBlur
        onSubmit={(values, { resetForm }) => {
          // do your stuff
          console.log(values);
          resetForm();
        }}
        validationSchema={validateSchema}
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
                <InputItemTitle>
                  <Label htmlFor="title">Назва книги</Label>
                  <FieldInput
                    className="title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    name="title"
                    placeholder="..."
                  />

                  {touched.title && errors.title && (
                    <ErrorMessage name="title" />
                  )}
                </InputItemTitle>

                <InputItemAuthor>
                  <Label htmlFor="author">Автор</Label>
                  <FieldInput
                    className="author"
                    value={values.author}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    name="author"
                    placeholder="..."
                  />
                  {touched.author && errors.author && (
                    <ErrorMessage name="author" />
                  )}
                </InputItemAuthor>
                <InputItem>
                  <Label htmlFor="author">Рік випуску</Label>
                  <FieldInput
                    className="year"
                    value={values.year}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    name="year"
                    placeholder="..."
                  />
                  {touched.year && errors.year && <ErrorMessage name="year" />}
                </InputItem>
                <InputItem>
                  <Label htmlFor="author">Кількість сторінок </Label>
                  <FieldInput
                    className="pages"
                    value={values.pages}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    name="pages"
                    placeholder="..."
                  />
                  {touched.pages && errors.pages && (
                    // <p className={'error'}>{errors.pages}</p>
                    <ErrorMessage name="pages" />
                  )}
                </InputItem>
              </Input>

              <NavLink to="/" exact="true">
                <AddButton
                  disabled={!isValid && !dirty}
                  onClick={handleSubmit}
                  type="submit"
                >
                  Додати
                </AddButton>
              </NavLink>
            </FormInput>
          </Form>
        )}
      </Formik>
    </>
  );
}
