import React from 'react'
import CardItem from './CardItem'
import '../styles/Cards.css'

function Cards() {
    return (
        <div className="cards" id="cards">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing</h1>
            <hr />
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='https://i.ibb.co/t4ZtPXf/Divcibare-zgrada-3-211128-V5-0000.jpg'
                            text="lorem ipsum dolor sit amet "
                            label="vikendica"
                            path='/gallery' />
                        <CardItem
                            src='https://i.ibb.co/K5S6p5Y/Divcibare-zgrada-3-211128-V4-0000.jpg'
                            text="lorem ipsum dolor sit amet"
                            label="apartman"
                            path='/gallery' />
                        <CardItem
                            src='https://i.ibb.co/8mN9X2j/Divcibare-zgrada-3-211128-V3-0000.jpg'
                            text="lorem ipsum dolor sit amet"
                            label="apartman"
                            path='/gallery' />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src='https://i.ibb.co/4Vm2dFN/Divcibare-zgrada-3-211128-V6-0000.jpg'
                            text="lorem ipsum dolor sit amet"
                            label="hacijenda"
                            path='/gallery' />
                        <CardItem
                            src='https://i.ibb.co/1L76kCZ/Divcibare-zgrada-3-211128-V1-0000.jpg'
                            text="lorem ipsum dolor sit amet"
                            label="hacijenda 2"
                            path='/gallery' />

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards