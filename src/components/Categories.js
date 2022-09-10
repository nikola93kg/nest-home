import React from 'react'
import '../styles/Categories.css'

function Categories({ filterItems, categories }) {

    return (
        <div className='btn-container'>
            {categories.map((category, index) => {
                return <button type='button' className='btn--orange' key={index} onClick={() => filterItems(category)} >
                    {category}
                </button>
            })}
        </div>
    )
}

export default Categories