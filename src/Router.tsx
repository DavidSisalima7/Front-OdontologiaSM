
import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import { RouterLayout } from './common/RouterLayout';
import Home from './Pages/Home';
import { LoginPage } from './Pages/Login/Login';
export const AppRouter: React.FC = () => {
  return (
    // Para ventanas que obtengan el NavBar se los introduce dentro del <Route path="/" element={<RouterLayout />}> si no fuera
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
      
      <Route
        path="/prueba"
        element={
          <div>
            {' '}
            <h1 style={{ background: 'black' }}>PRUEBA</h1>{' '}
          </div>
        }
      />
    </Routes>
  );
};
