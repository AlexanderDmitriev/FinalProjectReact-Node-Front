import React/* , { useEffect, useState }  */from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate /* , useLocation */ } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import s from './Header.module.css';
import home from '../../images/iconhome.svg';
import library from '../../images/Group.svg';
import  authSelectors from "../../redux/authAPI/auth-selectors";
import authOperations from "../../redux/authAPI/auth-operation";

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
  
    // const user = 'Martha Stewart';
    /* const user = authSelectors.getUsername; */
    const userLogo = user?user.slice(0, 1).toUpperCase():'';
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleExit = () => {
      dispatch(authOperations.logOut())
      setOpen(false);
      navigate("/", { replace: true });
    };
  
    
  
    return (
      <>
        <header className={isLoggedIn ? s.header : s.header_l}>
          <Link to="/" className={s.logo}>
            BR
          </Link>
  
          {isLoggedIn && (
            <div className={s.blok}>
              <div className={s.blok_user}>
                <button className={s.btn_desktop} type="button">
                  {userLogo}
                </button>
                <p className={s.user_name}>{user}</p>
              </div>
  
              {/* {statistic && ( */}
                <nav className={s.nav}>
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
                </nav>
              {/* )} */}
              <div className={s.line}></div>
  
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
            </div>
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


