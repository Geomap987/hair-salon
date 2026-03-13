import React from 'react';
import './Promo.css';
import speaker from '../images/speaker.png';

function Promo() {
    return (
        <section className="promo">
            <img className="promo__image" src={speaker} alt="Speaker illustration"></img>
            <div className="promo__container">
                <h2 className="promo__title">Our salon offers the most affordable prices in the neighborhood.</h2>
                <p className="promo__subtitle">Mention promo code 1717 and get 17% off everything.</p>
                <p className="promo__subtitle">Call +7(901)0000000 and book your appointment now.</p>
            </div>
        </section>
    );
}

export default Promo;
