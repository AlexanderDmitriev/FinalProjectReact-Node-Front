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
import { useDispatch } from "react-redux/es/exports";
import { ReactComponent as IconBack } from '../../../images/iconback.svg'
import { useGetBooksQuery } from "redux/booksApi/booksSlice";
import { bookList } from "redux/trainingBookList/trainingBooksListAction";


export default function AddTraining() {
    const location = useLocation();
    const path = location?.state?.from ?? '/';
    const { data, error, isLoading } = useGetBooksQuery();
    const dispatch = useDispatch();

    const [startTime, setStartTime] = useState('');
    const [finishTime, setFinishTime] = useState('');
    const [selectedBookArr, setSelectedBookArr] = useState('');
    const [selectedBook, setSelectedBook] = useState('')
    const [books, setBooks] = useState([]);

    useEffect(() => {
        if (!isLoading) {
            const booksArr = data.filter(({ _id }) => selectedBookArr.includes(_id))
            setBooks(booksArr);
            dispatch(bookList(booksArr))
    }
    }, [data, dispatch, isLoading, selectedBookArr])
     
    const handleSelectChange = event => {
        setSelectedBook(event.target.value);
    }

    const handleChangeStartTime = e => {
        setStartTime(e.target.value)
    }

    const handleChangeFinishTime = e => {
        setFinishTime(e.target.value)
    }

    const handleAddBook = () => {
        setSelectedBookArr([...selectedBookArr, selectedBook]);  
        // reset()
    }

    /* const reset = () => {
        setStartTime('')
        setFinishTime('')
        setSelectedBook('')
    } */

    return (
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
                    value={startTime}
                    onChange={handleChangeStartTime}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                />
                <Input
                    type="text"
                    placeholder="Завершение"
                    name='finishTime'
                    value={finishTime}
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
        </Section>
    )
}