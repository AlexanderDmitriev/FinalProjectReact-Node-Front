import styled from 'styled-components';
import { theme } from '../../../helpers/theme';
import bookIcon from '../../../images/bookIcon.svg';
import orangebookicon from '../../../images/orangebookicon.svg'
import flat from '../../../images/iconflat.svg'

export const Section = styled.div`
  /* max-width: 320px; */
  margin: 20px;
  padding-top: 20px;
  background-color: #F6F7FB;

  @media screen and (min-width: 768px) {
    width: 704px;
    margin: 40px 32px 40px 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 928px;
    margin-top: 23px;
    margin-left: 16px;
  }
`;
// export const TitleContainer: 
export const TitleWrapper = styled.span`
  margin-left: 34px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Btn = styled.button`
  cursor: pointer;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
`

// padding: 32px 20px 40px 20px;
// padding: 64px 159px 88px 159px;
// padding: 179px 154px 239px 127px;

// export const Title = styled.h2`
//     font-family: 'Montserrat';
//     font-style: normal;
//     font-weight: 600;
//     font-size: 19px;
//     line-height: 23px;
//     color: ${theme.colors.titleColor};
//     margin-bottom: 20px;`

export const BookCard = styled.div`
    background-color:#F6F7FB;
    margin-bottom:20px;
    position: relative;
`;

export const IconBook = styled.i`
    min-width:22px;
    height:18px;
    background-image: url(${flat});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
   margin-right:12px;
   
   `

export const IconBookOrange = styled.i`
    min-width:22px;
    height:18px;
    background-image: url(${orangebookicon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
   margin-right:15px;
 `

export const BookName = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: ${theme.colors.titleColor};
    margin-bottom: 14px;`

export const BookDescription = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: ${theme.colors.bookDescriptionColor};`

export const Value = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-left:20px;
    margin-right:auto;
    color: ${theme.colors.titleColor};`

    export const ResumeButton = styled.button`
    min-width: 130px;
    min-height:40px;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #ffffff;
    display:block;
    margin-right:auto;
    margin-left:auto;
    background-color: ${theme.colors.darkButtonColor};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #000000;
    &:hover,
    &:focus {
      border: 1px solid #f25137;
    }
`;
export const List = styled.ul`
  list-style: none;
`;
export const ListItem = styled.li`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  color: #898f9f;
    color: ${theme.colors.focusColor};
  display:flex;

  :not(:last-child) {
    margin-bottom: 14px;
  }
`;
export const Wrapper = styled.div`
  position:relative;
  padding-bottom:32px;
  
`;

export const StartTrainingBtn = styled.button`
  width: 171px;
  height: 42px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  background: #FF6B08;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  margin-left: 54px;

`
// export const AddBookButton = styled.button`
//   position:absolute;
//     top: 95%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     min-width: 52px;
//   min-width: 52px;
//   min-height:52px;
//   font-family: 'Montserrat';
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 16px;
//   text-align: center;
//   color: #ffffff;
//   display:block;
//   margin-right:auto;
//   margin-left:auto;
//   background-color: ${theme.colors.focusColor};
//   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
//   border-radius: 50%;
//   border:none;
//   &:hover,
//   &:focus {
//     border: 1px solid #f25137;
//   }
// `;