import React from 'react'
import '../styles/Menu.css'

function Menu({ items }) {


    // CHANGE MENU NAME TO PHOTOS


    return (
        <div className="photos-container">
            {items.map(menuItem => {
                const { id, img } = menuItem;
                // ovde odradi descirption u jsonu i prikazi ga umesto teksta
                return (
                    <article key={id} className='gallery-item'>
                        <img loading='lazy' src={img} alt='apartment sample' />
                        <div className="card-overlay">
                            <div className="overlay-text">
                                <h2 className="overlay-title">lorem ipsum</h2>
                                {/* ovde iskoristi react icons i metni lupu da se na klik otvara slika */}
                                <a href='#' className="button">View</a>
                            </div>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default Menu