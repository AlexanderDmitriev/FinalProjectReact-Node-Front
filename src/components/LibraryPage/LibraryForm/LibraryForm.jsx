import React from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
// import 'react-toastify/dist/ReactToastify.css';

import { AddButton /* Wrapper */ } from './LibraryForm.styled';
import { NavLink } from 'react-router-dom';
import books from 'book.json';
import {
  FormInput,
  Input,
  InputItem,
  InputItemTitle,
  InputItemAuthor,
  Label,
  FieldInput,
  Error,
} from './LibraryForm.styled';

import {
  useGetBooksQuery,
  useAddBooksMutation,
} from '../../../redux/booksApi/booksSlice';

export default function LibraryForm() {
  const [AddBooks, { error, isLoading }] = useAddBooksMutation();
  const { data } = useGetBooksQuery();
  const booksArray = data;

  console.log(data);
  console.log(error);
  console.log(isLoading);
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
    year: yup.string().typeError('Вкажіть рік'),
    pages: yup
      .string()
      .typeError('Потрібно число')
      .required("Поле обов'язкове"),
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

          // console.log(data);
          // console.log(booksArray);
          // console.log(error);
          // console.log(isLoading);

          const handleSub = () => {
            console.log(values.title);
          };

          const item = {
            id: nanoid(),
            title: values.title,
            author: values.author,
            year: values.year,
            pages: values.pages,
            // status: 'plan',
            // resume: {
            //   rating: 1,
            //   comment: 'bad bad',
            // },
          };
          // console.log(item);
          // const filterBook = item.title.toLocaleLowerCase();
          // const booksForFind = booksArray.find(
          //   i => i.name.toLocaleLowerCase() === filterBook
          // );
          // if (booksForFind) {
          //   // window.alert(`${title} is already in books`);
          //   resetForm();
          //   return;
          // }
          const handleAddContact = async () => {
            await AddBooks(item);
            // .unwrap();
            // toast.info(`Books  ${title} added`);
          };

          handleAddContact();
          handleSub();
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
          // {isLoading ? <Loader /> : 'Add contact'}
        )}
      </Formik>
    </>
  );
}
