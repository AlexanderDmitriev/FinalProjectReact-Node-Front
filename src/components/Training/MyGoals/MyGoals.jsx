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
import { booksApi } from 'redux/booksApi/booksSlice';
import { resultsApi } from 'redux/results/resultsSlice';

export default function MyGoals() {
  const useQueryStateBooks = booksApi.endpoints.getBooks.useQueryState();
  const useQueryStateResult = resultsApi.endpoints.fetchResults.useQueryState();

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
            {useQueryStateResult.data &&
            useQueryStateResult.data.status === 'in progress' ? (
              <AmountBooksContainer>
                {useQueryStateResult.data.training.active.length}
              </AmountBooksContainer>
            ) : (
              <AmountBooksContainer>0</AmountBooksContainer>
            )}
            <AmountBooksText>Кількість книжок</AmountBooksText>
          </AmountBooksWrapper>
          <AmountDaysWrapper>
            {useQueryStateResult.data &&
            useQueryStateResult.data.status === 'in progress' ? (
              <AmountDaysContainer>
                {trainingDays(useQueryStateResult.data.training.end)}
              </AmountDaysContainer>
            ) : (
              <AmountDaysContainer>0</AmountDaysContainer>
            )}
            <AmountDaysText>Кількість днів</AmountDaysText>
          </AmountDaysWrapper>
          <BooksLeftWrapper>
            {useQueryStateBooks.data &&
            useQueryStateResult.data &&
            useQueryStateResult.data.status === 'in progress' ? (
              <BooksLeftContainer>
                {
                  useQueryStateBooks.data.filter(
                    book => book.status === 'in progress'
                  ).length
                }
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
