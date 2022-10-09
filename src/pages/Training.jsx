import React from 'react';
import { useState } from 'react';
import { TrainingPage } from '../components/TrainingPage';
import { resultsApi } from 'redux/results/resultsSlice';
import Results from 'components/Results/Results';
import AddTraining from 'components/Training/AddTraining/AddTraining';
import Chart from 'components/Chart/Chart';
import { useGetBooksQuery } from 'redux/booksApi/booksSlice';
import Timers from 'components/Timers/Timers';
import Modal from 'components/Modal/Modal';
import {
  Wrapper,
  SectionM,
  TextBox,
  Text,
  ButtonBox,
  ButtonM,
  IconLike,
} from '../components/Results/Modal.styled';
import sprite from '../images/icons.svg';
import { useNavigate /* , useLocation */ } from 'react-router-dom';

export default function Training() {
  const { data, isLoading } = useGetBooksQuery();
  // const [finishDate, setFinishDate] = useState(Date.now());
  const [/* start */, setStart] = useState('');
  const [/* finish */, setFinish] = useState('');
  const [/* books */, setBooks] = useState([]);

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


  /********************************************** */
  const [isModalOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const navigate = useNavigate();
  const handleExit = () => {
    setModalOpen(false);
    navigate('/library', { replace: true });
  };

  const queryStateResult = resultsApi.endpoints.fetchResults.useQueryState();
  const isDone =queryStateResult?.data?.status === 'done';
  //**************************************** */
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

      <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal}>
        <Wrapper>
          {isDone && (
            <SectionM>
              <IconLike width="50" height="45">
                <use href={sprite + '#icon-vector'}></use>
              </IconLike>
              <TextBox>
                <Text>Вітаю! Тренування успішно закінчено!</Text>
              </TextBox>
              <ButtonBox>
                <ButtonM type="button" onClick={handleExit}>
                  Готово
                </ButtonM>
              </ButtonBox>
            </SectionM>
          )}
        </Wrapper>
      </Modal>
    </TrainingPage>
  );
}
