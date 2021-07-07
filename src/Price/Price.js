import React from 'react';
import './Price.css';
import women from '../images/women.svg';
import womenBlue from '../images/women-blue.svg';
import men from '../images/men.svg';
import menBlue from '../images/men-blue.svg';
import nails from '../images/nails.svg';
import nailsBlue from '../images/nails-blue.svg';

function Price({isClickedWomen, handleWomenClick, isClickedMen, handleMenClick, isClickedNails, handleNailsClick}) {
    return (
        <section className="price">
            <div className="price__container">
            <div className="price__grid">
                <div className={isClickedWomen ? "price__service-container price__service-container_active" : "price__service-container"} onClick={handleWomenClick}>
                    <img className="price__icon price__icon_eyes" src={isClickedWomen ? womenBlue : women} alt="Иконка глаза"></img>
                    <h3 className="price__service-name">ЖЕНСКИЙ ЗАЛ</h3>
                </div>
                <div className={isClickedMen ? "price__service-container price__service-container_active" : "price__service-container"} onClick={handleMenClick}>
                    <img className="price__icon price__icon_mustage" src={isClickedMen ? menBlue : men} alt="Иконка усы"></img>
                    <h3 className="price__service-name">МУЖСКОЙ ЗАЛ</h3>
                </div>
                <div className={isClickedNails ? "price__service-container price__service-container_active" : "price__service-container"} onClick={handleNailsClick}>
                    <img className="price__icon price__icon_nails" src={isClickedNails ? nailsBlue : nails} alt="Иконка лак"></img>
                    <h3 className="price__service-name">НОГТЕВОЙ СЕРВИС</h3>
                </div>
            </div>
            </div>
            <h4 className="price__service-title">{isClickedNails ? `НОГТЕВОЙ СЕРВИС` : `ПАРИКМАХЕРСКАЯ`}</h4>
            <h4 className={isClickedNails ? "price__service-title price__service-title_hidden" : "price__service-title"}>{isClickedWomen ? `ЖЕНСКИЙ ЗАЛ` : `МУЖСКОЙ ЗАЛ`}</h4>
            <table className={isClickedWomen ? "price__table price__table_active" : "price__table"}>
                <tr><td className="price__position">Стрижка модельная</td><td className="price__position">500 РУБ</td></tr>
                <tr><td className="price__position">Окрашивание волос в один тон + стоимость красителя и расходных материалов</td><td className="price__position">500 РУБ</td></tr>
                <tr><td className="price__position">Стрижка модельная</td><td className="price__position">500 РУБ</td></tr>
                <tr><td className="price__position">Окрашивание волос в один тон + стоимость красителя и расходных материалов</td><td className="price__position">500 РУБ</td></tr>
            </table>
            <table className={isClickedMen ? "price__table price__table_active" : "price__table"}>
                <tr><td className="price__position">Стрижка мужская</td><td className="price__position">500 РУБ</td></tr>
                <tr><td className="price__position">Окрашивание волос для мужчин</td><td className="price__position">500 РУБ</td></tr>
                <tr><td className="price__position">Бритье</td><td className="price__position">500 РУБ</td></tr>
                <tr><td className="price__position">Моделирование бороды и усов</td><td className="price__position">500 РУБ</td></tr>
            </table>
            <table className={isClickedNails ? "price__table price__table_active" : "price__table"}>
                <tr><td className="price__position">Маникюр классический</td><td className="price__position">500 РУБ</td></tr>
                <tr><td className="price__position">Маникюр аппаратный</td><td className="price__position">500 РУБ</td></tr>
                <tr><td className="price__position">Покрытие гель-лак</td><td className="price__position">500 РУБ</td></tr>
                <tr><td className="price__position">Дизайн ногтей</td><td className="price__position">500 РУБ</td></tr>
            </table>
        </section>
    );
}

export default Price;