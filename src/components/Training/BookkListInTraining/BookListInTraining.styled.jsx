import styled from 'styled-components';
import { theme } from '../../../helpers/theme';
import boxchecked from '../../../images/boxchecked.svg';
import checkbox from '../../../images/checkbox.svg';

export const Section = styled.div`
  /* max-width: 320px; */
  margin: 20px;
  padding-top: 20px;
  background-color: #f6f7fb;

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

export const TitleWrapper = styled.span`
  margin-left: 34px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Btn = styled.button`
  cursor: pointer;
  border: none;
  position: absolute;
  top: 0;
  right: 0;

  @media screen and (min-width: 768px) {
    top: 12px;
  }
  @media screen and (min-width: 1280px) {
    top: 12px;}
`;

export const BookCard = styled.div`
  background-color: #f6f7fb;
  margin-bottom: 20px;
  position: relative;
`;

export const BoxChecked = styled.i`
  min-width: 22px;
  height: 18px;
  background-image: url(${boxchecked});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-right: 12px;

  @media screen and (min-width: 768px) {
    margin-right: 18px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 16px;
  }
`;

export const CheckBox = styled.i`
  min-width: 22px;
  height: 18px;
  background-image: url(${checkbox});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-right: 12px;

  @media screen and (min-width: 768px) {
    margin-right: 18px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 16px;
  }
`;

export const BookName = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: ${theme.colors.titleColor};

  @media screen and (min-width: 768px) {
    margin-right: 66px;
    width: 180px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 45px;
    width: 310px;
  }
`;

export const BookDescription = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: ${theme.colors.bookDescriptionColor};
`;

export const Value = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  margin-left: 20px;
  margin-right: auto;
  color: ${theme.colors.titleColor};

  @media screen and (min-width: 768px) {
    margin-left: 0;
    display: block;
    margin-right: 63px;
    width: 140px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 83px;
    width: 140px;
  }
`;
export const Year = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: ${theme.colors.titleColor};

  @media screen and (min-width: 768px) {
    margin-left: 0;
    display: block;
    margin-right: 87px;
    width: 38px;
  }
`;

export const Pages = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: ${theme.colors.titleColor};

  @media screen and (min-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    display: block;
  }
`;

export const List = styled.ul`
  list-style: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    padding-top: 12px;
  }
`;

export const ListItem = styled.li`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  color: #242a37;
  color: ${theme.colors.focusColor};
  display: flex;

  :not(:last-child) {
    margin-bottom: 14px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  padding-bottom: 32px;
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
  background: #ff6b08;
  color: #ffffff;
  border: none;
  cursor: pointer;
  margin-left: 54px;
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    margin-left: 264px;
    margin-top: 40px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 380px;
  }
`;
export const HeaderWrapper = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #898f9f;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const HeaderTitle = styled.span`
  margin-right: 194px;
  @media screen and (min-width: 1280px) {
    margin-right: 300px;
  }
`;
export const HeaderAuthor = styled.span`
  margin-right: 160px;
  @media screen and (min-width: 1280px) {
    margin-right: 181px;
  }
`;
export const HeaderYear = styled.span`
  margin-right: 102px;
`;
