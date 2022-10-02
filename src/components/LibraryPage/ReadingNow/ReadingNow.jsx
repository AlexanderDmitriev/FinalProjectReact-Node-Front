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
      <Title>Читаю</Title>
      <Wrapper>
        <>
          {books.map(book=>( <BookCard><List key={book.bookName}>
            <ListItem> <IconBookOrange/><BookName>{book.bookName}</BookName></ListItem>
             <ListItem><BookDescription>Автор:<Value>{ book.author}</Value></BookDescription></ListItem>
            <ListItem><BookDescription>Рік:<Value>{ book.year}</Value></BookDescription></ListItem>
            <ListItem><BookDescription>Сторінки:<Value>{ book.pages}</Value></BookDescription></ListItem>
            <ListItem><BookDescription>Рейтинг:<Value>{ book.rating}</Value></BookDescription></ListItem>
        </List></BookCard>))}
         
        </>
      </Wrapper>
         
     
    </Section>
  );
}