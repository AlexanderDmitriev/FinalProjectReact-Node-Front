import authSelectors from 'redux/authAPI/auth-selectors';
import { useSelector } from 'react-redux';
import { Nav } from 'components/Home.styled';
import { useMediaQuery } from 'react-responsive';
import FirstPage from 'components/FirstPage/FirstPage';
import Login from '../pages/Login';
import Library from './Library';

export default function Home() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  console.log(isTablet);

  return (
    <>
      {isTablet ? <Login /> : <FirstPage />}

      {isLoggedIn ? (
        <Nav to="/library">
          <Library variant="contained" />
        </Nav>
      ) : (
        <Nav to="/login">
          <Login variant="contained" />
        </Nav>
      )}
    </>
  );
}
