import React from 'react'
import HeroSection from '../components/HeroSection'
import Apartments from '../components/Apartments'
import Button from '../components/Button'
import '../styles/Home.css'
import MiddleSection from '../components/MiddleSection'
import Carousel from '../components/Carousel'
import { Link } from 'react-router-dom'



function Home() {
    return (
        <>
            <HeroSection />
            <Apartments />
            <MiddleSection heading='Lorem ipsum dolor sit amat' text='random text koji treba smisliti' />
            <Carousel />
            <MiddleSection heading='Želite da nas kontaktirate?' text='Pišite nam odmah!'
                button={<Button className='btns home-btn' buttonStyle='btn--orange' buttonSize='btn--large'>
                <Link to='contact'>Kontakt</Link>  </Button>}
            />
        </>
    )
}

export default Home