import styled from 'styled-components';
import { theme } from '../../helpers/theme';
import plus from '../../images/plus.svg';

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
  margin-bottom: 60px;
  display: block;
  d &:hover,
  &:focus {
    cursor: pointer;
    background-color: #fd781f;
  }
  @media screen and (min-width: 768px) {
    margin-top: 48px;
    width: 200px;
    height: 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 200px;
    height: 40px;
  }
`;
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
  background-color: ${theme.colors.backColor};

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

export const AnchorButton = styled.a`
  position: fixed;
  margin-top: 50px;
  bottom: 12px;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 52px;
  min-width: 52px;
  min-height: 52px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  background-color: ${theme.colors.focusColor};
  box-shadow: 0px 2px 4px ${theme.colors.darkShadowColor};
  border-radius: 50%;
  border: none;
  fill: #fff;
  background-image: url(${plus});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 26px;

  @media screen and (min-width: 768px) {
    display: none;
  }
  &:hover,
  &:focus {
    border: 1px solid ${theme.colors.buttonsBorder};
  }
`;
