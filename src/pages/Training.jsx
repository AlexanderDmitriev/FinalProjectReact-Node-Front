import React from 'react';
import Container from 'helpers/Container';
import AddTraining from 'components/Training/AddTraining/AddTraining';

import Results from 'components/Results/Results';

export default function Training() {
  return (
    <Container>
      <AddTraining />
      <Results />
    </Container>
  );
}
