import React from 'react';
import { useState } from 'react';
import { TrainingPage } from '../components/TrainingPage';
import { resultsApi, useFetchResultsQuery } from 'redux/results/resultsSlice';
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
import { useEffect } from 'react';

export default function Training() {
  const { data, isLoading } = useGetBooksQuery();
  const { data: res } = useFetchResultsQuery();
  // const [finishDate, setFinishDate] = useState(Date.now());
  const [, /* start */ setStart] = useState('');
  const [, /* finish */ setFinish] = useState('');
  const [, /* books */ setBooks] = useState([]);

  const queryStateResult = resultsApi.endpoints.fetchResults.useQueryState();
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
  const [firstRender,setFirstRender]=useState(true);
  useEffect(() => {
    if (res?.status === 'done'&&!firstRender) {
      setModalOpen(true);
    }
    setFirstRender(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [res]);

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const navigate = useNavigate();
  const handleExit = () => {
    setModalOpen(false);
    navigate('/library', { replace: true });
  };

  //**************************************** */
  return (
    <TrainingPage>
      {queryStateResult.data &&
        queryStateResult.data.status === 'in progress' && <Timers />}
      <AddTraining /*getFinishDate={handleFinishDate}*/
        setDataStart={setDataStart}
        setDataFinish={setDataFinish}
        setDataBooks={setDataBooks}
      />
      {!isLoading && <Chart books={data} />}
      {queryStateResult.data &&
        queryStateResult.data.status === 'in progress' && <Results />}

      <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal}>
        <Wrapper>
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
        </Wrapper>
      </Modal>
    </TrainingPage>
  );
}
