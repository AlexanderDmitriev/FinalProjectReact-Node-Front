import styled from 'styled-components';
import { theme } from '../../helpers/theme';

export const Section = styled.section`
  width: 280px;
  padding: 20px;
  background-color: ${theme.colors.backColor};
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  text-align: center;
  color: ${theme.colors.titleColor};
  margin: 0 auto;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 704px;
    padding: 28px 96px 32px;
  }

  @media screen and (min-width: 1279px) {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 12px;
  line-height: 1.25;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 14px;
    line-height: 1.21;
    margin-bottom: 27px;
  }
`;

export const Form = styled.form`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    align-items: flex-end;
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  margin-bottom: 28px;
  text-align: left;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 0;
    margin-right: 32px;
  }
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 11px;
  line-height: 1.18;
  color: ${theme.colors.bookDescriptionColor};

  :first-child {
    margin-right: 10px;
  }
`;

export const Input = styled.input`
  margin-top: 4px;
  width: 110px;
  height: 42px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;
  background-color: #f6f7fb;
  border: 1px solid #a6abb9;
  color: ${theme.colors.titleColor};
`;

export const Button = styled.button`
  padding: 10px 45px 10px 43px;
  min-width: 240px;
  background-color: ${theme.colors.focusColor};
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: ${theme.colors.backColor};
  border: 0;
  height: 42px;

  &:hover {
    background-color: #d15807;
  }
`;

export const TableWrapper = styled.div`
  margin-top: 24px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 240px;
    margin-top: 20px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 6px;
  }
`;

export const StatTitle = styled.h2`
  font-weight: 600;
  font-size: 12px;
  line-height: 1.25;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 14px;
    line-height: 1.21;
  }
`;

export const Image = styled.img`
  width: 90px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 128px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  list-style: none;
`;

export const DataList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

export const DataListItem = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
`;

export const DataListTime = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: #898f9f;
`;

export const DataListPages = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${theme.colors.bookDescriptionColor};
  text-transform: lowercase;
`;
