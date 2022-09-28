import { SpinnerCircular } from 'spinners-react';
import styled from 'styled-components';

export const Spinner = () => {
  <SpinnerContainer>
    <SpinnerCircular
      size={100}
      thickness={100}
      speed={100}
      color="#36ad47"
      secondaryColor="rgba(0, 0, 0, 0.44)"
    />
  </SpinnerContainer>;
};

const SpinnerContainer = styled.div`
  margin: 0 auto;
`;
