import { useState } from 'react';
import {
  Wrapper,
  Section,
  List,
  Title,
  Subtitle,
  Text,
  Button,
  ListItem,
  SubtitleBox,
  Icon,
  TextBox,
  TextIcon,
  TextIconWrapper,
} from './LibraryModal.styled';
import sprite from '../../../images/icons.svg';

export default function LibraryModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const onClose = e => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      {isModalOpen && (
        <Section>
          <List>
            <ListItem>
              <Title>Крок 1.</Title>
              <SubtitleBox>
                <Icon width="22" height="17">
                  <use href={sprite + '#icon-libraryicon'}></use>
                </Icon>
                <Subtitle>Створіть особисту бібліотеку</Subtitle>
              </SubtitleBox>
              <TextBox>
                <TextIconWrapper>
                  <TextIcon width="10" height="12">
                    <use href={sprite + '#icon-arrow'}></use>
                  </TextIcon>
                </TextIconWrapper>
                <Text>Додайте до неї книжки, які маєте намір прочитати.</Text>
              </TextBox>
            </ListItem>
            <ListItem>
              <Title>Крок 2.</Title>

              <SubtitleBox>
                <Icon width="15" height="17">
                  <use href={sprite + '#icon-flag'}></use>
                </Icon>
                <Subtitle>Сформуйте своє перше тренування</Subtitle>
              </SubtitleBox>
              <TextBox>
                <TextIconWrapper>
                  <TextIcon width="10" height="12">
                    <use href={sprite + '#icon-arrow'}></use>
                  </TextIcon>
                </TextIconWrapper>
                <Text>
                  Визначте ціль, оберіть період, розпочинайте тренування.
                </Text>
              </TextBox>
            </ListItem>
          </List>
          <Button type="button" onClick={onClose}>
            Ok
          </Button>
        </Section>
      )}
    </Wrapper>
  );
}
