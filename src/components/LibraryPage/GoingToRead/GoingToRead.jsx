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
import { TrainingButton } from '../Library.styled';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';

export default function GoingToRead({ books }) {
  const filterBook = books.filter(book => book.status === 'plan');
  return (
    <Section>
      <Title>Буду читати</Title>
      <Wrapper>
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

        <NavLink to="/training" exact="true">
          <TrainingButton>Моє тренування</TrainingButton>
        </NavLink>
        <AddBookButton>+</AddBookButton>
        {/* <svg
          width="32"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
        </svg> */}
      </Wrapper>
    </Section>
  );
}
