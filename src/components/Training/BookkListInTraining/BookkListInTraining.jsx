import {
  Section,
  List,
  BookCard,
  ListItem,
  BookName,
  BookDescription,
  Wrapper,
  Value,
  BoxChecked,
  CheckBox,
  TitleWrapper,
  Year,
  Pages,
  HeaderWrapper,
  HeaderTitle,
  HeaderAuthor,
  HeaderYear,
} from './BookListInTraining.styled';
import { useFetchResultsQuery } from 'redux/results/resultsSlice';
import { useState, useEffect } from 'react';

export default function BookListInTraining({booksList}) {
  const { data, /*error, isLoading*/ } = useFetchResultsQuery();
  const [books, setBooks] = useState(null);
  
  useEffect(() => {
    if (data!==undefined) {
      const id = data.training.active;
      const booksArr = booksList.filter(({ _id }) => id.includes(_id));
      setBooks(booksArr);
    } 
  },[booksList, data])
  console.log("books");
  return (
    <Section>
      <Wrapper>
        <>
          <HeaderWrapper>
            <HeaderTitle>Назва книги</HeaderTitle>
            <HeaderAuthor>Автор</HeaderAuthor>
            <HeaderYear>Рік</HeaderYear>
            <span>Стор.</span>
          </HeaderWrapper>
          {books &&
            books.map(book => (
              <BookCard key={book._id}>
                <List>
                  <ListItem>
                    {' '}
                    {book.status === 'finished' ? <BoxChecked /> : <CheckBox />}
                    <BookName>{book.title}</BookName>
                  </ListItem>
                  <ListItem>
                    <BookDescription>
                      <TitleWrapper>Автор:</TitleWrapper>
                      <Value>{book.author}</Value>
                    </BookDescription>
                  </ListItem>
                  <ListItem>
                    <BookDescription>
                      <TitleWrapper>Рік:</TitleWrapper>
                      <Year>{book.year}</Year>
                    </BookDescription>
                  </ListItem>
                  <ListItem>
                    <BookDescription>
                      <TitleWrapper>Стор.:</TitleWrapper>
                      <Pages>{book.pages}</Pages>
                    </BookDescription>
                  </ListItem>
                  <ListItem></ListItem>
                </List>
              </BookCard>
            ))}
        </>
      </Wrapper>
    </Section>
  );
}
