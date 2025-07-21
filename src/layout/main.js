// src/layout/main.js

import React, { Suspense, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../pages/Header/header';
import Footer from '../pages/Footer/footer';
import './main.scss';
import mainRoutes from '../routes/main';

function MainLayout() {
    const layoutRef = useRef(null);

    // This effect runs once when the MainLayout component first loads
    useEffect(() => {
        const element = layoutRef.current;
        if (element) {
            // Force the layout to become visible by adding the 'show' class
            element.classList.add('show');
            element.classList.remove('hidden');
        }
    }, []); // The empty array [] ensures this runs only once

    return (
        // Add the ref and a default 'hidden' class to the main container
        <div className="main hidden" ref={layoutRef}>
            <Header />
            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    {mainRoutes.map((prop, key) => (
                        <Route
                            path={prop.path}
                            key={key}
                            element={prop.component}
                        />
                    ))}
                </Routes>
            </Suspense>
            <Footer />
        </div>
    );
}

export default MainLayout;
