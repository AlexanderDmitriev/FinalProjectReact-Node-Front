import {
  Container,
  TimerTitle,
//   TimerTable,
  TimerList,
  TimerItem,
} from './Timers.styled';

import TimerTable from './TimerTable';

export default function Library() {
  return (
    <>
      <Container>
        <TimerList>
          <TimerItem>
            <TimerTitle>До закінчення року залишилось</TimerTitle>
            <TimerTable></TimerTable>
          </TimerItem>
          <TimerItem>
            <TimerTitle>До досягнення мети залишилось</TimerTitle>
            <TimerTable></TimerTable>
          </TimerItem>
        </TimerList>
      </Container>
    </>
  );
}
