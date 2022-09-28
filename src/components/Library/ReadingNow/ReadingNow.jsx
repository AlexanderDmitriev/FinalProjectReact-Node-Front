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

export default function ReadingNow({ books }) {
  console.log(books)
  return (
    <Section>
      <Title>Reading Now</Title>
      <Wrapper>
        <>
          {books.map(book=>( <BookCard><List key={book.id}>
            <ListItem> <IconBookOrange/><BookName>{book.bookName}</BookName></ListItem>
            <ListItem><BookDescription>Author:<Value>{ book.author}</Value></BookDescription></ListItem>
            <ListItem><BookDescription>Year:<Value>{ book.year}</Value></BookDescription></ListItem>
            <ListItem><BookDescription>Pages:<Value>{ book.pages}</Value></BookDescription></ListItem>
            <ListItem><BookDescription>Rating:<Value>{ book.rating}</Value></BookDescription></ListItem>
        </List></BookCard>))}
         
        </>
      </Wrapper>
         
     
    </Section>
  );
}