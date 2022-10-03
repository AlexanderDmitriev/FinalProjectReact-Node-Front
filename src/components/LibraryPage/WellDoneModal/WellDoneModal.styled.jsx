import styled from 'styled-components';
import { theme } from '../../../helpers/theme';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    position: static;
  }
`;

export const Section = styled.div`
  width: 280px;
  height: 358px;

  text-align: center;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  background-color: #ffffff;

  @media screen and (min-width: 768px) {
    width: 394px;
    height: 286px;
  }
`;

export const Icon = styled.svg`
  margin-top: 44px;
  fill: #a6abb9;
  margin-right: 12px;
`;
export const TextBox = styled.div`
  width: 237px;
  height: 88px;

  text-align: center;
  margin: 0 auto;
  display: block;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    width: 296px;
    height: 66px;
  }
`;
export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;

  //   text-align: center;
  color: #242a37;
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: end;
  @media screen and (min-width: 768px) {
    // width: 394px;
    // height: 286px;
  }
`;

export const Button = styled.button`
  width: 152px;
  height: 40px;

  margin: 0 auto;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  text-align: center;
  margin-bottom: 20px;
  color: #ffffff;
  background-color: #ff6b08;
  border: 1px solid #ff6b08;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  &:hover,
  &:focus {
    background-color: #d15807;
  }
  @media screen and (min-width: 768px) {
  }
`;
export const BackButton = styled.button`
  width: 152px;
  height: 40px;

  font-weight: 500;
  font-size: 14px;
  line-height: 2.71;
  text-align: center;
  /* color: #242a37; */
  color: ${theme.colors.titleColor};
  border: 1px solid #000000;

  margin: 0 auto;

  display: block;
  d &:hover,
  &:focus {
    border: 1px solid #f25137;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    // width: 152px;
    // height: 40px;
  }

  @media screen and (min-width: 1280px) {
    // width: 181px;
    // height: 42px;
  }
`;