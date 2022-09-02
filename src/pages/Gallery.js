import React from 'react'
import { motion } from 'framer-motion'

function Gallery() {
    return (
        <motion.div className='gallery' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

            Gallery


        </motion.div>
    )
}

export default Gallery