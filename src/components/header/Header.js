import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import s from './Header.module.css';
import home from './iconhome.svg';
import library from './Group.svg';
// import { Library } from 'components/library/library';

const Header = () => {
  const user = 'Martha Stewart';
  const userLogo = user[0];

//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const handleExit = () => setOpen(false);

//   const [openInfo, setOpenInfo] = React.useState(true);
//   const handleCloseInfo = () => setOpenInfo(false);

  const location = useLocation();
  const LINCK = location.pathname;

  const [login, setLogin] = useState(true);
//   const [statistic, setStatistic] = useState(false);

//   useEffect(() => {
//     if (LINCK_ID === '/statistics') {
//       setStatistic(false);
//     } else {
//       setStatistic(true);
//     }
//   }, [LINCK_ID]);

  useEffect(() => {
    if (LINCK === ('/' || '/register')) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  }, [LINCK]);

  return (
    <>
      <header className={ login ? s.header : s.header_l }>
        <Link to="/" className={s.logo}>
          BR
        </Link>

        {/* {login && ( */}
        <div className={s.blok}>
          <div className={s.blok_user}>
            <button className={s.btn_desktop} type="button">
              {userLogo}
            </button>
            <p className={s.user_name}>
                {user}
                </p>
          </div>

          {/* {statistic && ( */}
          <nav className={s.nav}>
            <NavLink
              className={({ isActive }) => (isActive ? s.active_link : s.link)}
              to="/library"
            >
              <img src={library} alt="library" />
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? s.active_link : s.link)}
              to="/training"
            >
              <img src={home} alt="home" />
            </NavLink>
          </nav>
          {/* )} */}
          <div className={s.line}></div>

          <button className={s.button_mobile} type="button">
            {userLogo}
          </button>
          <NavLink to="/logout">
          <button className={s.button_exit} type="button" >
            Вихід
          </button>
          </NavLink>
        </div>
        {/* )} */}
      </header>

      
    </>
  );
};

export default Header;