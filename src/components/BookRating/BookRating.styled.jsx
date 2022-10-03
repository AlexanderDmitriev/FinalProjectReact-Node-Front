import styled from 'styled-components';
import { theme } from '../../helpers/theme';

export const Container = styled.div`
  box-sizing: border-box;
  width: 280px;
  height: auto;
  background: ${theme.colors.backColor};
  box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media screen and (max-width: 767px) {
    position: absolute;
    left: 50%;
    transform: translateX(-52.4%);
  }

  @media screen and (min-width: 768px) {
    width: 608px;
  } ;
`;

export const RatingCaption = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.titleColor};
  margin-bottom: 20px;
`;

export const StarsContainer = styled.div`
  width: 101px;
  height: 17px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Form = styled.form``;
export const FormCaption = styled.label`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.titleColor};
`;

export const FormText = styled.textarea`
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  align-items: center;
  min-height: 170px;
  width: 240px;
  border: 1px solid #a6abb9;
  padding: 8px;
  margin-top: 12px;
  margin-bottom: 20px;
  outline: none;
  resize: none;

  @media screen and (min-width: 768px) {
    width: 568px;
  } ;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: -8px;

  @media screen and (min-width: 768px) {
    padding: -14px;
  } ;
`;

export const Btn = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  width: 97px;
  height: 40px;
  border: 1px solid ${theme.colors.titleColor};
  margin: 8px;

  &:focus,
  :hover {
    color: ${theme.colors.backColor};
    border: none;
    background: ${theme.colors.focusColor};
    box-shadow: 0px 2px 4px ${theme.colors.darkShadowColor};
  }

  @media screen and (min-width: 768px) {
    width: 130px;
    height: 40px;
    margin: 14px;
  } ;
`;

export const StarsField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
