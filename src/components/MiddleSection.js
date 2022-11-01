import React from 'react'
import '../styles/MiddleSection.css'

function MiddleSection({ heading, text, children }) {
    return (
        <div className='middle'>
            <h1>{heading}</h1>
            <p className='middle-section-text'>{text}</p>
            {children}
        </div>
    )
}

export default MiddleSection