import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '../helpers/Container';
import NotFoundPage from '../pages/NotFoundPage';
import Header from './Header/Header';
import { Spinner } from './Spinner';
import authOperations from '../redux/authAPI/auth-operation';
import authSelectors from '../redux/authAPI/auth-selectors';
// import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Library = lazy(() => import('./LibraryPage/Library'));

/* import Container from './Container'; */
const Training = lazy(() => import('../pages/Training'));


export const App = () => {
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser);
  }, [dispatch]);

  return (
    <>
      <Container>
        {isFetchingCurrentUser ? (
          <Spinner />
        ) : (
          <Suspense fallback={<Spinner />}>
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute path="/">
                    <Home />
                  </PublicRoute>
                }
              ></Route>
              <Route
                path="/register"
                element={
                  <PublicRoute path="/register" redirectTo="/" restricted>
                    <Register />
                  </PublicRoute>
                }
              ></Route>
              <Route
                path="/login"
                element={
                  <PublicRoute path="/login" redirectTo="/library" restricted>
                    <Login />
                  </PublicRoute>
                }
              ></Route>

              <Route path="/library" element={<Library />} />
              <Route path="/training" element={<Training />} />

              {/* <Statistics/>*/}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        )}
      </Container>
    </>
  );
};
