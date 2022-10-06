import { useMediaQuery } from 'react-responsive';
import {
  Section,
  Title,
  List,
  BookCard,
  ListItem,
  IconBook,
  BookName,
  BookDescription,
  Wrapper,
  TitleBox,
  BookTitleDescription,
  Value, ToMyTrainings,
} from '../GoingToRead/GoingToRead.styled';
import { TrainingButton } from '../Library.styled';
import { nanoid } from 'nanoid';

export default function GoingToRead({ books }) {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isNotebook = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  const filterBook = books.filter(book => book.status === 'plan');
  return (
    <Section id="addBook">
      <Title>Маю намір прочитати</Title>
      <Wrapper>
        {isTablet && (
          <TitleBox>
            <BookTitleDescription style={{ width: 320 }}>
              Назва книги:
            </BookTitleDescription>
            <BookTitleDescription style={{ width: 170 }}>
              Автор:
            </BookTitleDescription>
            <BookTitleDescription style={{ width: 150 }}>
              Рік:
            </BookTitleDescription>
            <BookTitleDescription style={{ width: 80 }}>
              Стор:{' '}
            </BookTitleDescription>
          </TitleBox>
        )}
        {isNotebook && (
          <TitleBox>
            <BookTitleDescription style={{ width: 500 }}>
              Назва книги:
            </BookTitleDescription>
            <BookTitleDescription style={{ width: 340 }}>
              Автор:
            </BookTitleDescription>
            <BookTitleDescription style={{ width: 310 }}>
              Рік:
            </BookTitleDescription>
            <BookTitleDescription style={{ width: 100 }}>
              Стор:{' '}
            </BookTitleDescription>
          </TitleBox>
        )}
        {filterBook.map(book => (
          <BookCard key={nanoid()}>
            <List>
              <ListItem>
                {' '}
                <IconBook />
                <BookName>{book.title}</BookName>
              </ListItem>
              <ListItem>
                <BookDescription>Автор:</BookDescription>
                <Value>{book.author}</Value>
              </ListItem>
              <ListItem>
                <BookDescription> Рік:</BookDescription>
                <Value>{book.year}</Value>
              </ListItem>
              <ListItem>
                <BookDescription>Кількість сторінок:</BookDescription>
                <Value>{book.pages}</Value>
              </ListItem>
            </List>
          </BookCard>
        ))}

        <ToMyTrainings to="/training" exact="true">
          <TrainingButton>Моє тренування</TrainingButton>
        </ToMyTrainings>
      </Wrapper>
    </Section>
  );
}
