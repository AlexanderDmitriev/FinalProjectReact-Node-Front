import {
    Section,
    List,
    BookCard,
    ListItem,
    BookName,
    BookDescription,
    Wrapper,
    Value,
    IconBook,
    TitleWrapper,
    Btn,
    StartTrainingBtn,
    Year,
    Pages,
    HeaderWrapper,
    HeaderTitle,
    HeaderAuthor,
    HeaderYear
} from './BooksList.styled';

import deletedBtn from '../../../images/deletebtn.svg'


export default function BooksList({ books, onDeleteBtnClick, addTrainingClick }) {
    
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
                        <Btn value={book._id} onClick={onDeleteBtnClick}>
                            <img src={deletedBtn} alt="delete" />
                        </Btn>
                    <List >
                        <ListItem >
                            {' '}
                            <IconBook />
                            <BookName>{book.title}</BookName>
                        </ListItem>
                        <ListItem>
                        <BookDescription>
                            <TitleWrapper>Автор:</TitleWrapper><Value>{book.author}</Value>
                        </BookDescription>
                    </ListItem>
                    <ListItem>
                        <BookDescription>
                            <TitleWrapper>Рік:</TitleWrapper><Year>{book.year}</Year>
                        </BookDescription>
                    </ListItem>
                    <ListItem>
                        <BookDescription>
                            <TitleWrapper>Стор.:</TitleWrapper><Pages>{book.pages}</Pages>
                        </BookDescription>
                    </ListItem>
                    <ListItem>
                    </ListItem>
                    </List>
                </BookCard>
            ))}    
            {(books.length !== 0) && <StartTrainingBtn onClick={addTrainingClick}>Почати тренування</StartTrainingBtn>}      
        </>
      </Wrapper>
    </Section>
  );
}