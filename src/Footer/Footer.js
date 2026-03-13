import React from 'react';
import './Footer.css';

import insta from '../images/insta-icon.svg';
import vk from '../images/vk-icon.svg';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; 2021, SuperSite. Design by Katya Georgievskaya. Development by Masha Vasilyeva.</p>

            <button onClick={() => {window.scrollTo(0, 0)}} className="footer__link">Back to top</button>

            <div className="footer__media-container">
                <a className="footer__media" href="https://instagram.com/" rel="noreferrer" target="_blank"><img className="footer__media-icon" src={insta} alt="Instagram icon"></img></a>
                <a className="footer__media" href="https://vk.com/" rel="noreferrer" target="_blank"><img className="footer__media-icon" src={vk} alt="VK icon"></img></a>
            </div>
        </footer>
    );
}

export default Footer;
