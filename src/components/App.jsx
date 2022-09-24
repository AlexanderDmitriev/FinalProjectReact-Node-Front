import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import Container from './Container';

const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Container>
  );
}
