import React from 'react'
import '../styles/MiddleSection.css'

function MiddleSection({ heading, text, button }) {
    return (
        <div className='middle'>
            <h1>{heading}</h1>
            <p>{text}</p>
            {button}
        </div>
    )
}

export default MiddleSection