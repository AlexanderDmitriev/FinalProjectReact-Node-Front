import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  Section,
  Title,
  List,
  BookCard,
  ListItem,
  IconBook,
  BookName,
  ResumeButton,
  BookDescription,
  BookTitleDescription,
  Wrapper,
  Value,
  TitleBox,
} from './AlreadyRead.styled';

import StarRatingBook from './StarRatingBook';

export default function AlreadyRead({ books }) {
  const handleSubmit = () => {};
  const isTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const filterBook = books.filter(book => book.status === 'finished');
  return (
    <Section>
      <Title>Вже прочитано</Title>
      <Wrapper>
        <>
          {isTablet && (
            <TitleBox>
              <BookTitleDescription style={{ width: 190 }}>
                Назва книги:
              </BookTitleDescription>
              <BookTitleDescription style={{ width: 100 }}>
                Автор:
              </BookTitleDescription>
              <BookTitleDescription style={{ width: 100 }}>
                Рік:
              </BookTitleDescription>
              <BookTitleDescription style={{ width: 100 }}>
                Стор:{' '}
              </BookTitleDescription>
              <BookTitleDescription style={{ width: 80 }}>
                Рейтинг:{' '}
              </BookTitleDescription>
            </TitleBox>
          )}
          {filterBook.map(book => (
            <BookCard key={book.id}>
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
                  <BookDescription>Рік:</BookDescription>
                  <Value>{book.year}</Value>
                </ListItem>
                <ListItem>
                  <BookDescription>Кількість сторінок: </BookDescription>
                  <Value>{book.pages}</Value>
                </ListItem>
                <ListItem>
                  <BookDescription>Рейтинг: </BookDescription>
                  {/* <Value>{book.resume.rating}</Value> */}

                  <StarRatingBook rating={book.resume.rating} />
                </ListItem>
                <ResumeButton
                  disabled={false}
                  onClick={handleSubmit}
                  type="submit"
                >
                  Резюме
                </ResumeButton>
              </List>
            </BookCard>
          ))}
        </>
      </Wrapper>
    </Section>
  );
}
