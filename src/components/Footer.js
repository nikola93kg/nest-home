import '../styles/Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            {/* <h1 className='footer-heading'>Nest Home Doo</h1> */}
            <section className="footer-content">
                <div className="footer-logo-container">
                    <a href='#hero' className="footer-link-logo">
                        <h2 className='footer-logo-h2'>Nest Home</h2>
                    </a>
                </div>
                <div className="footer-info">
                    <p>Bitoljska bb 14000 Valjevo</p>
                    <p> <a href='tel:+381 64 364 0213'>Telefon: +381 64 364 0213</a> </p>
                    <p> <a href='tel:+381 65 247 4733'>Telefon 2: +381 65 247 4733</a> </p>
                    <p> <a href='mailto:nesthomedoo@gmail.com'> Email: nesthomedoo@gmail.com</a></p>
                </div>
            </section>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="social-icons">
                        <a href="https://www.facebook.com/profile.php?id=100085322523158" target='_blank' aria-label='Facebook' className="social-icon-link facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/nesthome2022/" target='_blank' aria-label='Instagram' className="social-icon-link instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" target='_blank' aria-label='Twitter' className="social-icon-link twitter">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </section>
            <p className="website-rights">© Copyright -
                <a href='https://nikola93kg.github.io/' target='_blank'> nikola93kg </a> 2022.</p>
        </div>
    )
}

export default Footer