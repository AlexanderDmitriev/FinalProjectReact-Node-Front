import { useMediaQuery } from 'react-responsive';
import { IconBookOrange } from '../AlreadyRead/AlreadyRead.styled';
import {
  Section,
  Title,
  List,
  BookCard,
  ListItem,
  BookName,
  BookDescription,
  TitleBox,
  BookTitleDescription,
  Wrapper,
  Value,
} from '../GoingToRead/GoingToRead.styled';
import { nanoid } from 'nanoid';

export default function GoingToRead({ books }) {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isNotebook = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  const filterBook = books.filter(book => book.status === 'in progress');
  return (
    <Section>
      <Title>Читаю</Title>
      <Wrapper>
        <>
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
              <BookTitleDescription style={{ width: 80 }}>
                Стор:{' '}
              </BookTitleDescription>
            </TitleBox>
          )}
          {filterBook.map(book => (
            <BookCard key={nanoid()}>
              <List>
                <ListItem>
                  {' '}
                  <IconBookOrange />
                  <BookName>{book.title}</BookName>
                </ListItem>
                <ListItem>
                  <BookDescription> Автор:</BookDescription>
                  <Value>{book.author}</Value>
                </ListItem>
                <ListItem>
                  <BookDescription> Рік:</BookDescription>
                  <Value>{book.year}</Value>
                </ListItem>
                <ListItem>
                  <BookDescription> Кількість сторінок:</BookDescription>
                  <Value>{book.pages}</Value>
                </ListItem>
              </List>
            </BookCard>
          ))}
        </>
      </Wrapper>
    </Section>
  );
}
