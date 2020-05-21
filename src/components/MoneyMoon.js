import React, { useEffect } from 'react';
import M from "materialize-css";

function MoneyMoon () {

  useEffect ( () => {
    let elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems, {})

  })

  console.log(require('../images/moneymoon.gif'))

  return (
    <div className="project"> 

      <div className="carousel">
        <a className="carousel-item"><img src={require('../images/moneymoon.gif')} /></a>
        <a className="carousel-item"><img src={require('../images/moneymoon1.png')} /></a>
        <a className="carousel-item"><img src={require('../images/moneymoon2.png')}/></a>
        <a className="carousel-item"><img src={require('../images/moneymoon3.png')} /></a>
        <a className="carousel-item"><img src={require('../images/moneymoon4.png')} /></a>
      </div>

      <h3>MONEYMOON </h3>

      <p> Personal finance application for two.</p>
      <p> Ruby on Rails, SQLite, JavaScript, React, Redux, Chart.js, Plaid API </p>


      <a  class="waves-effect waves-light btn blue-grey" href="https://www.youtube.com/watch?v=1CsJ10XzwuM" target="_blank"> Demo </a>
      
      <a class="waves-effect waves-light btn blue-grey" href="https://github.com/anamsoomro/moneys-front-end" target="_blank"> Code-Frontend </a>
      
      <a class="waves-effect waves-light btn blue-grey" href="https://github.com/anamsoomro/moneys-back-end" target="_blank"> Code-Backend </a>

    </div>
  )
}

export default MoneyMoon