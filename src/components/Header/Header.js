import React, { useState } from 'react';
import { Link, NavLink} from 'react-router-dom';
import s from './Header.module.css';
import home from '../../images/iconhome.svg';
import library from '../../images/Group.svg';

const Header = () => {
  const user = 'Martha Stewart';
  const userLogo = user[0];
  const [login] = useState(true);

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

