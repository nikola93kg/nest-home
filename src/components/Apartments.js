import React from 'react'
import '../styles/Apartments.css'

function Apartments() {
    return (
        <div className="apartments" id="cards">
            <h1>Apartmani</h1>
            <hr />
            <div className="apartments__container">
                <div className="apartments__item">
                    <div className="head">
                        <h3>Studio</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio sit? Non, maiores vel?</p>
                        <p>XX m<sup>2</sup></p>
                    </div>
                    <div className="body">
                        <img src="https://i.ibb.co/W5pmpQ1/studio.png" alt="studio" />
                    </div>
                </div>
                <div className="apartments__item">
                    <div className="head">
                        <h3>Jednosobni apartman</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio sit? Non, maiores vel?</p>
                        <p>XX m<sup>2</sup></p>
                    </div>
                    <div className="body">
                        <img src="https://i.ibb.co/pf14Jx3/jednosoban.png" alt="studio" />
                    </div>
                </div>
                <div className="apartments__item">
                    <div className="head">
                        <h3>Duplex 1</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio sit? Non, maiores vel?</p>
                        <p>XX m<sup>2</sup></p>
                    </div>
                    <div className="body">
                        <img src="https://i.ibb.co/yfJRSpc/duplex.png" alt="studio" />
                    </div>
                </div>
                <div className="apartments__item">
                    <div className="head">
                        <h3>Duplex 2</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio sit? Non, maiores vel?</p>
                        <p>XX m<sup>2</sup></p>
                    </div>
                    <div className="body">
                        <img src="https://i.ibb.co/TtyLSZJ/duplex2.png" alt="studio" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apartments
