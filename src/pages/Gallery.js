import React, { useState } from 'react'
import { motion } from 'framer-motion'
import items from '../data'
import '../styles/Gallery.css'
import Menu from '../components/Menu'
import Categories from '../components/Categories'

const allCategories = [...new Set(items.map(item => item.category))]

function Gallery() {
    const [menuItems, setMenuItems] = useState(items)
    const [categories, setCategories] = useState(allCategories)

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items)
            return;
        }
        const newItems = items.filter(item => {
            return item.category === category
        })
        setMenuItems(newItems)
    }

    return (
        <motion.div className='gallery' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

            <div className="title">
                <h1>Galerija</h1>
                <hr />
            </div>
            <Categories categories={categories} filterItems={filterItems} />
            <Menu items={menuItems} />

        </motion.div>
    )
}

export default Gallery