import React from 'react';
import LibraryForm from '../LibraryForm/LibraryForm';
import { BackArrow } from './Library.styled';

import Container from 'helpers/Container';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

export default function Library() {
  const location = useLocation();
  const navigator = useNavigate();
  const path = location?.state?.from ?? '/';

  return (
    <>
      <Container>
        <div
          style={{ width: 'auto', height: 60, border: '1px solid black' }}
        ></div>
        <NavLink to={path} exact="true">
          <BackArrow />
        </NavLink>

        <LibraryForm />
      </Container>
    </>
  );
}
