import React from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Wrapper, TitleWrapper, CounterTitle, Counter } from './Chart.styled';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const pagesToRead = 1000;
const startDate = new Date(2022, 8, 29);
const finishDate = new Date(2022, 9, 6);
const timeDiff = Math.abs(finishDate.getTime() - startDate.getTime());
const trainingDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

const convertTrainingDaysToArr = num => {
  const arr = [];
  for (let i = 1; i <= num; i += 1) {
    arr.push(i);
  }
  return arr;
};

const convertPlanTrainingDaysToArr = (days, pages) => {
  const arr = [];
  for (let i = 1; i <= days; i += 1) {
    arr.push(pages);
  }
  return arr;
};

const trainingDaysArr = convertTrainingDaysToArr(trainingDays);

const readFact = [
  {
    date: 'Fri Sep 30 2022 17:06:18 GMT+0300 (Москва, стандартное время)',
    pages: '150',
  },
  {
    date: 'Sat Oct 01 2022 00:00:00 GMT+0300 (Москва, стандартное время)',
    pages: '500',
  },
  {
    date: 'Sun Oct 02 2022 00:00:00 GMT+0300 (Москва, стандартное время)',
    pages: '50',
  },
  {
    date: 'Mon Oct 03 2022 00:00:00 GMT+0300 (Москва, стандартное время)',
    pages: '60',
  },
  {
    date: 'Thu Oct 06 2022 00:00:00 GMT+0300 (Москва, стандартное время)',
    pages: '100',
  },
  {
    date: 'Thu Oct 07 2022 00:00:00 GMT+0300 (Москва, стандартное время)',
    pages: '150',
  },
  {
    date: 'Thu Oct 08 2022 00:00:00 GMT+0300 (Москва, стандартное время)',
    pages: '500',
  },
];

let dArr = [];
readFact.map(i => dArr.push({ id: i.data, nested: { value: i.pages } }));

const daysArr = [];
for (const day of readFact) {
  daysArr.push(day.date);
}

const pagesArr = [];
for (const page of readFact) {
  if (typeof page.pages === 'undefined') {
    pagesArr.push(0);
  } else pagesArr.push(Number(page.pages));
}

const labels = trainingDaysArr;
const mediumPages = Math.round(pagesToRead / trainingDays);
const mediumPagesArr = convertPlanTrainingDaysToArr(trainingDays, mediumPages);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: 'top',
    },
    title: {
      display: false,
      text: `Кількість сторінок / день ${trainingDays}`,
      responsive: true,
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: 'Час',
        position: 'right',
        align: 'end',
      },
    },
    y: {
      display: false,
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: 'План',
      data: mediumPagesArr,
      borderColor: '#091E3F',
      backgroundColor: '#091E3F',
    },
    {
      label: 'Факт',
      data: pagesArr,
      borderColor: '#FF6B08',
      backgroundColor: '#FF6B08',
      cubicInterpolationMode: 'monotone',
    },
  ],
};

export default function Chart() {
  let width = 236;
  let height = 190;

  const isTablet = useMediaQuery('(min-width: 768px)');
  const isDesktop = useMediaQuery('(min-width: 1280px)');

  if (isTablet) {
    width = 607;
    height = 205;
  }

  if (isDesktop) {
    width = 811;
    height = 215;
  }

  return (
    <Wrapper>
      <TitleWrapper>
        <CounterTitle>Кількість сторінок / день</CounterTitle>
        <Counter>{trainingDays}</Counter>
      </TitleWrapper>
      <div
        style={{
          width,
          height,
        }}
      >
        <Line options={options} data={data} />
      </div>
    </Wrapper>
  );
}
