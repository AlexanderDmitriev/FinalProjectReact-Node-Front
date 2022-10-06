import React, { useState } from 'react';
import { TrainingPage } from '../components/TrainingPage';

import Results from 'components/Results/Results';
import AddTraining from 'components/Training/AddTraining/AddTraining';
import Chart from 'components/Chart/Chart';
import { useGetBooksQuery } from 'redux/booksApi/booksSlice';
import Timers from 'components/Timers/Timers';
import { resultsApi } from 'redux/results/resultsSlice';

export default function Training() {
  const { data, /* error, */ isLoading } = useGetBooksQuery();
  // const [finishDate, setFinishDate] = useState(new Date('Oct 09 2022 00:00:00').getTime());
  const [finishDate, setFinishDate] = useState(Date.now());
  const useQueryStateResult = resultsApi.endpoints.fetchResults.useQueryState();

  const handleFinishDate = date => {
    setFinishDate(date);
  };

  return (
    <TrainingPage>
      <Timers finishDate={finishDate} />
      <AddTraining getFinishDate={handleFinishDate} />
      {!isLoading && <Chart books={data} />}
      {useQueryStateResult.data &&
        useQueryStateResult.data.status === 'in progress' && <Results />}
    </TrainingPage>
  );
}
