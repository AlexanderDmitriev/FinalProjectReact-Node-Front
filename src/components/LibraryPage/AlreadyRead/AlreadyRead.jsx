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
  Wrapper,
  Value,
} from './AlreadyRead.styled';
// import { NavLink } from 'react-router-dom';

export default function AlreadyRead({ books }) {
  return (
    <Section>
      <Title>Вже прочитано</Title>
      <Wrapper>
        <>
          {books.map(book => (
            <BookCard key={book.id}>
              <List>
                <ListItem>
                  {' '}
                  <IconBook />
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
                    Рейтинг:<Value>{book.rating}</Value>
                  </BookDescription>
                </ListItem>
              </List>
            </BookCard>
          ))}
        </>
        <ResumeButton>Далі</ResumeButton>
      </Wrapper>
    </Section>
  );
}
