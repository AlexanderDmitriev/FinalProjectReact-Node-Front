import { useMediaQuery } from 'react-responsive';
import {
  Section,
  Title,
  List,
  BookCard,
  ListItem,
  IconBook,
  BookName,
  AddBookButton,
  BookDescription,
  Wrapper,
  TitleBox,
  BookTitleDescription,
  Value,
} from '../GoingToRead/GoingToRead.styled';
import { TrainingButton } from '../Library.styled';

import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

export default function GoingToRead({ books }) {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isNotebook = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  const navigate = useNavigate();
  const handleTraining = () => {
    navigate('/training', { replace: true });
  };

  const filterBook = books.filter(book => book.status === 'plan');
  return (
    <Section>
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

        <TrainingButton type="button" onClick={handleTraining}>
          Моє тренування
        </TrainingButton>

        <AddBookButton href=" #input">+</AddBookButton>
      </Wrapper>
    </Section>
  );
}
