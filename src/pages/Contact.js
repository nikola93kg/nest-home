import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Contact.css'

function Contact() {
    return (
        <motion.div className='contact' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h1>Kontakt</h1>
            <hr />
            <div className='contact-container'>
                <div className='contact-left'></div>
                <div className='contact-right'>
                    <form></form>
                </div>
            </div>
            <div className='contact-maps'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22916.592143071302!2d19.964442079101566!3d44.11278100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759ddb4c53f50f7%3A0x7817692a365edad!2sNEST%20HOME!5e0!3m2!1ssr!2srs!4v1663063727637!5m2!1ssr!2srs" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </motion.div>
    )
}

export default Contact