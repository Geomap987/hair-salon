import './App.css';
import React, { useEffect, useState } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Header from '../Header/Header.js';
import Photo from '../Photo/Photo.js';
import Price from '../Price/Price.js';
import Promo from '../Promo/Promo.js'
import Footer from '../Footer/Footer.js'


function App() {
  const [isClickedWomen, setClickedWomen] = React.useState(true);
  const [isClickedMen, setClickedMen] = React.useState(false);
  const [isClickedNails, setClickedNails] = React.useState(false);

  function handleWomenClick() {
    setClickedWomen(true);
    setClickedMen(false);
    setClickedNails(false)
  }

  function handleMenClick() {
    setClickedWomen(false);
    setClickedMen(true);
    setClickedNails(false)
  }

  function handleNailsClick() {
    setClickedWomen(false);
    setClickedMen(false);
    setClickedNails(true)
  }
  

  return (
    <YMaps>
      <div className="App">
        <Header></Header>
        <Photo></Photo>
        <Price
          isClickedWomen={isClickedWomen}
          handleWomenClick={handleWomenClick}
          isClickedMen={isClickedMen}
          handleMenClick={handleMenClick}
          isClickedNails={isClickedNails}
          handleNailsClick={handleNailsClick}></Price>
        <Promo />
        <Map className="map" defaultState={{ center: [55.768056, 37.600001], zoom: 15 }}><Placemark geometry={[55.768056, 37.600001]} /></Map>
        <Footer />
      </div>
    </YMaps>
  );
}

export default App;
