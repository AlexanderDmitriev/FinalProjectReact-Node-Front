import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { Spinner } from './Spinner';
import authOperations from '../redux/authAPI/auth-operation';
import authSelectors from '../redux/authAPI/auth-selectors';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import GoogleLogin from '../components/GoogleLogin/GoogleLogin';
const Header = lazy(() => import('./Header/Header'));
const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Library = lazy(() => import('../pages/Library'));
const Training = lazy(() => import('../pages/Training'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  const dispatch = useDispatch();

  GoogleLogin();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Spinner />}>
      <Header />
          {isFetchingCurrentUser ? (
            <Spinner />
          ) : (
            <>
              
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
                    <PublicRoute
                      path="/register"
                      redirectTo="/library"
                      restricted
                    >
                      <Register />
                    </PublicRoute>
                  }
                ></Route>

                <Route
                  path="/login"
                  element={
                    <PublicRoute redirectTo="/library" restricted>
                      <Login />
                    </PublicRoute>
                  }
                ></Route>

                <Route
                  path="/library"
                  element={
                    <PrivateRoute path="/library" redirectTo="/login">
                      <Library />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/training"
                  element={
                    <PrivateRoute path="/training" redirectTo="/login">
                      <Training />
                    </PrivateRoute>
                  }
                />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </>
          )}
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} autoClose={3000} />
    </>
  );
};
