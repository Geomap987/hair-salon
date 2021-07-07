import React from 'react';
import './Promo.css';
import speaker from '../images/speaker.png';


function Promo() {
    return (
        <section className="promo">
            <img className="promo__image" src={speaker} alt="Изображение громкоговорителя"></img>
            <div className="promo__container">
            <h2 className="promo__title">Наша парикмахерская - самые доступные цены на районе!</h2>
            <p className="promo__subtitle">Назови промокод 1717 и получи скидку 17% на все!</p>
            <p className="promo__subtitle">Звони +7(901)0000000 и записывайся прямо сейчас!</p>
            </div>
        </section>
    );
}

export default Promo;