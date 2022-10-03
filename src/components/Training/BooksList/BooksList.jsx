import { useSelector, useDispatch } from 'react-redux';
import { bookList } from "redux/trainingBookList/trainingBooksListAction";
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
  IconBook,
  TitleWrapper,
  Btn,
  StartTrainingBtn,
} from './BooksList.styled';
import bookListSelectors from '../../../redux/trainingBookList/bookListSelectors';
import deletedBtn from '../../../images/deletebtn.svg'


export default function BooksList({ books, onDeleteBtnClick, addTrainingClick }) {
    
  return (
    <Section>
      <Wrapper>
        <>
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
                            <TitleWrapper>Рік:</TitleWrapper><Value>{book.year}</Value>
                        </BookDescription>
                    </ListItem>
                    <ListItem>
                        <BookDescription>
                            <TitleWrapper>Стор.:</TitleWrapper><Value>{book.pages}</Value>
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