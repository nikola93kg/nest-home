import React from 'react';
import '../styles/HeroSection.css'
import Button from './Button'
import logo from '../assets/img/logo-white.png'
import 'animate.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <div class="content">
                <div class="info">
                    <h2>Nest Home <br /> <span>Solutions</span></h2>
                    <p>Ovde može O NAMA neki kraći info, posle na stranici O NAMA malo detaljnije i drugi font, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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
