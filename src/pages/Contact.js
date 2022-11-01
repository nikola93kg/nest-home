import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'
import '../styles/Contact.css'

const Result = () => {
    return (
        <div className="alert-msg">
            <p>Poruka je uspešno poslata!</p>
        </div>
    ) 
}

function Contact() {

    const [result, setResult] = useState(false);
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ftnlqq8', 'template_8amrgek', form.current, 'RoFGIZ3_wHYZLNxfc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        setResult(true);
    }

    setTimeout(()=> {
        setResult(false)
    }, 3000)
 
    return (
        <>
            <motion.div className='contact' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h1>Kontakt</h1>
                <hr />
                <div className='contact-container'>
                    <div className='contact-left'>
                        <h2>Kontaktirajte nas</h2>
                        <div className="contact-info">
                            <div className="location contact-content">
                                <div class="info-icon"><span class="fas fa-map-marker-alt"></span></div>
                                <div className="location-info">
                                    <h3>Lokacija</h3>
                                    <a href="https://goo.gl/maps/xZif8g4NRhK8dqrg9" target="_blank" rel="noreferrer">
                                        Bitoljska bb 14000 Valjevo
                                    </a>
                                </div>
                            </div>
                            <div className="phone contact-content">
                                <div class="info-icon"><span class="fas fa-mobile-alt"></span></div>
                                <div className="phone-info">
                                    <h3>Telefon</h3>
                                    <a href="tel:+381 64 364 0213">
                                        +381 64 364 0213</a> <br />
                                    <a href="tel:+381 65 247 4733">
                                        +381 65 247 4733 </a>
                                </div>
                            </div>
                            <div className="email contact-content">
                                <div class="info-icon"><span class="fas fa-envelope-open-text"></span></div>
                                <div class="info-text">
                                    <h3>Email</h3>
                                    <a href="mailto:nesthomedoo@gmail.com">nesthomedoo@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='contact-right'>
                        <h2>Pišite nam</h2>
                        <form ref={form} onSubmit={sendEmail} className='form'>
                            <div className="formWord">
                                <span>Ime i prezime</span>
                                <br />
                                <input className="input100" type="text" name="fullName" required />
                                <br />
                                <span>Email adresa</span>
                                <br />
                                <input className="input100" type="email" name="email" required />
                                <br />
                                <span>Naslov poruke</span>
                                <br />
                                <input className="input100" type="text" name="subject" required />
                                <br />
                            </div>
                            <div className="formWord">
                                <span>Poruka</span>
                                <br />
                                <textarea name="message" required></textarea>
                                <br />
                                <input type="submit" value="Pošalji" className='btns form-btn' />
                            </div>
                        </form>
                        {result ? <Result /> : null}
                    </div>
                </div>
                <div className='contact-maps'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22916.592143071302!2d19.964442079101566!3d44.11278100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759ddb4c53f50f7%3A0x7817692a365edad!2sNEST%20HOME!5e0!3m2!1ssr!2srs!4v1663063727637!5m2!1ssr!2srs"
                    width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='address of business'></iframe>
            </div>
            </motion.div>
            
        </>

    )
}

export default Contact






