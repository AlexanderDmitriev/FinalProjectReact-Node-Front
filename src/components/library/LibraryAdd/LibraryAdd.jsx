import React from 'react';
import LibraryForm from '../LibraryForm/LibraryForm';
import { BackArrow } from './LibraryAdd.styled';

import Container from 'helpers/Container';
import { NavLink, /* useNavigate, */ useLocation } from 'react-router-dom';

import { Box, BoxText } from './LibraryAdd.styled';

export default function Library() {
  const location = useLocation();
  /* const navigator = useNavigate(); */
  const path = location?.state?.from ?? '/';

  return (
    <>
      <Container>
        <Box>
          <NavLink to={path} exact="true">
            <BackArrow />
          </NavLink>

          <LibraryForm />
          <BoxText />
        </Box>
      </Container>
    </>
  );
}
