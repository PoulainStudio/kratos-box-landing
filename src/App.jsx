import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SuscripcionesPage from './pages/SuscripcionesPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/suscripciones" element={<SuscripcionesPage />} />
        <Route path="/coaches" element={<Navigate to="/suscripciones" replace />} />
        <Route path="/staff" element={<Navigate to="/suscripciones" replace />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
