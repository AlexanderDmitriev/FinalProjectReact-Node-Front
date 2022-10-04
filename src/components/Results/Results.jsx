import React, { useState } from 'react';
// import ResultTable from './ResultTable';
import DatePicker from 'react-datepicker';
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
import { useCreateResultMutation } from 'redux/results/resultsSlice';

export default function Results() {
  const [date, setDate] = useState(null);
  const [pages, setPages] = useState('');

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

  const reset = () => {
    setDate(null);
    setPages('');
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
                onChange={date => setDate(date)}
                dateFormat="dd.MM.yyyy HH:mm"
                type="date"
                name="date"
                required
                maxDate={new Date()}
              />
            </Label>
            <Label>
              Кількість сторінок
              <Input
                name="pages"
                value={pages}
                onChange={e => setPages(e.target.value)}
                required
                min={1}
              />
            </Label>
          </DateWrapper>
          <Button type="submit">Додати результат</Button>
        </Form>
        <ResultTable />
      </Section>
    </>
  );
}
