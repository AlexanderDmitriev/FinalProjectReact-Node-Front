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
  console.log(books)
  return (
    <Section>
      <Title>Прочитано</Title>
      <Wrapper>
        <>
          {books.map(book=>( <BookCard><List key={book.id}>
            <ListItem> <IconBook/><BookName>{book.bookName}</BookName></ListItem>
            <ListItem><BookDescription>Автор:<Value>{ book.author}</Value></BookDescription></ListItem>
            <ListItem><BookDescription>Рік:<Value>{ book.year}</Value></BookDescription></ListItem>
            <ListItem><BookDescription>Сторінки:<Value>{ book.pages}</Value></BookDescription></ListItem>
            <ListItem><BookDescription>Рейтинг:<Value>{ book.rating}</Value></BookDescription></ListItem>
        </List></BookCard>))}
         
        </>
        <ResumeButton>Resume</ResumeButton>
      </Wrapper>
         
     
    </Section>
  );
}
