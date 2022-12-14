import React, { useState, useRef, useEffect } from 'react';

import { Container, TimerTitle, TimerList, TimerItem } from './Timers.styled';

import TimerTable from './TimerTable';
import { resultsApi } from 'redux/results/resultsSlice';

export default function Timers({finishDate}) {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  const [secTimerDays, setSecTimerDays] = useState('00');
  const [secTimerHours, setSecTimerHours] = useState('00');
  const [secTimerMinutes, setSecTimerMinutes] = useState('00');
  const [secTimerSeconds, setSecTimerSeconds] = useState('00');

  let interval = useRef();
  let secInterval = useRef();

  let endTrainingDate = useRef();

  const useQueryStateResult = resultsApi.endpoints.fetchResults.useQueryState();
  

  const newYearDate = new Date('Jan 01 2023 00:00:00').getTime();
  const currentTime = Date.now(); 

useEffect(() => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  endTrainingDate = Date.now();
  if(useQueryStateResult.data) {
    endTrainingDate = new Date(useQueryStateResult.data.training.end).getTime();
  }
})

  function padWithZeros(number, minlength) {
    const numberString = number.toString();
    if (numberString.length >= minlength) return numberString;
    return '0' + numberString;
  }

  const startTimer = (startDate, currentTime) => {
    interval = setInterval(() => {
      const distance = startDate - currentTime;

      const days = padWithZeros(
        Math.floor(distance / (1000 * 60 * 60 * 24)),
        2
      );
      const hours = padWithZeros(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        2
      );
      const minutes = padWithZeros(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        2
      );
      const seconds = padWithZeros(
        Math.floor((distance % (1000 * 60)) / 1000),
        2
      );

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  const startSecondTimer = (startDate, currentTime) => {
    secInterval = setInterval(() => {
      const distance = startDate - currentTime;

      const days = padWithZeros(
        Math.floor(distance / (1000 * 60 * 60 * 24)),
        2
      );
      const hours = padWithZeros(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        2
      );
      const minutes = padWithZeros(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        2
      );
      const seconds = padWithZeros(
        Math.floor((distance % (1000 * 60)) / 1000),
        2
      );

      if (distance < 0) {
        clearInterval(secInterval.current);
      } else {
        setSecTimerDays(days);
        setSecTimerHours(hours);
        setSecTimerMinutes(minutes);
        setSecTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer(newYearDate, currentTime, interval);
    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    startSecondTimer(endTrainingDate, currentTime);
    return () => {
      clearInterval(secInterval);
    };
  });

  return (
    <>
      <Container>
        <TimerList>
          <TimerItem>
            <TimerTitle>???? ???????????????????? ???????? ????????????????????</TimerTitle>
            <TimerTable
              days={timerDays}
              hours={timerHours}
              minutes={timerMinutes}
              seconds={timerSeconds}
            ></TimerTable>
          </TimerItem>
          <TimerItem>
            <TimerTitle>???? ???????????????????? ???????? ????????????????????</TimerTitle>
            <TimerTable
              days={secTimerDays}
              hours={secTimerHours}
              minutes={secTimerMinutes}
              seconds={secTimerSeconds}
            ></TimerTable>
          </TimerItem>
        </TimerList>
      </Container>
    </>
  );
}
