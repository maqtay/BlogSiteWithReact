import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import img9 from '../assets/images/img-9.jpg';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={img9}
                            text="Explore the hidden Waterfall inside the Amazon Jungle."
                            label='Adventure'
                            path="./services"
                        />
                        <CardItem 
                            src={img9}
                            text="Travel through the Islands of Bali in a Private Cruise."
                            label='Luxury'
                            path="./services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src={img9}
                            text="Explore the hidden Waterfall inside the Amazon Jungle."
                            label='Adventure'
                            path="./services"
                        />
                        <CardItem 
                            src={img9}
                            text="Travel through the Islands of Bali in a Private Cruise."
                            label='Luxury'
                            path="./services"
                        />
                        <CardItem 
                            src={img9}
                            text="Travel through the Islands of Bali in a Private Cruise."
                            label='Luxury'
                            path="./services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
