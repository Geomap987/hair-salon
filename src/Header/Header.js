import React from 'react';
import './Header.css';
import logo from '../images/logo.jpg';
import metro from '../images/metro.svg';
import phone from '../images/phone.svg';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Our Hair Salon logo" />
            <div className="header__container">
                <div className="header__text-container">
                    <img className="header__icons" src={metro} alt="Metro logo" />
                    <h3 className="header__text">TVERSKAYA</h3>
                </div>
                <p className="header__adress">1 Tverskaya St.</p>
                <div className="header__text-container">
                    <img className="header__icons" src={phone} alt="Phone icon" />
                    <h3 className="header__text">+7(901)000-00-00</h3>
                </div>
            </div>
            <div className="header__container">
                <h3 className="header__text">OPEN DAILY</h3>
                <h3 className="header__text">10:00 - 21:00</h3>
            </div>
        </header>
    );
}

export default Header;
