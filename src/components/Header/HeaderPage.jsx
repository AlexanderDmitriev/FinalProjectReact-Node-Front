import React /* , { useEffect, useState }  */ from 'react';
import { /* useDispatch, */ useSelector } from 'react-redux';
/* import {
  Link,
  NavLink,
  useNavigate , useLocation,
} from 'react-router-dom'; */
/* import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal'; */
import home from '../../images/iconhome.svg';
import library from '../../images/Group.svg';
import authSelectors from '../../redux/authAPI/auth-selectors';
/* import authOperations from '../../redux/authAPI/auth-operation'; */
import {
  Header,
  NavigationLink,
  Block,
  BlockUser,
  DesktopButton,
  UserName,
  Navigation,
  PassiveLink,
  Line,
} from './HeaderPage.styled';
import s from './Header.module.css';

const HeaderPage = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  // const user = 'Martha Stewart';
  const user = authSelectors.getUsername;
  const userLogo = user[0];
  /* const dispatch = useDispatch();
  const navigate = useNavigate(); */

  const [/* open, */ setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  /* const handleClose = () => setOpen(false);
  const handleExit = () => {
    dispatch(authOperations.logOut());
    setOpen(false);
    navigate('/', { replace: true });
  }; */


  return (
    <>
      <Header>
        <NavigationLink to="/">BR</NavigationLink>
        {isLoggedIn && (
          <Block>
            <BlockUser>
              <DesktopButton type="button">{userLogo}</DesktopButton>
              <UserName>{user}</UserName>
            </BlockUser>

            {/* {statistic && ( */}
            <Navigation>
              <PassiveLink to="/library">
                <img src={library} alt="library" />
              </PassiveLink>
              <PassiveLink to="/training">
                <img src={home} alt="home" />
              </PassiveLink>
            </Navigation>
            <Line/>
            <button className={s.button_mobile} type="button">
              {userLogo}
            </button>
            <button
              className={s.button_exit}
              type="button"
              onClick={handleOpen}
            >
              Вихід
            </button>
          </Block>
        )}
      </Header>
    </>
  );
};

export default HeaderPage;
