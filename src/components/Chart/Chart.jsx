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
import { resultsApi } from 'redux/results/resultsSlice';

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

const convertPagesToArr = pages => {
  const pagesArr = [];
  for (const page of pages) {
    pagesArr.push(Number(page.pages));
  }
  return pagesArr;
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

  const { data, error, isLoading } = useFetchResultsQuery();
  const [pages, setPages] = useState(0);
  const [trainingDaysArr, setTrainingDaysArr] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const [mediumPagesArr, setMediumPagesArr] = useState([100]);
  const [pagesArr, setPagesArr] = useState([150]);
  const [chartPages, setChartPages]= useState(0)
  const useQueryStateResult = resultsApi.endpoints.fetchResults.useQueryState();
// console.log(useQueryStateResult.data);
  useEffect(() => {
    if (useQueryStateResult.data) {
      if (useQueryStateResult.data.status !== 'in progress') {
        setTrainingDaysArr([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);
        setMediumPagesArr([100]);
        setPagesArr([150])
        setChartPages(0)
        console.log('retro');
      }
      // console.log(useQueryStateResult.data.status !== 'in progress');
    } 
  }, [useQueryStateResult.data])

  useEffect(() => {
    if (error) {
      return;
    }
    if (!isLoading) {
      const activeBooksArr = data.training.active;
      const booksArr = books.filter(({ _id }) => activeBooksArr.includes(_id));
      let totalPages = 0;
      booksArr.map(item => {
        return (totalPages += Number(item.pages));
      });
      setPages(totalPages);

      const startDay = new Date(data.training.start);
      const finishDay = new Date(data.training.end);
      const timeDiff = Math.abs(finishDay.getTime() - startDay.getTime());
      const trainingD = Math.ceil(timeDiff / (1000 * 3600 * 24));
      const trainingDArr = convertTrainingDaysToArr(trainingD);
      setTrainingDaysArr(trainingDArr);
      const mediumPages = Math.round(pages / trainingD);
      setChartPages(mediumPages)
      
      const mediumPA = convertPlanTrainingDaysToArr(trainingD, mediumPages);
      setMediumPagesArr(mediumPA);
      const pagesA = convertPagesToArr(data.statistic);
      setPagesArr(pagesA);
    }
  }, [books, chartPages, data, error, isLoading, pages]);

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
        text: `Кількість сторінок / день ${chartPages}`,
        responsive: true,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Дні',
          position: 'right',
          align: 'end',
        },
      },
      y: {
        display: true,
        title: {
          display: false,
          text: 'Сторінки',
          position: 'right',
          align: 'right',
        },
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
        <Counter>{chartPages}</Counter>
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
