import styled from 'styled-components';
import { theme } from '../../helpers/theme';

export const BackArrow = styled.svg`
  background-color: #f6f7fb;
  margin-top: 24px;
  margin-bottom: 32px;
  margin-left: 20px;
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
export const TrainingButton = styled.button`
  min-width: 171px;

  font-weight: 500;
  font-size: 14px;
  line-height: 2.71;
  text-align: center;
  border: none;

  color: ${theme.colors.backColor};

  background-color: ${theme.colors.focusColor};

  margin: 0 auto;
  margin-top: 40px;
  display: block;
  d &:hover,
  &:focus {
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    margin-top: 48px;
    width: 200px;
    height: 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 200px;
    height: 40px;

    margin-top: 0px;
    margin-bottom: 20px;
    margin-left: 48px;
  }
`;
export const Box = styled.div`
  width: 320px;
  height: 648px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f6f7fb;
  // margin-top: 60px;
  @media screen and (min-width: 768px) {
    width: 768px;
    height: 1025px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    height: 850px;
  }
`;
export const BoxText = styled.div`
  width: 608px;
  height: 272px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #ffffff;

  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    width: 608px;
    height: 272px;
    margin: 0 auto;
    display: block;
    margin-top: 40px;
  }
  @media screen and (min-width: 1280px) {
    width: 608px;
    height: 272px;
    margin: 0 auto;
    display: block;
    margin-top: 40px;
  }
`;
