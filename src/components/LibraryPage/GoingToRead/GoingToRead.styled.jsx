import styled from 'styled-components';
import { theme } from '../../../helpers/theme';
import bookIcon from '../../../images/bookIcon.svg';
import orangebookicon from '../../../images/orangebookicon.svg';

export const Section = styled.div`
  padding: 32px 20px 40px 20px;
  background-color: #f6f7fb;

  // @media screen and (min-width: 768px) {
  // }

  // @media screen and (min-width: 1280px) {
  // }
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
  padding: 20px;
  background-color: ${theme.colors.backColor};
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 0px;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1280px) {
    width: 1248px;
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
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const BookDescription = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: ${theme.colors.bookDescriptionColor};
  margin-left: 40px;

  @media screen and (min-width: 768px) {
    display: none;

    color: #000000;
  }
`;
export const BookTitleDescription = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${theme.colors.bookDescriptionColor};
  @media screen and (min-width: 768px) {
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
  text-align: center;
  margin-right: auto;
  color: ${theme.colors.titleColor};
  // @media screen and (min-width: 768px) {
  //   display: block;
  //    max-width: 228px;
  // }
`;

export const ResumeButton = styled.button`
  min-width: 130px;
  min-height: 40px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${theme.colors.backColor};
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 32px;
  background-color: ${theme.colors.darkButtonColor};
  box-shadow: 0px 2px 4px ${theme.colors.darkShadowColor};
  border: 1px solid ${theme.colors.darkShadowColor};
  &:hover,
  &:focus {
    border: 1px solid ${theme.colors.buttonsBorder};
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;
export const List = styled.ul`
  @media screen and (min-width: 768px) {
    width: 704px;
    display: flex;
    vertical-align: baseline;
    padding: 14px 0px 14px 20px;
    justify-content: space-between;
  }

  list-style: none;
  @media screen and (min-width: 1280px) {
    width: 1248px;
  }
`;
export const ListItem = styled.li`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  color: ${theme.colors.focusColor};
  display: flex;

  :not(:last-child) {
    margin-bottom: 14px;
  }

  @media screen and (min-width: 768px) {
    min-width: 100px;
    align-content: center;
    :not(:last-child) {
      margin-bottom: 0px;
    }
  }
`;
export const Wrapper = styled.div`
  // position: relative;
  // padding-bottom: 32px;
`;
export const AddBookButton = styled.button`
  position: absolute;
  margin-top: 50px;
  top: 96%;
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
  color: ${theme.colors.backColor};
  display: block;
  margin-right: auto;
  margin-left: auto;
  background-color: ${theme.colors.focusColor};
  box-shadow: 0px 2px 4px ${theme.colors.darkShadowColor};
  border-radius: 50%;
  border: none;
  &:hover,
  &:focus {
    border: 1px solid ${theme.colors.buttonsBorder};
  }
`;
export const TitleBox = styled.div`
  display: flex;
  width: 704px;

  @media screen and (min-width: 1280px) {
    width: 1248px;
  }
`;
