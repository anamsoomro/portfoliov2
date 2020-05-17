import React, { useEffect } from 'react';
// import {Link} from 'react-router-dom'
import M from "materialize-css";

function MoneyMoon () {

  useEffect ( () => {
    let elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems, {})

  })

  return (
    <div className="carousel">
      <a className="carousel-item"><img src={require('../images/moneymoon.gif')} /></a>
      <a className="carousel-item"><img src={require('../images/moneymoon1.png')} /></a>
      <a className="carousel-item"><img src={require('../images/moneymoon2.png')}/></a>
      <a className="carousel-item"><img src={require('../images/moneymoon3.png')} /></a>
      <a className="carousel-item"><img src={require('../images/moneymoon4.png')} /></a>
    </div>
  )
}

export default MoneyMoon