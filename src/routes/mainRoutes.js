// src/routes/mainRoutes.js

import React from 'react';
import Home from '../pages/Home';
import Work from '../pages/Work'; // <-- 1. Import your Work component
import Certificates from '../pages/Certificates';

const mainRoutes = [
  { path: '/', component: <Home /> },
  { path: '/work', component: <Work /> }, // <-- 2. Add the route for your work page
  { path: '/certificates', component: <Certificates /> },
];

export default mainRoutes;
