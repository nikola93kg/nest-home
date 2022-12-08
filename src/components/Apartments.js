import React, { useState } from 'react'
import '../styles/Apartments.css'
import apartmentsData from '../store/apartmentsData'
import { MdClose } from "react-icons/md";


function Apartments() {

    const [modal, setModal] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getApartment = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModal(true);
    }

    return (
        <>
            <div className="apartments" id="cards">
                <h1>Ponuda Apartmana</h1>
                <hr />
                <div className="apartments__container">
                    {apartmentsData.map(apartment => {
                        const { id, title, text, size, image } = apartment;
                        return (
                            <div className="apartments__item" key={id}>
                                <div className={modal ? 'modal open' : 'modal'}>
                                    <img className='apartments-modal-img' src={tempImgSrc} alt="nesto za dobro molim" />
                                    {/* <p className='modal-text'>{title}</p> */}
                                    <MdClose className='modal-close' onClick={() => setModal(false)} />
                                </div>
                                <div className="head">
                                    <h3>{title}</h3>
                                    <p>{text}</p>
                                    <p>{size} m<sup>2</sup></p>
                                </div>
                                <div className="body">
                                    <div className='pics-modal apartments-modal' onClick={() => getApartment(image)}>
                                        <img src={image} alt="studio" />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        </>
    )
}

export default Apartments
