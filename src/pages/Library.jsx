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

export default function Library() {
  const location = useLocation();
  /* const navigator = useNavigate(); */
  const path = location?.state?.from ?? '/';
  const { data /* error, isLoading*/ } = useGetBooksQuery();
  const books = data;
  // console.log(data);
  // const filterBook1 = data.filter(book => book.status === 'plan');
  // const filterBook2 = data.filter(book => book.status === 'in progress');
  // const filterBook3 = data.filter(book => book.status === 'finished');
  // console.log(filterBook2);
  return (
    <>
      <Container>
        <Box>
          <NavLink to={path} exact="true">
            <BackArrow width="24" height="12">
              <use href={sprite + '#icon-back'}></use>
            </BackArrow>
          </NavLink>
          <LibraryForm />
          {!books && <LibraryModal />}
          {/* <WellDoneModal /> */}
          {/* <LibraryModal /> */}

          {books && <AlreadyRead books={books} />}
          {books && <ReadingNow books={books} />}
          {books && <GoingToRead books={books} />}

          {/* <BoxText /> */}
          {/* <TrainingButton>Моє тренування</TrainingButton> */}
          {/* <WellDoneModal /> */}
        </Box>
      </Container>
    </>
  );
}
