import styled from 'styled-components';
// import { theme } from '../../../helpers/theme';
import backArrow from '../../../images/back.png';

export const BackArrow = styled.button`
  background-image: url(${backArrow});
  height: 12px;
  width: 24px;
  top: 96px;
  left: 44px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
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

  //   transform: rotate(180deg);
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
`;
