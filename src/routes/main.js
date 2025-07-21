// src/routes/main.js (Final Corrected Version)

import React from 'react';

// Lazy load components based on their confirmed file paths
const Home = React.lazy(() => import('../pages/Home/home'));
const Blog = React.lazy(() => import('../pages/Blog/blog'));
const Work = React.lazy(() => import('../pages/Work/work'));
const Contact = React.lazy(() => import('../pages/Contact/contact'));

// This path now EXACTLY matches the file you confirmed: src/pages/Certificates.js
const Certificates = React.lazy(() => import('../pages/Certificates'));

const mainRoutes = [
    { path: '/', name: 'Homepage', component: <Home /> },
    { path: '/blog', name: 'Blog', component: <Blog /> },
    { path: '/work', name: 'Work', component: <Work /> },
    { path: '/contact', name: 'Contact', component: <Contact /> },
    { path: '/certificates', name: 'Certificates', component: <Certificates /> },
];

export default mainRoutes;
