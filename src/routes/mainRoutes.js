// src/routes/mainRoutes.js

import React from 'react';

// Corrected import paths to match your file structure and case
import Home from '../pages/Home/home';
import Work from '../pages/Work/work';
import Certificates from '../pages/Certificates';

const mainRoutes = [
  { path: '/', component: <Home /> },
  { path: '/work', component: <Work /> },
  { path: '/certificates', component: <Certificates /> },
];

export default mainRoutes;
