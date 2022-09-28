import React from 'react';
import LibraryForm from '../LibraryForm/LibraryForm';
import LibraryModal from '../LibraryModal/LibraryModal';
import AlreadyRead from '../AlreadyRead/AlreadyRead';
import ReadingNow from '../ReadingNow/ReadingNow';
import GoingToRead from'../GoingToRead/GoingToRead'
import  BackArrow  from './Library.styled';

import Container from 'helpers/Container';
import { NavLink, /* useNavigate, */ useLocation } from 'react-router-dom';
import books from "book.json"

export default function Library() {
  const location = useLocation();
  /* const navigator = useNavigate(); */
  const path = location?.state?.from ?? '/';

  return (
    <>
      <Container>
        <div
          style={{
            width: 'auto',
            height: 60,
            border: '1px solid black',
          }}
        ></div>
        <NavLink to={path} exact="true">
          <BackArrow />
        </NavLink>

        <LibraryForm />
        <LibraryModal />
        <AlreadyRead books={books} />
        <ReadingNow books={books} />
         <GoingToRead books={books}/>
      </Container>
    </>
  );
}
