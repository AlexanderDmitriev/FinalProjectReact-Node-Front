import styled from 'styled-components';
import { theme } from '../../../helpers/theme';

export const Section = styled.div`
  background: #F6F7FB;
  @media screen and (min-width: 1280px) {
    width: 928px;
  }
`;

export const TrainingSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 20px 0 20px;
  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const TrainingTitle = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: ${theme.colors.backColor};
  background: ${theme.colors.tableColor};
  width: 100%;
  cursor: pointer;
  border: none;

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    width: 928px;
  } ;
`;

export const Input = styled.input`
  position: relative;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin-top: 20px;
  padding: 12px;

  @media screen and (min-width: 768px) {
    width: 250px;
    margin-right: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 44px;
  } ;
`;

export const Select = styled.select`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin-top: 20px;
  padding: 12px;
  height: 42px;
  border: none;

  @media screen and (min-width: 768px) {
    width: 483px;
  }

  @media screen and (min-width: 1280px) {
    width: 715px;
  } ;
`;

export const Option = styled.option`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin-top: 20px;
`;

export const AddBtn = styled.button`
  box-sizing: border-box;
  width: 171px;
  height: 42px;
  margin-top: 32px;
  margin-right: auto;
  margin-left: auto;
  background: #f6f7fb;
  cursor: pointer;
  border: 1px solid ${theme.colors.titleColor};

  @media screen and (min-width: 768px) {
    margin-top: auto;
    margin-right: 0;
  } ;

  @media screen and (min-width: 1280px) {
    width: 181px;
    margin-left: 32px;
  } ;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    justify-content: center;
  } ;
  @media screen and (min-width: 1280px) {
    width: 928px;
  } ;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  } ;
  @media screen and (min-width: 1280px) {
    width: 928px;
  } ;
`;

export const Svg = styled.svg`
  width: 24px;
  height: 12px;
  fill: ${theme.colors.focusColor};
`;

export const SvgContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
    margin-top: 24px;
    margin-bottom: 32px;
  } ;
`;
