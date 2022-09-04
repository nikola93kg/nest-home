import React from 'react'
import { motion } from 'framer-motion'
import ImageSlider from '../components/ImageSlider'
import { SliderData } from '../components/SliderData'

function Gallery() {

    return (
        <motion.div className='gallery' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>


            <ImageSlider slides={SliderData} />


        </motion.div>
    )
}

export default Gallery