import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Container from '../helpers/Container';
import NotFoundPage from '../pages/NotFoundPage';
/* import Container from './Container'; */

const FirstPage = lazy(() => import('./FirstPage/FirstPage'));
const Library = lazy(() => import('./Library/Library')); 
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));

export const App = () => {
  return (
    <>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Navigation/> он же Header*/}
          <Routes>
            <Route path="/" element={<FirstPage />} />
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
