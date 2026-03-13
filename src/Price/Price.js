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
                        <img className="price__icon price__icon_eyes" src={isClickedWomen ? womenBlue : women} alt="Women services icon"></img>
                        <h3 className="price__service-name">LADY'S SERVICES</h3>
                    </div>
                    <div className={isClickedMen ? "price__service-container price__service-container_active" : "price__service-container"} onClick={handleMenClick}>
                        <img className="price__icon price__icon_mustage" src={isClickedMen ? menBlue : men} alt="Men services icon"></img>
                        <h3 className="price__service-name">GENT'S SERVICES</h3>
                    </div>
                    <div className={isClickedNails ? "price__service-container price__service-container_active" : "price__service-container"} onClick={handleNailsClick}>
                        <img className="price__icon price__icon_nails" src={isClickedNails ? nailsBlue : nails} alt="Nail services icon"></img>
                        <h3 className="price__service-name">NAIL SERVICE</h3>
                    </div>
                </div>
            </div>
            <h4 className="price__service-title">{isClickedNails ? 'NAIL SERVICE' : 'HAIR SALON'}</h4>
            <h4 className={isClickedNails ? "price__service-title price__service-title_hidden" : "price__service-title"}>{isClickedWomen ? "LADY'S SERVICES" : "GENT'S SERVICES"}</h4>
            <table className={isClickedWomen ? "price__table price__table_active" : "price__table"}>
                <tbody>
                    <tr><td className="price__position">Model haircut</td><td className="price__position">500 RUB</td></tr>
                    <tr><td className="price__position">Single-tone hair coloring plus dye and supplies cost</td><td className="price__position">500 RUB</td></tr>
                    <tr><td className="price__position">Model haircut</td><td className="price__position">500 RUB</td></tr>
                    <tr><td className="price__position">Single-tone hair coloring plus dye and supplies cost</td><td className="price__position">500 RUB</td></tr>
                </tbody>
            </table>
            <table className={isClickedMen ? "price__table price__table_active" : "price__table"}>
                <tbody>
                    <tr><td className="price__position">Men's haircut</td><td className="price__position">500 RUB</td></tr>
                    <tr><td className="price__position">Hair coloring for men</td><td className="price__position">500 RUB</td></tr>
                    <tr><td className="price__position">Shaving</td><td className="price__position">500 RUB</td></tr>
                    <tr><td className="price__position">Beard and mustache styling</td><td className="price__position">500 RUB</td></tr>
                </tbody>
            </table>
            <table className={isClickedNails ? "price__table price__table_active" : "price__table"}>
                <tbody>
                    <tr><td className="price__position">Classic manicure</td><td className="price__position">500 RUB</td></tr>
                    <tr><td className="price__position">Hardware manicure</td><td className="price__position">500 RUB</td></tr>
                    <tr><td className="price__position">Gel polish coating</td><td className="price__position">500 RUB</td></tr>
                    <tr><td className="price__position">Nail art</td><td className="price__position">500 RUB</td></tr>
                </tbody>
            </table>
        </section>
    );
}

export default Price;
