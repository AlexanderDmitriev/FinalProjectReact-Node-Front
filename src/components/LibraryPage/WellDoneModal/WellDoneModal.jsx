import { useState } from 'react';
import {
  Wrapper,
  Section,
  TextBox,
  Text,
  ButtonBox,
  Button,
  BackButton,
  Icon,
} from './WellDoneModal.styled';
import { NavLink } from 'react-router-dom';
import sprite from '../../../images/icons.svg';

export default function WellDoneModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const onClose = e => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      {isModalOpen && (
        <Section>
          <Icon width="50" height="45">
            <use href={sprite + '#icon-vector'}></use>
          </Icon>
          <TextBox>
            <Text>
              Ти молодчина, але потрібно швидше! Наступного разу тобі все
              вдасться
            </Text>
          </TextBox>
          <ButtonBox>
            <NavLink to="/training">
              <Button type="button">Нове тренування</Button>
            </NavLink>
            <BackButton type="button" onClick={onClose}>
              Назад
            </BackButton>
          </ButtonBox>
        </Section>
      )}
    </Wrapper>
  );
}
