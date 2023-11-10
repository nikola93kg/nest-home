import React, { useState } from 'react'
import '../styles/Apartments.css'
import { MdClose } from "react-icons/md";
import ImageSlider from './ImageSlider';
import items from '../store/apartmentsCategoryData';
import prizemlje from '../store/prizemlje';
import prizemlje2 from '../store/prizemlje2';
import potkrovlje1 from '../store/potkrovlje1';
import potkrovlje2 from '../store/potkrovlje2'

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
                    <ImageSlider />
                    <p className="slider-text">Apartmani raznih struktura,
                     površine od 20m² do 40m, u kvalitetno građenom kompleksu
                      u urbanom delu Divčibara na raskrsnici je puteva koji vode
                       prema ski stazi i glavnog puta koji povezuje čitavu planinu. <br /> <br />
                        Koncept objekta je prilagođen konkretnoj lokaciji ideja planinske
                         kuće preovladuje u obliku dvovodnog krova, koji se preliva na sve nivoe osim prizemlja. <br /> <br />
                          Objekat ima četiri etaže rezervisane za apartmane skijašnicu koja se nalazi na najnižoj etaži.</p>
                </div>
                <h2 className='text-center'>Apartmani u ponudi</h2>
                <hr />

                <h1>Prizemlje</h1>

                <div className="apartments__container">
                    {prizemlje.map(apartment => {
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
                                    {/* <p>{text}</p> */}
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

                <h1 className='text-center'>Prizemlje 2</h1>
                <hr />

                <div className="apartments__container">
                    {prizemlje2.map(apartment => {
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
                                    {/* <p>{text}</p> */}
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

                <h1 className='text-center'>Potkrovlje 1</h1>
                <hr />

                <div className="apartments__container">
                    {potkrovlje1.map(apartment => {
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
                                    {/* <p>{text}</p> */}
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

                <h1 className='text-center'>Potkrovlje 2</h1>
                <hr />

                <div className="apartments__container">
                    {potkrovlje2.map(apartment => {
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
                                    {/* <p>{text}</p> */}
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

                <div className='text-center'></div>
                
            </div>
        </>
    )
}

export default Apartments
