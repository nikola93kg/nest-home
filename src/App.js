import React from 'react'
import './styles/App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </>
  )
}

export default App