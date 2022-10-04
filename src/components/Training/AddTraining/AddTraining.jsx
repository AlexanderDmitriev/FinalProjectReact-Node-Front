import {
    Section,
    TrainingSection,
    Input,
    TrainingTitle,
    Select,
    Option,
    AddBtn,
    InputContainer,
    SelectContainer,
    Svg,
    SvgContainer,
} from "./AddTraining.styled";
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { ReactComponent as IconBack } from '../../../images/iconback.svg'
import { useGetBooksQuery } from "redux/booksApi/booksSlice";
import { useUpdateTrainingMutation } from "redux/addTraining/addTrainingSlice";
import { bookList, finishDate, startDate } from "redux/trainingBookList/trainingBooksListAction";
import bookListSelectors from '../../../redux/trainingBookList/bookListSelectors';
import MyGoals from "components/Training/MyGoals/MyGoals";
import BooksList from 'components/Training/BooksList/BooksList';

export default function AddTraining() {
    const location = useLocation();
    const path = location?.state?.from ?? '/';
    const { data, /* error, */ isLoading } = useGetBooksQuery();
    const dispatch = useDispatch();
    const [updateTraining] = useUpdateTrainingMutation();

    const start = useSelector(bookListSelectors.getStartDate)
    const finish = useSelector(bookListSelectors.getFinishDate)
    const startBookList = useSelector(bookListSelectors.getBooksList)
    const [selectedBookArr, setSelectedBookArr] = useState([]);
    const [selectedBook, setSelectedBook] = useState('')

    useEffect(() => {
        if (!isLoading) {
            const booksArr = data.filter(({ _id }) => selectedBookArr.includes(_id))
            dispatch(bookList(booksArr)) 
    }
    }, [data, dispatch, isLoading, selectedBookArr])
     
    const handleSelectChange = event => {
        setSelectedBook(event.target.value);
    }

    const handleChangeStartTime = e => {
        dispatch(startDate(e.target.value))
    }

    const handleChangeFinishTime = e => {
        dispatch(finishDate(e.target.value))
    }

    const handleAddBook = () => {
        const double = selectedBookArr.find(i => i === selectedBook);
        if (double) { return };
        const booksArrInfo = data.filter(({ _id }) => selectedBookArr.includes(_id))
        dispatch(bookList(booksArrInfo))
        setSelectedBookArr([selectedBook, ...selectedBookArr]);  
    }

    const onDeleteBtnClick = (e) => {
        const bookId = e.currentTarget.value;
        const filteredBooks = selectedBookArr.filter(i => i !== bookId)
        setSelectedBookArr(filteredBooks);
        const bookListSelected = startBookList.filter(i => i._id !== bookId);
        dispatch(bookList(bookListSelected))
    }

    const addTrainingClick = async () => {
        if (!start.includes("-") || !finish.includes("-")) { alert("Введіть дати") }
        try {
        const value = {
            start: start,
            end: finish,
            book: selectedBookArr,
            };
            await updateTraining(value);
        } catch (err) {
            console.log(err);
        }
    }
    
    return (

        <>
            <MyGoals />
            
        <Section> 
        <TrainingSection>
            <SvgContainer>
                <NavLink to={path} exact="true">
                    <IconBack fill="#FF6B08" width="24" height="12" />
                </NavLink>
            </SvgContainer> 
            <Svg>
                <use href='../../../images/icons.svg#icon-calendar-1'/>
            </Svg>
            <TrainingTitle>Моє тренування</TrainingTitle>
            <InputContainer>
                <Input
                    type="text"
                    placeholder="Початок"
                    name='startTime'
                    onChange={handleChangeStartTime}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                />
                <Input
                    type="text"
                    placeholder="Завершение"
                    name='finishTime'
                    onChange={handleChangeFinishTime}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                />
                </InputContainer>

                {isLoading
                    ?
                    <h2>loading</h2>
                    :
                        <SelectContainer>
                            <Select value={selectedBook} onChange={handleSelectChange}>
                                <Option disabled={true} value="">
                                Обрати книги з бібліотеки
                                </Option>
                                {data.map((book) => {
                                    return (
                                        <Option value={book._id} key={book._id}>{book.title}</Option>  
                                    )
                                })}
                            </Select>
                        <AddBtn type="submit" onClick={handleAddBook}>Додати</AddBtn>
                        </SelectContainer>
                    }
                </TrainingSection>
                <BooksList books={startBookList} onDeleteBtnClick={onDeleteBtnClick} addTrainingClick={addTrainingClick} />
                {/* <BookListInTraining /> */}
        </Section></>
    )
}