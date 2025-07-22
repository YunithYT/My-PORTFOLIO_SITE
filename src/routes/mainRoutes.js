// routes/mainRoutes.js or routes/main.js

import React from 'react';
import Home from '../pages/Home';
import Certificates from './../pages/Certificates';

const mainRoutes = [
  { path: '/', component: <Home /> },
  { path: '/certificates', component: <Certificates /> },
];

export default mainRoutes;
