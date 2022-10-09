import React, { useState, useEffect } from 'react';
import ResultTable from './ResultTable';
import DatePicker from 'react-datepicker';
// import { useDispatch } from 'react-redux';
import { useNavigate /* , useLocation */ } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Section,
  Title,
  Form,
  DateWrapper,
  Label,
  Input,
  Button,
} from './Results.styled';

import {
  Wrapper,
  SectionM,
  TextBox,
  Text,
  ButtonBox,
  ButtonM,
  BackButton,
  Icon,
  /* IconLike, */
} from './Modal.styled';
import Modal from 'components/Modal/Modal';
import sprite from '../../images/icons.svg';
import { useCreateResultMutation } from 'redux/results/resultsSlice';
import { resultsApi } from 'redux/results/resultsSlice';

export default function Results() {
  const [date, setDate] = useState(null);
  const [pages, setPages] = useState('');
  const queryStateResult = resultsApi.endpoints.fetchResults.useQueryState();
  const [createResult] = useCreateResultMutation();

  const handleSubmit = e => {
    e.preventDefault();
    const pages = e.target.pages.value;
    const pickedDate = e.target.date.value;

    const refactorDateToStats = date => {
      const ddmm = date.slice(0, 5).split('.').reverse().join('.');
      const yyyy = date.slice(5);
      const reverDate = ddmm + yyyy;
      return reverDate;
    };

    const reversedDate = refactorDateToStats(pickedDate);
    const formattedDate = new Date(reversedDate);
    const day = ('0' + formattedDate.getDate()).slice(-2);
    const month = ('0' + (formattedDate.getMonth() + 1)).slice(-2);
    const year = formattedDate.getFullYear();
    const date = year + '-' + month + '-' + day;
    const hour =
      formattedDate.getHours().toString().length < 2
        ? '0' + formattedDate.getHours()
        : formattedDate.getHours();
    const minutes =
      formattedDate.getMinutes().toString().length < 2
        ? '0' + formattedDate.getMinutes()
        : formattedDate.getMinutes();
    const seconds =
      formattedDate.getSeconds().toString().length < 2
        ? '0' + formattedDate.getSeconds()
        : formattedDate.getSeconds();
    const enteredTime = hour + ':' + minutes + ':' + seconds;

    const time = enteredTime;

    const result = {
      date,
      time,
      pages,
    };

    createResult(result);
    reset();
  };



  /* let endTrainingDate = useRef(); */
 /*  endTrainingDate = new Date(queryStateResult.data.training.end); */
  const [isModalOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const[open, setOpen] = useState(false)
  useEffect(() => {
    if (queryStateResult.data) {
    const end = new Date(queryStateResult.data.training.end) 
    const now = new Date();
      if (now > end) {
     setOpen(true);
     setModalOpen(true);
   }
    }
  },[queryStateResult.data, queryStateResult.data.training.end])

 /*  const [isFinished, setIsFinished] = useState(false);
  useEffect(() => {
    if (endTrainingDate > Date.now()) {
      setIsFinished(true);
    }
  }, [endTrainingDate]); */

  const isTooLate =
  open && queryStateResult.data.status === 'in progress';

  /* const isDone =queryStateResult.data.status === 'done'; */
  ///////////******************************************************* */
  const reset = () => {
    setDate(null);
    setPages('');
  };



  const onclick = () => {
    if (queryStateResult.data && queryStateResult.data.status === 'done') {
      setModalOpen(true);
    }
  };

  const onChangePages = e => {
    setPages(e.target.value);
    if (queryStateResult.data && queryStateResult.data.status === 'done') {
      toast.error('Немає активних тренувань');
    }
  };

  const onChangeDate = date => {
    setDate(date);
    if (queryStateResult.data && queryStateResult.data.status === 'done') {
      toast.error('Немає активних тренувань');
    }
  };
  const navigate = useNavigate();

  const handleExit = () => {
    setModalOpen(false);
    navigate('/library', { replace: true });
  };

  return (
    <>
      <Section>
        <Title>Результати</Title>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <DateWrapper>
            <Label>
              Дата
              <DatePicker
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                selected={date}
                onChange={onChangeDate}
                dateFormat="dd.MM.yyyy HH:mm"
                type="date"
                name="date"
                required
                minDate={new Date(queryStateResult.data.training.start)}
                maxDate={new Date()}
              />
            </Label>
            <Label>
              Кількість сторінок
              <Input
                name="pages"
                value={pages}
                onChange={onChangePages}
                required
                min={1}
                max={999}
                pattern={1 - 9}
                type="number"
              />
            </Label>
          </DateWrapper>
          <Button
            disabled={
              queryStateResult.data && queryStateResult.data.status === 'done'
            }
            type="submit"
            onClick={onclick}
          >
            Додати результат
          </Button>
        </Form>
        <ResultTable />
        <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal}>
          <Wrapper>
            {isTooLate && (
              <SectionM>
                <Icon width="50" height="45">
                  <use href={sprite + '#icon-vector'}></use>
                </Icon>
                <TextBox>
                  <Text>
                    Ти молодчина, але потрібно швидше! Наступного разу тобі все
                    вдасться
                  </Text>
                </TextBox>
                <ButtonBox>
                  <ButtonM type="button" onClick={handleExit}>
                    Нове тренування
                  </ButtonM>
                  <BackButton type="button" onClick={handleCloseModal}>
                    Назад
                  </BackButton>
                </ButtonBox>
              </SectionM>
            )}
           {/*  {isDone && (
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
            )} */}
          </Wrapper>
        </Modal>
      </Section>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
