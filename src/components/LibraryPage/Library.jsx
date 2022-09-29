import React from 'react';
import LibraryForm from './LibraryForm/LibraryForm';
import LibraryModal from './LibraryModal/LibraryModal';
import AlreadyRead from './AlreadyRead/AlreadyRead';
import ReadingNow from './ReadingNow/ReadingNow';
import GoingToRead from './GoingToRead/GoingToRead';
import WellDoneModal from './WellDoneModal/WellDoneModal';
import { Box, BoxText, BackArrow, TrainingButton } from './Library.styled';
import Container from 'helpers/Container';
import { NavLink, /* useNavigate, */ useLocation } from 'react-router-dom';
import books from 'book.json';
import sprite from '../../images/icons.svg';

export default function Library() {
  const location = useLocation();
  /* const navigator = useNavigate(); */
  const path = location?.state?.from ?? '/';

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
          <WellDoneModal />

          {/* <LibraryModal /> */}
          {books ? <LibraryModal /> : <AlreadyRead books={books} />}
          {!books ? <LibraryModal /> : <ReadingNow books={books} />}
          {!books ? <LibraryModal /> : <GoingToRead books={books} />}
          {/* <BoxText /> */}
          <TrainingButton>Моє тренування</TrainingButton>
        </Box>
      </Container>
    </>
  );
}
