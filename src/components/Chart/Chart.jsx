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
import { useFetchResultsQuery } from 'redux/results/resultsSlice';
import { useState, useEffect } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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

export default function Chart({ books }) {
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

  const { data, error /* , isLoading */ } = useFetchResultsQuery();
  const [pages, setPages] = useState(0);
  console.log(error);
  useEffect(() => {
    if (error) {
      return;
    }
    const activeBooksArr = data.training.active;
    const booksArr = books.filter(({ _id }) => activeBooksArr.includes(_id));
    let totalPages = 0;
    booksArr.map(item => {
      return (totalPages += Number(item.pages));
    });
    setPages(totalPages);
  }, [books, data.training.active, error]);
  // const startDay = new Date(data.training.start);
  // const finishDay = new Date(data.training.end);
  const startDay = new Date('2022-10-02');
  const finishDay = new Date('2022-10-10');
  const timeDiff = Math.abs(finishDay.getTime() - startDay.getTime());
  const trainingDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const trainingDaysArr = convertTrainingDaysToArr(trainingDays);
  const mediumPages = Math.round(pages / trainingDays);
  const mediumPagesArr = convertPlanTrainingDaysToArr(
    trainingDays,
    mediumPages
  );

  const response = {
    activeBooks: ['507f1f77bcf86cd799439011'],
    start: '01-02-2022 20:19',
    end: '01-02-2023 20:19',
    statistic: [
      {
        date: '01-02-2023 20:19',
        pages: '100',
      },
      {
        date: '01-02-2023 20:19',
        pages: '200',
      },
      {
        date: '01-02-2023 20:19',
        pages: '150',
      },
      {
        date: '01-02-2023 20:19',
        pages: '70',
      },
      {
        date: '01-02-2023 20:19',
        pages: '300',
      },
      {
        date: '01-02-2023 20:19',
        pages: '50',
      },
      {
        date: '01-02-2023 20:19',
        pages: '200',
      },
      {
        date: '01-02-2023 20:19',
        pages: '130',
      },
    ],
  };

  const pagesArr = [];
  const result = response.statistic;
  for (const page of result) {
    pagesArr.push(Number(page.pages));
  }

  const options = {
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

  const chartData = {
    labels: trainingDaysArr,
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
        <Line options={options} data={chartData} />
      </div>
    </Wrapper>
  );
}
