import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import indexRoutes from './routes/index';

function App() {
  return (
    // By removing the preloader and the loading state, 
    // your routes will now render immediately and stay on the screen.
    <Routes>
      {indexRoutes.map((prop, key) => (
        <Route
          path={prop.path}
          key={key}
          element={prop.component}
        />
      ))}
    </Routes>
  );
}

export default App;
