import React from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo-white.png'

function Footer() {
    return (
        <div className="footer-container">
            {/* <h1 className='footer-heading'>Nest Home Doo</h1> */}
            <section className="footer-content">
                <div className="footer-logo">
                    <Link to='/' className="footer-logo">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="footer-info">
                    <p>Divčibare 14000 Valjevo</p>
                    <p>Telefon: +381 64 364 0213</p>
                    <p>Telefon 2: +381 65 247 4733</p>
                    <p>Email: nesthomedoo@gmail.com</p>
                </div>
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
                        <Link to="/" target='_blank' aria-label='Twitter' className="social-icon-link twitter">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
            <p className="website-rights">© Copyright - nikola93kg 2022.</p>
        </div>
    )
}

export default Footer