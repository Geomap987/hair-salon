import React from 'react';
import './Photo.css';
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';
import photo4 from '../images/photo4.jpg';
import photo5 from '../images/photo5.jpg';

function Photo() {
    return (
        <div className="photo__container">
            <img className="photo__image" src={photo5} alt="Salon gallery cover"></img>
            <img className="photo__image" src={photo1} alt="Salon gallery cover"></img>
            <img className="photo__image" src={photo2} alt="Salon gallery cover"></img>
            <img className="photo__image" src={photo3} alt="Salon gallery cover"></img>
            <img className="photo__image" src={photo4} alt="Salon gallery cover"></img>
        </div>
    );
}

export default Photo;
