import React from 'react';
import { useState } from 'react';
import { TrainingPage } from '../components/TrainingPage';
import { resultsApi } from 'redux/results/resultsSlice';
import Results from 'components/Results/Results';
import AddTraining from 'components/Training/AddTraining/AddTraining';
import Chart from 'components/Chart/Chart';
import { useGetBooksQuery } from 'redux/booksApi/booksSlice';
import Timers from 'components/Timers/Timers';

export default function Training() {
  const { data, isLoading } = useGetBooksQuery();
  // const [finishDate, setFinishDate] = useState(Date.now());
  const [start, setStart] = useState('');
  const [finish, setFinish] = useState('');
  const [books, setBooks] = useState([]);

  const useQueryStateResult = resultsApi.endpoints.fetchResults.useQueryState();
  // const handleFinishDate = date => {
  //   setFinishDate(date);
  // };

  const setDataStart = start => {
    setStart(start);
  };
  const setDataFinish = finish => {
    setFinish(finish);
  };
  const setDataBooks = books => {
    setBooks(books);
  };
  console.log('start', start);
  console.log('finish', finish);
  console.log('books', books);
  return (
    <TrainingPage>
      {useQueryStateResult.data &&
        useQueryStateResult.data.status === 'in progress' && <Timers />}
      <AddTraining /*getFinishDate={handleFinishDate}*/
        setDataStart={setDataStart}
        setDataFinish={setDataFinish}
        setDataBooks={setDataBooks}
      />
      {!isLoading && <Chart books={data} />}
      {useQueryStateResult.data &&
        useQueryStateResult.data.status === 'in progress' && <Results />}
    </TrainingPage>
  );
}
