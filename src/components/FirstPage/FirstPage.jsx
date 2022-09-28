import {
  Section,
  Title,
  List,
  Subtitle,
  ListItem,
  ButtonList,
  LoginButton,
  RegisterButton,
  MainListItem,
  Icon,
  Text,
  IconWrapper,
} from './FirstPage.styled';
import { NavLink } from 'react-router-dom';
import sprite from '../../images/icons.svg';

export default function FirstPage() {
  return (
    <Section>
      <Title>Books Reading</Title>
      <List>
        <MainListItem>
          <Subtitle>Допоможе вам</Subtitle>
          <List>
            <ListItem>
              <IconWrapper>
                <Icon width="4" height="8">
                  <use href={sprite + '#icon-firstpagevector'}></use>
                </Icon>
              </IconWrapper>
              <Text>Швидше сформулювати свою ціль і розпочати читати</Text>
            </ListItem>
            <ListItem>
              <IconWrapper>
                <Icon width="4" height="8">
                  <use href={sprite + '#icon-firstpagevector'}></use>
                </Icon>
              </IconWrapper>
              <Text>Пропорційно розподілити навантаження на кожний день</Text>
            </ListItem>
            <ListItem>
              <IconWrapper>
                <Icon width="4" height="8">
                  <use href={sprite + '#icon-firstpagevector'}></use>
                </Icon>
              </IconWrapper>
              <Text>Відстежувати особистий успіх</Text>
            </ListItem>
          </List>
        </MainListItem>
        <MainListItem>
          <Subtitle>Також ви зможете</Subtitle>
          <List>
            <ListItem>
              <IconWrapper>
                <Icon width="4" height="8">
                  <use href={sprite + '#icon-firstpagevector'}></use>
                </Icon>
              </IconWrapper>
              <Text>Формувати особисту думку незалежну від інших</Text>
            </ListItem>
            <ListItem>
              <IconWrapper>
                <Icon width="4" height="8">
                  <use href={sprite + '#icon-firstpagevector'}></use>
                </Icon>
              </IconWrapper>
              <Text>
                Підвищити свої професійні якості опираючись на нові знання
              </Text>
            </ListItem>
            <ListItem>
              <IconWrapper>
                <Icon width="4" height="8">
                  <use href={sprite + '#icon-firstpagevector'}></use>
                </Icon>
              </IconWrapper>
              <Text>Стати цікавим співрозмовником</Text>
            </ListItem>
          </List>
        </MainListItem>
      </List>
      <ButtonList>
        <li>
          <NavLink to="/login" exact="true">
            <LoginButton>Увійти</LoginButton>
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" exact="true">
            <RegisterButton>Реєстрація</RegisterButton>
          </NavLink>
        </li>
      </ButtonList>
    </Section>
  );
}
