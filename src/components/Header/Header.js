import React /* , { useEffect, useState }  */ from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate /* , useLocation */ } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import s from './Header.module.css';
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
  Line,
  Logo,
  MobileLogo,
  ExitButton,
  BlockUser,
  UserName,
  // ModalBox,
  ModalText,
} from './HeaderPage.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 280,
  bgcolor: 'background.paper',
};

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const user = useSelector(authSelectors.getUsername);
  const userLogo = user ? user.slice(0, 1).toUpperCase() : '';
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
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
              <NavLink
                className={({ isActive }) =>
                  isActive ? s.link : s.active_link
                }
                to="/library"
              >
                <img src={library} alt="library" />
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? s.link : s.active_link
                }
                to="/training"
              >
                <img src={home} alt="home" />
              </NavLink>
            </Navigation>
            <Line />
            <MobileLogo>{userLogo}</MobileLogo>
            <ExitButton type="button" onClick={handleOpen}>
              Вихід
            </ExitButton>
          </Block>
        )}
      </HeaderSection>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <ModalBox > */}
        <Box sx={style} className={s.modal}>
          <ModalText>
            Якщо Ви вийдете з програми незбережені дані будуть втрачені
          </ModalText>
          <div className={s.btn_modal}>
            <button type="button" onClick={handleClose}>
              Відміна
            </button>
            <button type="button" onClick={handleExit}>
              Вийти
            </button>
          </div>
        </Box>
        {/* </ModalBox> */}
      </Modal>
    </>
  );
};

export default Header;
