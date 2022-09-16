import React, { useState } from 'react'
import { motion } from 'framer-motion'
import items from '../data'
import '../styles/Gallery.css'
import Photos from '../components/Photos'
import Categories from '../components/Categories'

const allCategories = [...new Set(items.map(item => item.category))]

function Gallery() {
    const [photoItems, setPhotoItems] = useState(items)
    const [categories, setCategories] = useState(allCategories)

    const filterItems = (category) => {
        if (category === 'all') {
            setPhotoItems(items)
            return;
        }
        const newItems = items.filter(item => {
            return item.category === category
        })
        setPhotoItems(newItems)
    }

    return (
        <motion.div className='gallery' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="title">
                <h1>Galerija</h1>
                <hr />
            </div>
            <Categories categories={categories} filterItems={filterItems} />
            <Photos items={photoItems} />
        </motion.div>
    )
}

export default Gallery