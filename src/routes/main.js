// src/routes/main.js (Corrected Version)

import React from 'react';

// Use React.lazy for all components for consistency
const Home = React.lazy(() => import('../pages/Home/home'));
const Blog = React.lazy(() => import('../pages/Blog/blog'));
const Work = React.lazy(() => import('../pages/Work/work'));
const Contact = React.lazy(() => import('../pages/Contact/contact'));
const Certificates = React.lazy(() => import('../pages/Work/Certificates')); // <-- CORRECTED THIS LINE

const mainRoutes = [
    { path: '/', name: 'Homepage', component: <Home /> },
    { path: '/blog', name: 'Blog', component: <Blog /> },
    { path: '/work', name: 'Work', component: <Work /> },
    { path: '/contact', name: 'Contact', component: <Contact /> },
    { path: '/certificates', name: 'Certificates', component: <Certificates /> },
];

export default mainRoutes;
