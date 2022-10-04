import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderSection = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  font-family: 'Abril Fatface', cursive;
  margin: 0;
  padding-top: 14px;
  padding-bottom: 13px;
  /* width: 320px; */
  margin-right: auto;
  margin-left: auto;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  padding-left: 22px;
  padding-right: 22px;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: flex-start; */
`;

export const BlockUser = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    width: 500px;
    justify-content: center;
  }
  @media screen and (min-width: 1280px) {
    width: 587px;
    justify-content: start;
  }
`;

export const NavigationLink = styled(NavLink)`
  text-align: center;
  color: #242a37;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.35;
  text-decoration: none;
`;

export const ActiveLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  margin-right: 5px;
  background-color: #f5f7fa;
  border-radius: 50%;
  background-color: transparent;
`;

export const PassiveLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  margin-right: 5px;
  background-color: #f5f7fa;
  border-radius: 50%;
`;

export const DesktopButton = styled.button`
  background-color: #f5f7fa;
  display: block;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  margin-right: 14px;
  margin-left: 14px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #242a37;
`;

export const MobileButton = styled.button`
  background-color: #f5f7fa;
  display: block;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  margin-right: 14px;
  margin-left: 14px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #242a37;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ExitButton = styled.button`
  border: none;
  border-bottom: 1px solid #242a37;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.21;
  color: #242a37;
  @media screen and (min-width: 768px) {
    margin-left: 8px;
  }
`;

export const UserName = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.21;
  color: #242a37;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

export const Line = styled.div`
  display: block;
  width: 1px;
  height: 33px;
  background-color: #e0e5eb;
`;

export const ModalText = styled.p`
  @media screen and (min-width: 1280px) {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.38;
    text-align: center;
    margin: 0 0 20px 0;
    color: #242a37;
  }
`;
