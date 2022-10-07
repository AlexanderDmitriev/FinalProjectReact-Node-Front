import React, { useState } from 'react';
import { TrainingPage } from '../components/TrainingPage';
import { resultsApi } from 'redux/results/resultsSlice';
import Results from 'components/Results/Results';
import AddTraining from 'components/Training/AddTraining/AddTraining';
import Chart from 'components/Chart/Chart';
import { useGetBooksQuery } from 'redux/booksApi/booksSlice';
import Timers from 'components/Timers/Timers';

export default function Training() {
  const { data, isLoading } = useGetBooksQuery();
  const [finishDate, setFinishDate] = useState(Date.now());
  const useQueryStateResult = resultsApi.endpoints.fetchResults.useQueryState();
  const [start, setStart] = useState('');
  const [finish, setFinish] = useState('');
  const [books, setBooks] = useState([]);
  const handleFinishDate = date => {
    setFinishDate(date);
  };

  const setDataStart = (start) => {
    setStart(start)
  }
   const setDataFinish = (finish) => {
    setFinish(finish)
  }
   const setDataBooks = (books) => {
    setBooks(books)
  }

  return (
    <TrainingPage>
      <Timers finishDate={finishDate} />
      <AddTraining
        getFinishDate={handleFinishDate}
        setDataStart={setDataStart}
        setDataFinish={setDataFinish}
        setDataBooks={setDataBooks} />
      {!isLoading && <Chart books={data} />}
      {useQueryStateResult.data &&
        useQueryStateResult.data.status === 'in progress' && <Results />}
    </TrainingPage>
  );
}
