import { IconBookOrange } from '../AlreadyRead/AlreadyRead.styled';
import {
  Section,
  Title,
  List,
  BookCard,
  ListItem,
  BookName,
  BookDescription,
  Wrapper,
  Value,
} from '../AlreadyRead/AlreadyRead.styled';
// import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';

export default function ReadingNow({ books }) {
  const filterBook = books.filter(book => book.status === 'in progress');
  return (
    <Section>
      <Title>Читаю зараз</Title>
      <Wrapper>
        <>
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
