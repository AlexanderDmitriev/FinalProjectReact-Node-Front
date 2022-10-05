import {
  Section,
  MyGoalsSection,
  MyGoalsBtn,
  MyGoalsContainer,
  AmountBooksContainer,
  AmountDaysContainer,
  BooksLeftContainer,
  BooksLeftText,
  AmountDaysText,
  AmountBooksText,
  AmountBooksWrapper,
  AmountDaysWrapper,
  BooksLeftWrapper,
} from './MyGoals.styled';

import { useFetchResultsQuery } from 'redux/results/resultsSlice';
import { useGetBooksQuery } from 'redux/booksApi/booksSlice';

export default function MyGoals() {
  const stats = useFetchResultsQuery();
  const { data } = useGetBooksQuery();

  const booksInProgress = data.filter(
    book => book.status === 'in progress'
  ).length;
  // const trainingStatus = stats.data.status;

  //   console.log(stats.data.status);

  const trainingDays = date => {
    const startDay = new Date();
    const finishDay = new Date(date);
    const timeDiff = Math.abs(finishDay.getTime() - startDay.getTime());
    const trainingDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return trainingDays;
  };

  return (
    <Section>
      <MyGoalsSection>
        <MyGoalsBtn>Моя мета прочитати</MyGoalsBtn>
        <MyGoalsContainer>
          <AmountBooksWrapper>
            {data && stats.data && stats.data.status === 'in progress' ? (
              <AmountBooksContainer>{booksInProgress}</AmountBooksContainer>
            ) : (
              <AmountBooksContainer>0</AmountBooksContainer>
            )}
            <AmountBooksText>Кількість книжок</AmountBooksText>
          </AmountBooksWrapper>
          <AmountDaysWrapper>
            {stats.data && stats.data.status === 'in progress' ? (
              <AmountDaysContainer>
                {trainingDays(stats.data.training.end)}
              </AmountDaysContainer>
            ) : (
              <AmountDaysContainer>0</AmountDaysContainer>
            )}
            <AmountDaysText>Кількість днів</AmountDaysText>
          </AmountDaysWrapper>
          <BooksLeftWrapper>
            {stats.data && stats.data.status === 'in progress' ? (
              <BooksLeftContainer>
                {stats.data.training.active.length}
              </BooksLeftContainer>
            ) : (
              <BooksLeftContainer>0</BooksLeftContainer>
            )}
            <BooksLeftText>Залишилось книжок</BooksLeftText>
          </BooksLeftWrapper>
        </MyGoalsContainer>
      </MyGoalsSection>
    </Section>
  );
}
