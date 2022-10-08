import React from 'react';
import LibraryForm from '../components/LibraryPage/LibraryForm/LibraryForm';
import LibraryModal from '../components/LibraryPage/LibraryModal/LibraryModal';
import AlreadyRead from '../components/LibraryPage/AlreadyRead/AlreadyRead';
import ReadingNow from '../components/LibraryPage/ReadingNow/ReadingNow';
import GoingToRead from '../components/LibraryPage/GoingToRead/GoingToRead';
import { Box, BackArrow } from '../components/LibraryPage/Library.styled';
import Container from 'helpers/Container';
import { NavLink, useLocation } from 'react-router-dom';
import { useGetBooksQuery } from 'redux/booksApi/booksSlice';
import sprite from '../images/icons.svg';
import toast from 'react-hot-toast';
import { Spinner } from 'components/Spinner';

export default function Library() {
  const location = useLocation();
  const path = location?.state?.from ?? '/';
  const { data, isError, isLoading } = useGetBooksQuery();

  const books = data ?? [];

  const planBooks = books.filter(book => book.status === 'plan');
  const inProgressBooks = books.filter(book => book.status === 'in progress');
  const finishedBooks = books.filter(book => book.status === 'finished');

  return (
    <>
      {isError && toast.error(`Sorry try again`)}
      {isLoading && <Spinner />}
      <Container>
        <Box>
          <NavLink to={path} exact="true">
            <BackArrow width="24" height="12" id="addBook">
              <use href={sprite + '#icon-back'}></use>
            </BackArrow>
          </NavLink>
          <LibraryForm />
          {books.length === 0 && <LibraryModal />}

          {finishedBooks.length === 0 ? <p></p> : <AlreadyRead books={books} />}
          {inProgressBooks.length === 0 ? (
            <p></p>
          ) : (
            <ReadingNow books={books} />
          )}
          {planBooks.length === 0 ? <p></p> : <GoingToRead books={books} />}
        </Box>
      </Container>
    </>
  );
}
