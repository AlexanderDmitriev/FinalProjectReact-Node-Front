import React from 'react';
import Container from 'helpers/Container';

import Results from 'components/Results/Results';
import AddTraining from 'components/Training/AddTraining/AddTraining';
import Chart from 'components/Chart/Chart';
import { useGetBooksQuery } from 'redux/booksApi/booksSlice';

export default function Training() {

  const { data, /* error, */ isLoading } = useGetBooksQuery();
 
  return (
    <Container>
      <AddTraining />
      {!isLoading && <Chart books={ data } />}
      <Results />
    </Container>
  );
}
