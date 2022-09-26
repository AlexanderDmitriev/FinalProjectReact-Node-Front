import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Container from '../helpers/Container';
import NotFoundPage from '../pages/NotFoundPage';

const FirstPage = lazy(() => import('../components/FirstPage/FirstPage'));

export const App = () => {
  return (
    <>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Navigation/> он же Header*/}
          <Routes>
            <Route path="/" element={<FirstPage />} />
            {/* <Login/>*/}
            {/* <Registration/>*/}
            {/* <Library/>*/}
            {/* <Training/>*/}
            {/* <Statistics/>*/}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};
