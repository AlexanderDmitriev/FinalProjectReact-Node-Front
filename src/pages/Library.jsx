import React from 'react';
import LibraryForm from '../components/LibraryPage/LibraryForm/LibraryForm';
import LibraryModal from '../components/LibraryPage/LibraryModal/LibraryModal';
import AlreadyRead from '../components/LibraryPage/AlreadyRead/AlreadyRead';
import ReadingNow from '../components/LibraryPage/ReadingNow/ReadingNow';
import GoingToRead from '../components/LibraryPage/GoingToRead/GoingToRead';
// import WellDoneModal from '../components/LibraryPage/WellDoneModal/WellDoneModal';
import {
  Box,
  /* BoxText, */ BackArrow,
  /*TrainingButton|,*/
} from '../components/LibraryPage/Library.styled';
import Container from 'helpers/Container';
import { NavLink, /* useNavigate, */ useLocation } from 'react-router-dom';
import { useGetBooksQuery } from 'redux/booksApi/booksSlice';
// import books from 'book.json';
import sprite from '../images/icons.svg';
// import { ToastContainer, toast } from 'react-toastify';

export default function Library() {
  const location = useLocation();
  /* const navigator = useNavigate(); */
  const path = location?.state?.from ?? '/';
  const { data, isError, isLoading } = useGetBooksQuery();

  const books = data ?? [];
  console.log(books);

  const planBooks = books.filter(book => book.status === 'plan');
  const inProgressBooks = books.filter(book => book.status === 'in progress');
  const finishedBooks = books.filter(book => book.status === 'finished');

  return (
    <>
      {/* {isError && toast.error(`Sorry try again`)} */}
      {isLoading && <h3> Loading...</h3>}
      <Container>
        <Box>
          <NavLink to={path} exact="true">
            <BackArrow width="24" height="12">
              <use href={sprite + '#icon-back'}></use>
            </BackArrow>
          </NavLink>
          <LibraryForm />
          {!books && <LibraryModal />}

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
