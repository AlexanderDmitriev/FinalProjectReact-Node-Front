import React from 'react';
import Container from 'helpers/Container';

import Results from 'components/Results/Results';
import AddTraining from 'components/Training/AddTraining/AddTraining';
import Chart from 'components/Chart/Chart';

export default function Training() {
  return (
    <Container>
      <AddTraining />
      <Chart />
      <Results />
    </Container>
  );
}
