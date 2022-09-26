import styled from 'styled-components';
import { theme } from './theme';

const Container = styled.div`
  box-sizing: content-box;
  margin: 0 auto;
  padding-top: ${theme.spacing(5)};
  width: 320px;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export default Container;
