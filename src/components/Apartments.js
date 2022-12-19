import React, { useState } from 'react'
import '../styles/Apartments.css'
import apartmentsData from '../store/apartmentsData'
import { MdClose } from "react-icons/md";
import ImageSlider from './ImageSlider';
import img from '../store/images'
import Categories from './Categories';
import items from '../store/data'

const allCategories = [...new Set(items.map(item => item.category))]

function Apartments() {

    const [modal, setModal] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getApartment = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModal(true);
    }

    const [photoItems, setPhotoItems] = useState(items)
    const [categories] = useState(allCategories)

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
        <>
            <div className="apartments" id="cards">
                <h1>Ponuda Apartmana</h1>
                <hr />
                <div className="slider-content">
                    <ImageSlider slides={img} />
                    <p className="slider-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rem temporibus, earum labore doloribus error quos impedit laudantium hic, aliquam iusto, eius maiores sequi. Quo cum dicta quisquam aliquid eum qui animi.</p>
                </div>
                <h2 className='text-center'>Apartmani u ponudi</h2>
                <hr />

                <Categories categories={categories} filterItems={filterItems} />

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
