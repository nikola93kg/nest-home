import React from 'react';
import '../styles/HeroSection.css'
import Button from './Button'
import logo from '../assets/img/logo-white.png'
import 'animate.css';
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <div className='hero-container' id='hero'>
            <div className='content'>
                <div className='info'>
                    <h2>Nest Home <br /> <span>Solutions</span></h2>
                    <p>Primarno posvećeni izgradnji i prodaji nekretnina tako da kupci budu zadovoljni
                        kvalitetom i da kupovinom našeg stambenog ili poslovnog prostora žive i rade u
                        okruženju na način kako su to želeli. Težimo takvom kvalitetu koji će korisnicima
                        obezbediti prijatno okruženje i poverenje za neke buduće saradnje. Kada su u pitanju
                        tehnologije projektovanja i izgradnje trudićemo se da idemo u korak sa vremenom i
                        standardima koji objektima obezbeđuju najviši nivo opremljenosti.</p>
                    <div className="hero-btns">
                        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                            <Link to='/about'>O nama</Link>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="logo-container animate__backInDown">
                <img src={logo} alt="logo" className='logo' />
            </div>
        </div>
    )
}



export default HeroSection
