import React from 'react';
import '../styles/HeroSection.css'
import Button from './Button'
import logo from '../assets/img/logo-white.png'
import 'animate.css';

function HeroSection() {
    return (
        <div className='hero-container' id='hero'>
            <div className='content'>
                <div className='info'>
                    <h2>Nest Home <br /> <span>Solutions</span></h2>
                    <p>Naša firma je fokusirana na izgradnju i prodaju nekretnina, <br />
                     kako bi naši klijenti bili zadovoljni kvalitetom i mogli da žive
                      i rade onako kako žele nakon kupovine nekog od naših domova ili poslovnih prostora. <br />
                       Cilj nam je nivo izvrsnosti koji će korisnicima pružiti ugodno iskustvo i sigurnost koja
                        im je potrebna za potencijalnu buduću saradnju.</p>
                    <div className="hero-btns">
                        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>More info</Button>
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
