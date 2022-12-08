import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo-white.png'
import '../styles/Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={() => setClick(false)}>
                        <img src={logo} alt='logo' />
                    </Link>
                    <div className="menu-icon" onClick={() => setClick(!click)}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={() => setClick(false)}>
                                Početna
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/gallery' className='nav-links' onClick={() => setClick(false)}>
                                Galerija
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/realestate' className='nav-links' onClick={() => setClick(false)}>
                                Nekretnine
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className='nav-links' onClick={() => setClick(false)}>
                                O nama
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className='nav-links' onClick={() => setClick(false)}>
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar