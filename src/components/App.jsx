import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Container from '../helpers/Container';
import NotFoundPage from '../pages/NotFoundPage';
import Header from './Header/Header';
/* import Container from './Container'; */

const Home = lazy(() => import('../pages/Home'));

/* const Library = lazy(() => import('../components/library/Library')); */
// const FirstPage = lazy(() => import('../components/FirstPage/FirstPage'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Library = lazy(() => import('./library/LibraryPage/Library'));

export const App = () => {
  return (
    <>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/library" element={<Library />} />
            {/* <Training/>*/}
            {/* <Statistics/>*/}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};
