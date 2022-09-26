import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import FirstPage from './FirstPage/FirstPage';

import Container from './Container';

const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));

export default function App() {
  return (
    <Container>
      <Suspense>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      {/* <FirstPage /> */}
        
      </Suspense>
    </Container>
  );
}
