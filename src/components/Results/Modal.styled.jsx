import styled from 'styled-components';
import { theme } from '../../helpers/theme';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    position: static;
  }
`;

export const SectionM = styled.div`
  width: 280px;
  height: 358px;
  text-align: center;
  // juctify-content: center;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  background-color: ${theme.colors.backColor};
  @media screen and (min-width: 768px) {
    width: 394px;
    height: 286px;
  }
`;

export const Icon = styled.svg`
  margin-top: 44px;
  fill: #a6abb9;
  padding-left: 10px;
  // juctify-content: center;

  // margin-right: 12px;
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
  color: ${theme.colors.titleColor};
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  @media screen and (min-width: 768px) {
    // width: 394px;
    // height: 286px;
    flex-direction: row;
  }
`;

export const ButtonM = styled.button`
  width: 152px;
  height: 40px;
  margin: 0 auto;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  text-align: center;
  margin-bottom: 20px;
  color: ${theme.colors.titleColor};
  background-color: transparent;
  border: 1px solid #000000;
  box-shadow: 0px 2px 4px ${theme.colors.darkShadowColor};
  &:hover,
  &:focus {
    background-color: #ff6b08;
    border: none;
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
  color: ${theme.colors.titleColor};
  background-color: transparent;
  border: 1px solid #000000;
  box-shadow: 0px 2px 4px ${theme.colors.darkShadowColor};
  margin: 0 auto;
  display: block;
  // d &:hover,
  &:hover,
  &:focus {
    background-color: #ff6b08;
    border: none;
  }
`;
