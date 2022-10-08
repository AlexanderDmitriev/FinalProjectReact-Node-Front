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
import { useNavigate } from 'react-router-dom';
import sprite from '../../../images/icons.svg';

export default function WellDoneModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const navigate = useNavigate();
  const onRedirect = () => {
    // onClose();
    navigate('/training');
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log('ggg');
  //     setIsModalOpen(true);
  //   }, 10000);
  //   return () => clearTimeout(timer);
  // }, []);

  const onClose = e => {
    // e.preventDefault();
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
            <Button type="submit" onClick={onClose}>
              Нове тренування
            </Button>

            <BackButton type="submit" onClick={onClose}>
              Назад
            </BackButton>
          </ButtonBox>
        </Section>
      )}
    </Wrapper>
  );
}
