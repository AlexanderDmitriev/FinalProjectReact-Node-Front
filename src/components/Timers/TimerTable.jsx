import { TimerTableContainer, TimeList, TimeWrap, TimerText, TimerNumber } from './Timers.styled';

export default function Timertable({days, hours, minutes, seconds}) {
  return (
    <TimerTableContainer>
      <TimeList>
        <TimeWrap>
          <TimerNumber>{days}</TimerNumber>
          <TimerText>ДН</TimerText>
        </TimeWrap>
        <TimeWrap>
          <TimerNumber>{hours}</TimerNumber>
          <TimerText>ГОД</TimerText>
        </TimeWrap>
        <TimeWrap>
          <TimerNumber>{minutes}</TimerNumber>
          <TimerText>ХВ</TimerText>
        </TimeWrap>
        <TimeWrap>
          <TimerNumber>{seconds}</TimerNumber>
          <TimerText>СЕК</TimerText>
        </TimeWrap>
      </TimeList>
    </TimerTableContainer>
  );
}
