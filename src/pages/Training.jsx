import React from 'react';
import {TrainingPage} from '../components/TrainingPage';

import Results from 'components/Results/Results';
import AddTraining from 'components/Training/AddTraining/AddTraining';
import Chart from 'components/Chart/Chart';
import { useGetBooksQuery } from 'redux/booksApi/booksSlice';

export default function Training() {
  const { data, /* error, */ isLoading } = useGetBooksQuery();

  return (
    <TrainingPage>
      <AddTraining />
      {!isLoading && <Chart books={data} />}
      <Results />
    </TrainingPage>
  );
}
