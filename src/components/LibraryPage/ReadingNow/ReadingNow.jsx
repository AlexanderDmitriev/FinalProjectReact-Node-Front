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
  return (
    <Section>
      <Title>Читаю зараз</Title>
      <Wrapper>
        <>
          {books.map(book => (
            <BookCard key={nanoid()}>
              <List >
                <ListItem >
                  {' '}
                  <IconBookOrange />
                  <BookName>{book.bookName}</BookName>
                </ListItem>
                <ListItem>
                  <BookDescription>
                    Автор:<Value>{book.author}</Value>
                  </BookDescription>
                </ListItem>
                <ListItem>
                  <BookDescription>
                    Рік:<Value>{book.year}</Value>
                  </BookDescription>
                </ListItem>
                <ListItem>
                  <BookDescription>
                    Кількість сторінок:<Value>{book.pages}</Value>
                  </BookDescription>
                </ListItem>
                <ListItem>
                  <BookDescription>
                    Оцінка:<Value>{book.rating}</Value>
                  </BookDescription>
                </ListItem>
              </List>
            </BookCard>
          ))}
        </>
      </Wrapper>
    </Section>
  );
}
