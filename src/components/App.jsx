import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Container from '../helpers/Container';
import NotFoundPage from '../pages/NotFoundPage';
import Header from './Header/Header';
import { Spinner } from './Spinner';
/* import Container from './Container'; */

/* const FirstPage = lazy(() => import('../components/FirstPage/FirstPage')); */
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Library = lazy(() => import('./LibraryPage/Library'));
const Training = lazy(()=> import('./Training/AddTraining/AddTraining'))
/* import Container from './Container'; */

const Home = lazy(() => import('../pages/Home'));

export const App = () => {
  return (
    <>
      <Container>
        <Suspense fallback={<Spinner />}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/library" element={<Library />} />
            <Route path="/training" element={<Training />} />
            {/* <Statistics/>*/}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};
