import {
    Section,
    MyGoalsSection,
    MyGoalsBtn,
    MyGoalsContainer,
    AmountBooksContainer,
    AmountDaysContainer,
    BooksLeftContainer,
    BooksLeftText,
    AmountDaysText,
    AmountBooksText,
    AmountBooksWrapper,
    AmountDaysWrapper,
    BooksLeftWrapper,
} from "./MyGoals.styled";
// import { useState } from 'react';
// import { useLocation } from "react-router-dom";
// import { useFetchResultsQuery } from '../../redux/results/rtkQuery/resultsSlice.js ';
// import { useSelector } from 'react-redux';


export default function MyGoals() {
  return(
        <Section> 
        <MyGoalsSection>
            <MyGoalsBtn>Моя мета прочитати</MyGoalsBtn>
                <MyGoalsContainer>
                    <AmountBooksWrapper>
                    <AmountBooksContainer>
                     0
                    </AmountBooksContainer>
                        <AmountBooksText>Кількість книжок</AmountBooksText>
                    </AmountBooksWrapper>
                    <AmountDaysWrapper>
                    <AmountDaysContainer>
                        0
                    </AmountDaysContainer>
                        <AmountDaysText>Кількість днів</AmountDaysText>
                    </AmountDaysWrapper>
                    <BooksLeftWrapper>
                    <BooksLeftContainer>
                       0
                    </BooksLeftContainer>
                        <BooksLeftText>Залишилось книжок</BooksLeftText>
                        </BooksLeftWrapper>
            </MyGoalsContainer>
            </MyGoalsSection>
        </Section>)  
}