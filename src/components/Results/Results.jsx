import React, { useState } from 'react';
import ResultTable from './ResultTable';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { nanoid } from 'nanoid';
import moment from 'moment';
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

    const pickedDate = e.target.date.value;

    const formattedDate = new Date(pickedDate);
    const month = ('0' + (formattedDate.getMonth() + 1)).slice(-2);
    const day = ('0' + formattedDate.getDate()).slice(-2);
    const year = formattedDate.getFullYear();
    const date = year + '-' + month + '-' + day;
    // console.log(pickedDate);

    const pages = e.target.pages.value;

    // const hour =
    //   pickedDate.getHours().toString().length < 2
    //     ? '0' + pickedDate.getHours()
    //     : pickedDate.getHours();
    // const minutes =
    //   pickedDate.getMinutes().toString().length < 2
    //     ? '0' + pickedDate.getMinutes()
    //     : pickedDate.getMinutes();
    // const seconds =
    //   pickedDate.getSeconds().toString().length < 2
    //     ? '0' + pickedDate.getSeconds()
    //     : pickedDate.getSeconds();
    // const enteredTime = hour + ':' + minutes + ':' + seconds;
    const time = moment().format('hh:mm:ss');

    // const time = enteredTime < momentTime ? momentTime : enteredTime;
    // let time = 0;

    // if (enteredTime < momentTime) {
    //   time = momentTime;
    // } else if (enteredTime === '00:00:00') {
    //   time = momentTime;
    // } else {
    //   time = enteredTime;
    // }

    console.log(date);

    const result = {
      // id: nanoid(),
      date,
      time,
      pages,
    };

    createResult(result);

    console.log(typeof result.time);

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
        <Form onSubmit={handleSubmit} autoComplete="off">
          <DateWrapper>
            <Label>
              Дата
              <DatePicker
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={5}
                selected={date}
                onChange={date => setDate(date)}
                dateFormat="dd.MM.yyyy"
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
