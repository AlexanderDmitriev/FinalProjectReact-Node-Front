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
  NavigationLink,
  Block,
  Navigation,
  Line,
  DesktopButton,
  MobileButton,
  ExitButton,
  BlockUser,
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
    navigate('/', { replace: true });
  };

  return (
    <>
      <header className={isLoggedIn ? s.header : s.header_l}>
        <NavigationLink to="/">BR</NavigationLink>

        {isLoggedIn && (
          <Block>
            <BlockUser>
              <DesktopButton type="button">{userLogo}</DesktopButton>
              <p className={s.user_name}>{user}</p>
            </BlockUser>

            {/* {statistic && ( */}
            <Navigation>
              <NavLink
                className={({ isActive }) =>
                  isActive ? s.active_link : s.link
                }
                to="/library"
              >
                <img src={library} alt="library" />
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? s.active_link : s.link
                }
                to="/training"
              >
                <img src={home} alt="home" />
              </NavLink>
            </Navigation>
            <Line></Line>
            <MobileButton type="button">{userLogo}</MobileButton>
            <ExitButton type="button" onClick={handleOpen}>
              Вихід
            </ExitButton>
          </Block>
        )}
      </header>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className={s.modal}>
            <p className={s.modal_text}>
              Якщо Ви вийдете з програми незбережені дані будуть втрачені
            </p>
            <div className={s.btn_modal}>
              <button type="button" onClick={handleClose}>
                Відміна
              </button>
              {/* <NavLink to="/login"> */}
              <button type="button" onClick={handleExit}>
                Вийти
              </button>
              {/* </NavLink> */}
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Header;
