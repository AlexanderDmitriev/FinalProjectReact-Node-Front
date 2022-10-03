import styled from 'styled-components';
import { theme } from '../../../helpers/theme';

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  top: 157px;

  @media screen and (min-width: 768px) {
    position: static;
    margin-top: 40px;
  }
`;

export const Section = styled.section`
  width: 280px;
  padding: 43px 20px 36px 20px;
  text-align: center;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  background-color: ${theme.colors.backColor};

  @media screen and (min-width: 768px) {
    width: 608px;
    padding: 40px;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-bottom: 40px;
  text-align: start;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const ListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 768px) {
    :not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: ${theme.colors.titleColor};
  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 19px;
    line-height: 1.21;
  }
`;

export const SubtitleBox = styled.div`
  display: flex;
`;

export const Icon = styled.svg`
  fill: #a6abb9;
  margin-right: 12px;
`;

export const Subtitle = styled.h3`
  width: 180px;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.21;
  color: ${theme.colors.titleColor};
  @media screen and (min-width: 768px) {
    min-width: 350px;
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const TextBox = styled.div`
  margin-left: 34px;
  display: flex;
`;

export const TextIconWrapper = styled.div`
  margin-right: 8px;
  width: 10px;
  height: 12px;
`;

export const TextIcon = styled.svg`
  vertical-align: top;
  fill: #ff6b08;
`;

export const Text = styled.p`
  width: 190px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;
  color: ${theme.colors.bookDescriptionColor};
  @media screen and (min-width: 768px) {
    min-width: 450px;
  }
`;

export const Button = styled.button`
  width: 127px;
  padding: 11px 52px 12px 54px;
  margin: 0 auto;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  text-align: center;
  color: ${theme.colors.backColor};
  background-color: #ff6b08;
  border: 1px solid #ff6b08;
  box-shadow: 0px 2px 4px ${theme.colors.darkShadowColor};;
  &:hover,
  &:focus {
    background-color: #d15807;
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;
