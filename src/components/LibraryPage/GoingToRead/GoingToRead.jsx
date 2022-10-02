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
// import { NavLink } from 'react-router-dom';

export default function GoingToRead({ books }) {
  console.log(books)
  return (
    <Section>
      <Title>Хочу прочитати</Title>
      <Wrapper>
        <>
          {books.map(book=>( <BookCard><List key={book.bookName}>
            <ListItem> <IconBook/><BookName>{book.bookName}</BookName></ListItem>
              <ListItem><BookDescription>Автор:<Value>{ book.author}</Value></BookDescription></ListItem>
            <ListItem><BookDescription>Рік:<Value>{ book.year}</Value></BookDescription></ListItem>
            <ListItem><BookDescription>Сторінки:<Value>{ book.pages}</Value></BookDescription></ListItem>
            
        </List></BookCard>))}
         
        </>
        <AddBookButton>+</AddBookButton>
      </Wrapper>
         
     
    </Section>
  );
}