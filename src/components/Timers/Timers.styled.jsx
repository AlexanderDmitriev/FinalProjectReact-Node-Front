import styled from 'styled-components';
import { theme } from '../../helpers/theme';

export const Container = styled.div`
  margin: 20px;
  background: ${theme.colors.inputColor};

  @media screen and (min-width: 768px) {
    margin: 40px 78px 36px 78px;
  }

  @media screen and (min-width: 1280px) {
    margin: 28px auto 44px auto;
  }
`;

export const TimerList = styled.ul`
  display: block;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const TimerItem = styled.li`
  :not(:last-child) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    :not(:last-child) {
      margin-right: 32px;
      margin-bottom: 0px;
    }
  }

  @media screen and (min-width: 1280px) {
    :not(:last-child) {
      margin-right: 74px;
    }
  }
`;

export const TimerTitle = styled.div`
  text-align: center;
  color: ${theme.colors.bookDescriptionColor};
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 9px;
`;
export const TimerTableContainer = styled.div`
  background: ${theme.colors.backColor};
  width: 280px;
  height: 60px;
  box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);

  @media screen and (min-width: 768px) {
    width: 290px;
  }
`;
export const TimeList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TimeWrap = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;

  :not(:first-child) {
    ::before {
      content: ':';
      position: absolute;
      right: 45px;
      top: -3px;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 25px;
      line-height: 38px;
      color: rgba(9, 30, 63, 1);
    }
  }
`;
export const TimerText = styled.span`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: ${theme.colors.bookDescriptionColor};
`;
export const TimerNumber = styled.span`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 25px;
  line-height: 38px;
  color: rgba(9, 30, 63, 1);
`;
