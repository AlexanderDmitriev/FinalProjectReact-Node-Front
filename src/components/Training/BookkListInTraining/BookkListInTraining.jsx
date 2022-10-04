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
    HeaderYear
} from './BookListInTraining.styled';
import { useSelector } from 'react-redux';
import bookListSelectors from '../../../redux/trainingBookList/bookListSelectors';

export default function BookListInTraining() {
    const books = useSelector(bookListSelectors.getBooksList);
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
                        <List >
                            <ListItem >
                                {' '}
                                {(book.status === "finished") ?  <BoxChecked />
                                   : <CheckBox />}
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
            </>
        </Wrapper>
        </Section>
);
}