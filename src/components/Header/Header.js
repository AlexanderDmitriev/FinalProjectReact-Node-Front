import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import home from '../../images/iconhome.svg';
import library from '../../images/Group.svg';
import authSelectors from '../../redux/authAPI/auth-selectors';
import authOperations from '../../redux/authAPI/auth-operation';
import {
  HeaderSection,
  NavigationLink,
  NavigationLinkLogin,
  Block,
  Navigation,
  ActiveLink,
  Line,
  Logo,
  MobileLogo,
  ExitButton,
  BlockUser,
  UserName,
  ModalBox,
  Box,
  ModalText,
  ModalButtons,
  ModalButton,
} from './HeaderPage.styled';

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const user = useSelector(authSelectors.getUsername);
  const userLogo = user ? user.slice(0, 1).toUpperCase() : '';
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleExit = () => {
    dispatch(authOperations.logOut());
    setOpen(false);
    navigate('/login', { replace: true });
  };

  return (
    <>
      <HeaderSection>
        {isLoggedIn ? (
          <NavigationLink to="/login">BR</NavigationLink>
        ) : (
          <NavigationLinkLogin to="/login">BR</NavigationLinkLogin>
        )}

        {isLoggedIn && (
          <Block>
            <BlockUser>
              <Logo>{userLogo}</Logo>
              <UserName>{user}</UserName>
            </BlockUser>

            <Navigation>
              <ActiveLink to="/library">
                <img src={library} alt="library" />
              </ActiveLink>
              <ActiveLink to="/training">
                <img src={home} alt="home" />
              </ActiveLink>
            </Navigation>
            <Line />
            <MobileLogo>{userLogo}</MobileLogo>
            <ExitButton type="submit" onClick={handleOpen}>
              Вихід
            </ExitButton>
          </Block>
        )}
      </HeaderSection>
      {open && (
        <ModalBox isModalOpen={open} handleCloseModal={handleClose}>
          <Box>
            <ModalText>
              Якщо Ви вийдете з програми незбережені дані будуть втрачені
            </ModalText>
            <ModalButtons>
              <ModalButton type="button" onClick={handleClose}>
                Відміна
              </ModalButton>
              <ModalButton type="button" onClick={handleExit}>
                Вийти
              </ModalButton>
            </ModalButtons>
          </Box>
        </ModalBox>
      )}
    </>
  );
};

export default Header;
