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
} from './FirstPage.styled';
import { NavLink } from 'react-router-dom';

export default function FirstPage() {
  return (
    <Section>
      <Title>Books Reading</Title>
      <List>
        <MainListItem>
          <Subtitle>Will help you to</Subtitle>
          <List>
            <ListItem>Create your goal faster and proceed to read</ListItem>
            <ListItem>Divide process proportionally for each day</ListItem>
            <ListItem>Track your success</ListItem>
          </List>
        </MainListItem>
        <MainListItem>
          <Subtitle>You may also</Subtitle>
          <List>
            <ListItem>Pose your own independent point of view</ListItem>
            <ListItem>
              Improve your professional skills according to new knowledge
            </ListItem>
            <ListItem>Become an interesting interlocutor</ListItem>
          </List>
        </MainListItem>
      </List>
      <ButtonList>
        <li>
          <NavLink to="/login" exact="true">
            <LoginButton>Log in</LoginButton>
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" exact="true">
            <RegisterButton>Register</RegisterButton>
          </NavLink>
        </li>
      </ButtonList>
    </Section>
  );
}
