import styled from 'styled-components';
// import { theme } from '../../../helpers/theme';
import backArrow from '../../../images/back.png';

const BackArrow = styled.button`
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
  border: none;

  //   transform: rotate(180deg);
`;

export default BackArrow;