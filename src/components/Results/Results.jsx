import React, { useState } from 'react';
import ResultTable from './ResultTable';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { nanoid } from 'nanoid';
// import '../../css/react-datepicker.css';
import moment from 'moment';
import {
  Section,
  Title,
  DateWrapper,
  Label,
  Input,
  Button,
} from './Results.styled';
import {
  useFetchResultsQuery,
  useCreateResultMutation,
} from 'redux/results/resultsSlice';

export default function Results() {
  const [date, setDate] = useState(null);
  const [pages, setPages] = useState('');

  const { data, error, isLoading } = useFetchResultsQuery();

  console.log(data);
  console.log(error);

  console.log(isLoading);

  const [createResult] = useCreateResultMutation();

  const handleSubmit = e => {
    e.preventDefault();
    const date = e.target.date.value;
    const time = moment().format('h:mm:ss');
    const pages = e.target.pages.value;
    const result = {
      // id: nanoid(),
      date,
      // time,
      pages,
    };

    createResult(result);
    console.log(time);
    reset();
  };

  const reset = () => {
    setDate('');
    setPages('');
  };

  return (
    <>
      <Section>
        <Title>Результати</Title>
        <form onSubmit={handleSubmit} autoComplete="off">
          <DateWrapper>
            <Label>
              Дата
              <DatePicker
                type="date"
                name="date"
                selected={date}
                onChange={date => setDate(date)}
                dateFormat="dd.MM.yyyy"
                maxDate={new Date()}
              />
            </Label>
            <Label>
              Кількість сторінок
              <Input
                name="pages"
                value={pages}
                onChange={e => setPages(e.target.value)}
                min={1}
              />
            </Label>
          </DateWrapper>
          <Button type="submit">Додати результат</Button>
        </form>
      </Section>
      <ResultTable />
    </>
  );
}
