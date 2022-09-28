import {
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
} from './LibraryModal.styled';
import sprite from '../../../images/icons.svg';

export default function LibraryModal() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
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
              <TextIcon width="20" height="12">
                <use href={sprite + '#icon-arrow'}></use>
              </TextIcon>
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
              <TextIcon width="20" height="12">
                <use href={sprite + '#icon-arrow'}></use>
              </TextIcon>
              <Text>
                Визначте ціль, оберіть період, розпочинайте тренування.
              </Text>
            </TextBox>
          </ListItem>
        </List>
        <Button>Ok</Button>
      </Section>
    </div>
  );
}
