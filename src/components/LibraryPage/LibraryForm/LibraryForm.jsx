import React from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import toast from 'react-hot-toast';

import { AddButton /* Wrapper */ } from './LibraryForm.styled';
import {
  FormInput,
  Input,
  InputItem,
  InputItemTitle,
  InputItemAuthor,
  Label,
  FieldInput,
  Error,
  Wrapper,
} from './LibraryForm.styled';

import { useAddBooksMutation } from '../../../redux/booksApi/booksSlice';
import { Spinner } from 'components/Spinner';

export default function LibraryForm() {
  const [AddBooks, { isError, isLoading }] = useAddBooksMutation();

  const validateSchema = yup.object().shape({
    title: yup
      .string()
      .min(3, 'Дуже коротко!')
      .max(50, 'Надто довге!')
      .matches(/^[^ -].{1,50}$/, 'Невірний формат')
      .typeError('Назва книги?')
      .required("Поле обов'язкове"),
    author: yup
      .string()
      .min(3, 'Дуже коротко!')
      .max(50, 'Надто довге!')
      .matches(/^[^ -]\D{1,50}$/, 'Невірний формат')
      .typeError('Імя автора?')
      .required("Поле обов'язкове"),
    year: yup
      .string()
      .matches(/^[12]\d{3}$/, 'Невірний формат')
      .typeError('Вкажіть рік'),
    pages: yup
      .string()
      .matches(/^[^0\D]\d{0,3}$/, 'Невірний формат')
      .typeError('Потрібно число')
      .required("Поле обов'язкове"),
  });

  return (
    <>
      <Wrapper>
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

            const item = {
              id: nanoid(),
              title: values.title,
              author: values.author,
              year: values.year,
              pages: values.pages,
            };
            const handleAddContact = async () => {
              await AddBooks(item);
            };

            handleAddContact();
            {
              isLoading && <Spinner />;
            }
            {
              !isError
                ? toast.success(`Книга  додана`)
                : toast.error(`Не можу додати`);
            }

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
                      id="input"
                      className="title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      name="title"
                      placeholder="..."
                    />

                    {touched.title && errors.title && (
                      <ErrorMessage name="title">
                        {msg => <Error>{msg}</Error>}
                      </ErrorMessage>
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
                      <ErrorMessage name="author">
                        {msg => <Error>{msg}</Error>}
                      </ErrorMessage>
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
                    {touched.year && errors.year && (
                      <ErrorMessage name="year">
                        {msg => <Error>{msg}</Error>}
                      </ErrorMessage>
                    )}
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
                      <ErrorMessage name="pages">
                        {msg => <Error>{msg}</Error>}
                      </ErrorMessage>
                    )}
                  </InputItem>
                </Input>

                <AddButton
                  disabled={!isValid && !dirty}
                  onClick={handleSubmit}
                  type="submit"
                >
                  Додати
                </AddButton>
              </FormInput>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </>
  );
}
