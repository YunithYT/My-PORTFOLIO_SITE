import React, { useEffect, useState } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import indexRoutes from './routes/index';
import Preloader from './components/preloader'; // This now imports the correct component

function App() {
  // Start with loading as true to show the preloader immediately.
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // No need to set loading to true here anymore.
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000); // Preloader will show for 5 seconds

    return () => clearTimeout(timeout); // Clean up the timer
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
          {indexRoutes.map((prop, key) => (
            <Route
              path={prop.path}
              key={key}
              element={prop.component}
            />
          ))}
        </Routes>
      )}
    </>
  );
}

export default App;
