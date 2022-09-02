import React from 'react'
import Cards from '../components/Cards'
import HeroSection from '../components/HeroSection'
import Apartments from '../components/Apartments'
import Button from '../components/Button'
import '../styles/Home.css'


function Home() {
    return (
        <>
            <HeroSection />
            <Apartments />
            <Cards />
            <hr className='hr-max-width' />
            <div className="contact-us">
                <h1>Želite da nas kontaktirate?</h1>
                <h2>Pišite nam odmah!</h2>
                <Button className='btns' buttonStyle='btn--orange' buttonSize='btn--large'>Kontakt</Button>
            </div>
        </>
    )
}

export default Home