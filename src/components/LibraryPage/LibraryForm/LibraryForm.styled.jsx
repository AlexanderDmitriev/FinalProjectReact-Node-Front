import styled from 'styled-components';
import { theme } from '../../../helpers/theme';
import { Field } from 'formik';

export const Wrapper = styled.div`
  position: relative;
`;

export const Box = styled.div`
  width: 320px;
  height: 648px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${theme.colors.inputColor};

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 1025px;
    justify-content: center;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    height: 850px;
  }
`;

export const FormInput = styled.div`
  @media screen and (min-width: 1280px) {
    width: 1141px;
    height: 67px;
    margin-top: 40px;
    margin-bottom: 80px;
    display: flex;
    align-item: end;
    // align-content: start;
  }
`;

export const Input = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
    height: 158px;
    flex-flow: row wrap;
  }

  @media screen and (min-width: 1280px) {
    width: 1000px;
    height: 67px;
    margin-top: 0px;
    margin-right: auto;
    margin-left: 16px;
    align-content: start;
    justify-content: space-between;
  }
`;

export const InputItem = styled.div`
  width: 280px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 152px;
    margin-left: 0px;
    margin-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 136px;
    margin-right: 0px;
    margin-left: 0px;
    margin-bottom: 0px;
  }
`;
export const InputItemTitle = styled.div`
  width: 280px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1280px) {
    width: 346px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
  }
`;
export const InputItemAuthor = styled.div`
  width: 280px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 250px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
  }
`;

export const Label = styled.label`
  width: 152px;
  left: 17px;
  top: 128px;
  margin-bottom: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${theme.colors.bookDescriptionColor};
`;

export const FieldInput = styled(Field)`
  width: auto;
  height: 42px;
  left: 20px;
  top: 185px;
  padding-left: 8px;
  background-color: ${theme.colors.inputColor};
  box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
  border: 1px solid #a6abb9;
  &:focus {
    background-color: ${theme.colors.backColor};
  }
`;

export const AddButton = styled.button`
  min-width: 171px;
  font-weight: 500;
  font-size: 14px;
  line-height: 2.71;
  text-align: center;
  color: ${theme.colors.titleColor};
  border: 1px solid #000000;

  margin: 0 auto;
  margin-top: 40px;
  display: block;
  d &:hover,
  &:focus {
    border: 1px solid ${theme.colors.buttonsBorder};
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    margin-top: 48px;
  }

  @media screen and (min-width: 1280px) {
    width: 181px;
    height: 42px;

    margin-top: 28px;
    // margin-bottom: 20px;
    margin-left: 48px;
  }
`;

export const Error = styled.p`
  font-family: 'Abril Fatface';
  font-weight: 400;
  font-size: 14px;
  line-height: 1.12;
  color: red;
  // color: ${theme.colors.titleColor};
  text-align: center;
`;
