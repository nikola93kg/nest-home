import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Error from '../pages/Error';
import RealEstate from '../pages/RealEstate';
import Apartments from '../components/Apartments';
import Housing from './Housing';

import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname} >
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/realestate' element={<RealEstate />} />
                <Route path='/realestate/apartments' element={<Apartments />} />
                <Route path='/realestate/housing' element={<Housing />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes