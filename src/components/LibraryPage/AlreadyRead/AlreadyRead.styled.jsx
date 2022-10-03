import styled from 'styled-components';
import { theme } from '../../../helpers/theme';
import bookIcon from '../../../images/bookIcon.svg';
import orangebookicon from '../../../images/orangebookicon.svg';

export const Section = styled.div`
  /* max-width: 320px; */
  padding: 32px 20px 40px 20px;
  background-color: #f6f7fb;

  @media screen and (min-width: 768px) {
    /* max-width: 768px; */
    // padding: 64px 159px 88px 159px;
  }

  @media screen and (min-width: 1280px) {
    /* max-width: 1280px; */
    padding: 179px 154px 239px 127px;
  }
`;

export const Title = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 23px;
  color: ${theme.colors.titleColor};
  margin-bottom: 20px;
`;

export const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  // padding: 20px;
  background-color: #ffffff;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 704px;
    // padding: 64px 159px 88px 159px;
  }

  @media screen and (min-width: 1280px) {
    /* max-width: 1280px; */
    padding: 179px 154px 239px 127px;
  }
`;

export const IconBook = styled.i`
  min-width: 22px;
  height: 18px;
  background-image: url(${bookIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-right: 15px;
`;

export const IconBookOrange = styled.i`
  min-width: 22px;
  height: 18px;
  background-image: url(${orangebookicon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-right: 15px;
`;

export const BookName = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: ${theme.colors.titleColor};
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    width: 200px;
    // padding: 64px 159px 88px 159px;
  }

  @media screen and (min-width: 1280px) {
    /* max-width: 1280px; */
    padding: 179px 154px 239px 127px;
  }
`;

export const BookDescription = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: ${theme.colors.bookDescriptionColor};
  @media screen and (min-width: 768px) {
    display: none;
    // width-min: 100px;
    color: #000000;
  }
`;

export const Value = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  margin-left: 20px;
  alight-text: center:
  margin-right: auto;
  color: ${theme.colors.titleColor};
  @media screen and (min-width: 768px) {
    display: block;
     max-width: 228px;
  }
`;

export const ResumeButton = styled.button`
  min-width: 130px;
  min-height: 40px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 32px;
  background-color: ${theme.colors.darkButtonColor};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #000000;
  &:hover,
  &:focus {
    border: 1px solid #f25137;
  }
`;
export const List = styled.ul`
  @media screen and (min-width: 768px) {
    width: 704px;
    display: flex;
    vertical-align: baseline;
    padding: 14px 0px 14px 20px;
  }

  list-style: none;
`;
export const ListItem = styled.li`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  color: #898f9f;
  color: ${theme.colors.focusColor};
  display: flex;

  :not(:last-child) {
    margin-bottom: 14px;
  }

  @media screen and (min-width: 768px) {
    // display: inline-block;
    min-width: 100px;
    margin: 0px;
  }
`;
export const Wrapper = styled.div`
  // position: relative;
  // padding-bottom: 32px;
`;
export const AddBookButton = styled.button`
  position: absolute;
  margin-top: 50px;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 52px;
  min-width: 52px;
  min-height: 52px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  display: block;
  margin-right: auto;
  margin-left: auto;
  background-color: ${theme.colors.focusColor};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  border: none;
  &:hover,
  &:focus {
    border: 1px solid #f25137;
  }
`;
export const TitleBox = styled.div`
  display: flex;
  width: 684;

  padding: 20px;
  background-color: #ffffff;
  margin-bottom: 20px;
`;
