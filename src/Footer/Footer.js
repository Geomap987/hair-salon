import React from 'react';
import './Footer.css';

import insta from '../images/insta-icon.svg';
import vk from '../images/vk-icon.svg';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; 2021,	
&nbsp;Суперсайт Дизайн&nbsp;Катя&nbsp;Георгиевская Разработка&nbsp;Маша&nbsp;Васильева</p>
            
                    <button onClick={() => {window.scrollTo(0, 0)}} className="footer__link">Наверх</button>
                
                <div className="footer__media-container">
                    <a className="footer__media" href="https://instagram.com/" rel="noreferrer" target="_blank"><img className="footer__media-icon" src={insta} alt="Иконка инстагармма"></img></a>
                    <a className="footer__media" href="https://vk.com/" rel="noreferrer" target="_blank"><img className="footer__media-icon" src={vk} alt="Иконка ВКонтакте"></img></a>
                </div>
            
        </footer>
    );
}

export default Footer;