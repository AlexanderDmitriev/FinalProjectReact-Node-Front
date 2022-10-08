import React, { useState, useEffect } from 'react';
import { TrainingPage } from '../components/TrainingPage';
import { resultsApi } from 'redux/results/resultsSlice';
import Results from 'components/Results/Results';
import AddTraining from 'components/Training/AddTraining/AddTraining';
import Chart from 'components/Chart/Chart';
import { useGetBooksQuery } from 'redux/booksApi/booksSlice';
import Timers from 'components/Timers/Timers';
import WellDoneModal from 'components/LibraryPage/WellDoneModal/WellDoneModal';
import Modal from 'components/Modal/Modal';

export default function Training() {
  const { data, isLoading } = useGetBooksQuery();
  const [finishDate, setFinishDate] = useState(Date.now());
  const [open, setOpen] = useState(false);
  const useQueryStateResult = resultsApi.endpoints.fetchResults.useQueryState();
  const handleFinishDate = date => {
    setFinishDate(date);
  };

  useEffect(() => {
    if (finishDate === Date.now()) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [finishDate]);

  return (
    <>
      {open ? (
        <Modal isModalOpen={true}>
          <WellDoneModal />
        </Modal>
      ) : (
        <TrainingPage>
          <Timers finishDate={finishDate} />
          <AddTraining getFinishDate={handleFinishDate} />
          {!isLoading && <Chart books={data} />}
          {useQueryStateResult.data &&
            useQueryStateResult.data.status === 'in progress' && <Results />}
        </TrainingPage>
      )}
    </>
  );
}
