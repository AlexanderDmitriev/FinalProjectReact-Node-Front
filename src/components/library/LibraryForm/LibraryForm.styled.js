import styled from 'styled-components';
import { theme } from '../../../helpers/theme';
// import backArrow from '../../../images/back.png';

export const Wrapper = styled.div`
  position: absolute;

  @media screen and (min-width: 768px) {
    position: static;
  }
`;

export const AddButton = styled.button`
  min-width: 171px;
  //   font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 2.71;
  text-align: center;
  /* color: #242a37; */
  color: ${theme.colors.titleColor};
  border: 1px solid #000000;
  &:hover,
  &:focus {
    border: 1px solid #f25137;
  }
`;
