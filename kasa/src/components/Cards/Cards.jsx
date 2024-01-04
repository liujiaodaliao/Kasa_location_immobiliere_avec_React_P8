import React from 'react';
import "./Cards.css"; 

function Cards({ cover, title }) {
    return (
        <article className="cards_item">
            <img src={cover} alt="location" />
            <div className="cards_item_layer">
                <p className="cards_item_title">{title}</p>
            </div>
        </article>
    );
}

export default Cards;