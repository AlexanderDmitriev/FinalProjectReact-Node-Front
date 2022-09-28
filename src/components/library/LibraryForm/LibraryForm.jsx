import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import { AddButton, Wrapper } from './LibraryForm.styled';
import { NavLink } from 'react-router-dom';

export default function LibraryForm() {
  const validateSchema = yup.object().shape({
    title: yup
      .string()
      .min(2, 'Дуже коротко!')
      .max(50, 'Надто довге!')
      .typeError('Назва книги?')
      .required('Обовязково'),
    author: yup
      .string()
      .min(2, 'Дуже коротко!')
      .max(50, 'Надто довге!')
      .typeError('Імя автора?')
      .required('Обовязково'),
    year: yup.string().typeError('Вкажіть рік').required('Обовязково'),
    pages: yup.number().typeError('Потрібно число').required('Обовязково'),
  });

  return (
    <Wrapper>
      <Formik
        initialValues={{
          title: '',
          author: '',
          year: '',
          pages: '',
        }}
        validateOnBlur
        onSubmit={value => console.log(value)}
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
          <div className="form">
            <label htmlFor="title">Назва книги </label>
            <br />
            <input
              className="title"
              style={{ width: 300, height: 40 }}
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="title"
            />
            {touched.title && errors.title && (
              <p className={'error'}>{errors.title}</p>
            )}
            <br />
            <label htmlFor="author">Автор </label>
            <br />
            <input
              className="author"
              style={{ width: 300, height: 40 }}
              value={values.author}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="author"
            />
            {touched.author && errors.author && (
              <p className={'error'}>{errors.author}</p>
            )}
            <br />
            <label htmlFor="year">Рік випуску </label>
            <br />
            <input
              className="year"
              style={{ width: 300, height: 40 }}
              value={values.year}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="year"
            />
            {touched.year && errors.year && (
              <p className={'error'}>{errors.year}</p>
            )}
            <br />
            <label htmlFor="pages">Кількість сторінок </label>
            <br />
            <input
              className="pages"
              style={{ width: 300, height: 40 }}
              value={values.pages}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="pages"
            />
            {touched.pages && errors.pages && (
              <p className={'error'}>{errors.pages}</p>
            )}
            <br />

            <NavLink to="/" exact="true">
              <AddButton
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
                type="submit"
              >
                Додати
              </AddButton>
            </NavLink>
          </div>
        )}
      </Formik>
    </Wrapper>
  );
}
