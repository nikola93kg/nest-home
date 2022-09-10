import React from 'react'
import '../styles/Menu.css'

function Menu({ items }) {


    // CHANGE MENU NAME TO PHOTOS


    return (
        <div className="photos-container">
            {items.map(menuItem => {
                const { id, img } = menuItem;
                return (
                    <article key={id} className='gallery-item'>
                        <img src={img} alt='apartment sample' />
                    </article>
                )
            })}
        </div>
    )
}

export default Menu