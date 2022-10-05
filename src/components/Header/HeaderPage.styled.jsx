import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  padding-bottom: 13px;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  padding-left: 22px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const NavigationLinkLogin = styled(NavLink)`
  font-family: 'Abril Fatface', cursive;
  text-align: center;
  color: #242a37;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.35;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;
export const NavigationLink = styled(NavLink)`
  font-family: 'Abril Fatface', cursive;
  text-align: center;
  color: #242a37;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.35;
  text-decoration: none;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
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

export const Logo = styled.div`
  background-color: #f5f7fa;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  margin-right: 14px;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #242a37;
`;

export const UserName = styled.p`
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

// export const ActiveLink = styled(NavLink)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 33px;
//   height: 33px;
//   margin-right: 5px;
//   background-color: #f5f7fa;
//   border-radius: 50%;
//   background-color: transparent;
// `;

// export const PassiveLink = styled(NavLink)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 33px;
//   height: 33px;
//   margin-right: 5px;
//   background-color: #f5f7fa;
//   border-radius: 50%;
// `;

export const Line = styled.div`
  display: block;
  width: 1px;
  height: 33px;
  background-color: #e0e5eb;
`;

// export const ModalBox = styled.div`
//   padding-bottom: 48px;
//   padding-top: 48px;
//   padding-left: 22px;
//   padding-right: 22px;
//   width: 280px;
//   height: 222px;

//   background: #ffffff;
//   box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);
// `;

export const ModalText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.38;
  text-align: center;
  margin: 0 0 20px 0;
  color: #242a37;
`;

export const MobileLogo = styled.div`
  background-color: #f5f7fa;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  margin-right: 14px;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #242a37;

  margin-right: 14px;
  margin-left: 14px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ExitButton = styled.button`
  border: none;
  border-bottom: 1px solid #242a37;
  background-color: transparent;
  padding: 0;
  color: #242a37;

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.21;

  @media screen and (min-width: 768px) {
    margin-left: 8px;
  }
`;
