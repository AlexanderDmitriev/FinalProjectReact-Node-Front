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
  Value,
} from '../AlreadyRead/AlreadyRead.styled';
import { nanoid } from 'nanoid';

export default function GoingToRead({ books }) {
  return (
    <Section>
      <Title>Буду читати</Title>
      <Wrapper>
        <>
          {books.map(book => (
            <BookCard key={nanoid()}>
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
              </List>
            </BookCard>
          ))}
        </>
        <AddBookButton>+</AddBookButton>
      </Wrapper>
    </Section>
  );
}
