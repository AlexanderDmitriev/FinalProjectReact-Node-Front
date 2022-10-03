import styled from 'styled-components';
import { theme } from '../../helpers/theme';

export const Section = styled.section`
  /* max-width: 320px; */
  padding: 32px 20px 40px 20px;

  @media screen and (min-width: 768px) {
    /* max-width: 768px; */
    padding: 64px 145px 88px 145px;
  }

  @media screen and (min-width: 1280px) {
    /* max-width: 1280px; */
    padding: 179px 154px 239px 127px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 32px;
  font-family: 'Abril Fatface';
  font-weight: 400;
  font-size: 34px;
  line-height: 1.12;
  color: ${theme.colors.titleColor};
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
  }
`;

export const List = styled.ul`
  list-style: none;
`;

export const Subtitle = styled.h2`
  margin-bottom: 14px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.9;
  color: ${theme.colors.titleColor};
`;

export const MainListItem = styled.li`
  :first-child {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 768px) {
    :first-child {
      margin-bottom: 32px;
    }
  }
`;

export const ListItem = styled.li`
  display: flex;

  :not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  color: ${theme.colors.bookDescriptionColor};
`;

export const IconWrapper = styled.div`
  margin-right: 12px;
  padding-top: 4px;
  width: 4px;
  height: 8px;
`;

export const Icon = styled.svg`
  vertical-align: top;
  color: ${theme.colors.focusColor};
`;

export const ButtonList = styled.ul`
  margin-top: 61px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style: none;
  column-gap: 20px;
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

export const LoginButton = styled.button`
  min-width: 130px;
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: 2.71;
  text-align: center;
  color: ${theme.colors.titleColor};
  border: 1px solid #000000;
  &:hover,
  &:focus {
    border: 1px solid ${theme.colors.buttonsBorder};
  }
`;

export const RegisterButton = styled.button`
  min-width: 130px;
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: 2.71;
  text-align: center;
  color: ${theme.colors.backColor};
  background: #ff6b08;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #ff6b08;
  &:hover,
  &:focus {
    background: #d15807;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #d15807;
  }
`;
