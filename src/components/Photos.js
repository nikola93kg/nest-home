import React, { useState } from 'react'
import '../styles/Photos.css'
import { FaSearchPlus } from "react-icons/fa";
import {MdClose} from "react-icons/md";

function Photos({ items }) {

    const [modal, setModal] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('')

    const getImg = (imgSrc) => { 
        setTempImgSrc(imgSrc);
        setModal(true);
     }

    return (

        <>

            <div className={modal ? 'modal open' : 'modal'}>
                <img src={tempImgSrc} />
                <MdClose className='modal-close' onClick={()=> setModal(false)} />
            </div>


            <div className="photos-container">
                {items.map(photoItem => {
                    const { id, img, desc } = photoItem;
                    return (
                        <article key={id} className='gallery-item'>
                            <img loading='lazy' src={img} alt='apartment sample' />
                            <div className="card-overlay">
                                <div className="overlay-text">
                                    <h2 className="overlay-title">{desc}</h2>
                                    <div className='pics-modal' onClick={()=> getImg(img)}>
                                        <a href='#picview' className="button"> <FaSearchPlus /> View</a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </>

        
    )
}

export default Photos