import styled from 'styled-components';
import { theme } from '../../../helpers/theme';
import { Field } from 'formik';

export const Box = styled.div`
  width: 320px;
  height: 648px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f6f7fb;

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 1025px;
    justify-content: center;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    height: 850px;
`;

export const FormInput = styled.div`
  @media screen and (min-width: 1280px) {
    width: 1141px;
    height: 67px;
    margin-top: 60px;

    display: flex;

    align-items: end;
  }
`;

export const Input = styled.div`
  margin-bottom: 20px;

  // margin-left: auto;
  // margin-right: auto;

  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
    height: 158px;

    // flex-direction: row;
    flex-flow: row wrap;
  }

  @media screen and (min-width: 1280px) {
    width: 1000px;
    height: 67px;
    margin-right: auto;
    margin-left: 16px;
    align-items: center;
    justify-content: space-between;
  }
`;

export const InputItem = styled.div`
  width: 280px;
  // margin-top: 24px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 152px;
    // height: 67px;
    margin-left: 0px;
    margin-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 136px;
    margin-right: 0px;
    margin-left: 0px;
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
    // height: 67px;
  }
  @media screen and (min-width: 1280px) {
    width: 346px;
    margin-left: 0px;
    margin-right: 0px;
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
    // height: 67px;
    margin-left: 0px;
    margin-right: 0px;
  }
`;

export const Label = styled.label`
  width: 152px;
  left: 17px;
  top: 128px;
  margin-bottom: 8px;
  // margin-left: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #898f9f;
  // @media screen and (min-width: 768px) {
  //   width: 152px;
  // }
`;

export const FieldInput = styled(Field)`
  width: auto;
  height: 42px;
  left: 20px;
  top: 185px;
  padding-left: 8px;
  // margin: 0 auto;

  // display: block;

  // @media screen and (min-width: 768px) {
  //   width: 320px;
  //   left: 115px;
  //   top: 378px;
  //   padding-left: 12px;
  // }
  background-color: #f6f7fb;
  box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
  border: 1px solid #a6abb9;
  &:focus {
    background-color: #ffffff;
  }
`;

export const AddButton = styled.button`
  min-width: 171px;

  font-weight: 500;
  font-size: 14px;
  line-height: 2.71;
  text-align: center;
  /* color: #242a37; */
  color: ${theme.colors.titleColor};
  border: 1px solid #000000;

  margin: 0 auto;
  margin-top: 40px;
  display: block;
  d &:hover,
  &:focus {
    border: 1px solid #f25137;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    margin-top: 48px;
  }

  @media screen and (min-width: 1280px) {
    width: 181px;
    height: 42px;

    margin-top: 0px;
    margin-bottom: 20px;
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
  // @media screen and (min-width: 768px) {
  //   margin-bottom: 48px;
  // }
`;
