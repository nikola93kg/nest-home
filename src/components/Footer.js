import React from 'react'
import Button from './Button'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo-white.png'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Nest Home DOO
                </p>
                <div className="footer-logo">
                    <Link to='/' className="social-logo">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <p className="footer-subscription-text">
                    Divčibare 14000 Valjevo
                </p>
            </section>

            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="social-icons">
                        <Link to="/" target='_blank' aria-label='Facebook' className="social-icon-link facebook">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="/" target='_blank' aria-label='Instagram' className="social-icon-link instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="/" target='_blank' aria-label='Twitter' className="social-icon-link twitter">
                            <i className="fab fa-twitter"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer