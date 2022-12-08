import React from 'react'
import HeroSection from '../components/HeroSection'
import Apartments from '../components/Apartments'
import '../styles/Home.css'
import MiddleSection from '../components/MiddleSection'
import Carousel from '../components/Carousel'
import { Link } from 'react-router-dom'



function Home() {
    return (
        <>
            <HeroSection />
            <Carousel />
            <MiddleSection heading='Želite da nas kontaktirate?' text='Pišite nam odmah!'>
                <Link className='contact-btn' to='contact'>Kontakt</Link>
            </MiddleSection>
        </>
    )
}

export default Home