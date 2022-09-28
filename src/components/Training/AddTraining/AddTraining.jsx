import {
    Section,
    TrainingSection,
    Input,
    TrainingBtn,
    BackArrow,
    Select,
    Option,
    AddBtn,
    InputContainer,
    SelectContainer,
    Svg,
    SvgContainer,
} from "./AddTraining.styled";
import { useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";

const books = [
    {
        id: '1',
        title: 'book 1',
        author: 'auth1or 1',
        year: '2001',
        pages: '101',
        status: 'plan',
        resume: {
            comment: 'fine',
            rating: '5',
        },
        owner: '111',
    },
    {
        id: '2',
        title: 'book 2',
        author: 'author 2',
        year: '2002',
        pages: '102',
        status: 'plan',
        resume: {
            comment: 'fine',
            rating: '5',
        },
        owner: '222',
    },
    {
        id: '3',
        title: 'book 3',
        author: 'author 3',
        year: '2003',
        pages: '103',
        status: 'plan',
        resume: {
            comment: 'fine',
            rating: '5',
        },
        owner: '333',
    },
]


export default function AddTraining() {
    const location = useLocation();
    const path = location?.state?.from ?? '/';
  
    
    const [startTime, setStartTime] = useState('');
    const [finishTime, setFinishTime] = useState('');
    // const [selectedBookArr, setSelectedBookArr] = useState('');
    const [selectedBook, setSelectedBook] = useState('')

    const handleSelectChange = event => {
        // setSelectedBookArr([...selectedBookArr, event.target.value]);
        setSelectedBook(event.target.value);
    }

    const handleChangeStartTime = e => {
        setStartTime(e.target.value)
    }

    const handleChangeFinishTime = e => {
        setFinishTime(e.target.value)
    }

    const handleAddTraining = () => {
        console.log('start training date:', startTime)
        console.log('finish training date:', finishTime)
        console.log('book id:', selectedBook)
        // todo логика отправки вібранной книги на бек
        reset()
    }

    const reset = () => {
        setStartTime('')
        setFinishTime('')
        setSelectedBook('')
    }

    return (
        <Section>
        <TrainingSection>
            <SvgContainer>
                <NavLink to={path} exact="true">
                    <BackArrow />
                </NavLink>
            </SvgContainer> 
            <Svg>
                <use href='../../../images/icons.svg#icon-calendar-1'/>
            </Svg>
            <TrainingBtn>Моє тренування</TrainingBtn>
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
            <SelectContainer>
                <Select value={selectedBook} onChange={handleSelectChange}>
                    <Option disabled={true} value="">
                    Обрати книги з бібліотеки
                    </Option>
                    {books.map((book, index) => {
                        return (
                            <Option value={book.id} key={index}>{book.title}</Option>  
                        )
                    })}
                </Select>
                <AddBtn type="submit" onClick={handleAddTraining}>Додати</AddBtn>
            </SelectContainer>    
            </TrainingSection>
        </Section>
    )
}