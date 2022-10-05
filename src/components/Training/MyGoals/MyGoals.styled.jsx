import styled from 'styled-components';
import {theme} from '../../../helpers/theme';

export const Section = styled.div`
    background: #F6F7FB;
`

export const MyGoalsSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px 20px 0 20px;
   

    @media screen and (min-width: 1280px) {
        max-width: 928px;
    }
`

export const MyGoalsBtn = styled.button`
    height: 60px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: ${theme.colors.backColor};
    background: ${theme.colors.tableColor};
    width: 100%;
    margin-top: 32px;
    cursor: pointer;
    border: none;

    @media screen and (min-width: 768px) {
        margin-top: 40px;
    };

    @media screen and (min-width: 1280px) {
        max-width: 928px;
    };
`
export const MyGoalsContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 32px;
    justify-content: space-between;
    

    // @media screen and (min-width: 1280px) {
    //     max-width: 928px;
    // }
`
export const AmountBooksWrapper = styled.div`
    margin-right:12px;
    flex-wrap: wrap;
    `;

export const AmountBooksContainer = styled.div`
    display: flex;
    flex-direction: row;
    min-width:63px;
    min-height:63px;
    background-color:#F5F7FA;
    box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
    text-align: center;
    justify-content: center;
    align-items:center;
     font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 35px;
line-height: 38px;
text-align: center;
color: #091E3F;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    };

    @media screen and (min-width: 1280px) {
        justify-content: center;
    };
`
export const AmountBooksText = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 13px;
text-align: center;
color: #898F9F;
margin-top:8px;`

export const AmountDaysWrapper = styled.div`

flex-wrap: wrap;
`

export const AmountDaysContainer = styled.div`
    display: flex;
    flex-direction: row;
    min-width:63px;
    min-height:63px;
    background-color:#F5F7FA;
box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
 justify-content: center;
    align-items:center;
      font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 35px;
line-height: 38px;
text-align: center;
color: #091E3F;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    };
`
export const AmountDaysText = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 13px;
text-align: center;
color: #898F9F;
margin-top:8px;`

export const BooksLeftWrapper = styled.div`
margin-left:12px;
flex-wrap: wrap;
`

export const BooksLeftContainer = styled.div`
    display: flex;
    flex-direction: row;
    min-width:63px;
    min-height:63px;
    background-color:#F5F7FA;
box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
 justify-content: center;
    align-items:center;
      font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 35px;
line-height: 38px;
text-align: center;
color: #FF6B08;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    };
`
export const BooksLeftText = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 13px;
text-align: center;
color: #898F9F;
margin-top:8px;`
