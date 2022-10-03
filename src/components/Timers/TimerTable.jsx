import { TimerTableContainer, TimeList, TimeWrap, TimerText, TimerNumber } from './Timers.styled';

export default function Timertable() {
  return (
    <TimerTableContainer>
      <TimeList>
        <TimeWrap>
          <TimerNumber>150</TimerNumber>
          <TimerText>ДН</TimerText>
        </TimeWrap>
        <TimeWrap>
          <TimerNumber>15</TimerNumber>
          <TimerText>ГОД</TimerText>
        </TimeWrap>
        <TimeWrap>
          <TimerNumber>03</TimerNumber>
          <TimerText>ХВ</TimerText>
        </TimeWrap>
        <TimeWrap>
          <TimerNumber>02</TimerNumber>
          <TimerText>СЕК</TimerText>
        </TimeWrap>
      </TimeList>
    </TimerTableContainer>
  );
}
