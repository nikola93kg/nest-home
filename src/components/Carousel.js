import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import images from '../images'
import '../styles/Carousel.css'

function Carousel() {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [])

    return (
        <motion.div
            ref={carousel}
            className="carousel"
            whileTap={{
                cursor: 'grabbing'
            }}>
            <h1>Primeri enterijera</h1>
            <hr />
            <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className="inner-carousel">
                {images.map((image, index) => {
                    return (
                        <motion.div className='carousel-item' key={index}>
                            <img src={image} alt="apartmani" />
                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.div >
    )
}

export default Carousel