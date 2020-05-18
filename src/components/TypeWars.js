import React from 'react'
import {Link} from 'react-router-dom'


function TypeWars () {
  return (
    <div className="project">
      

      <div className="carousel">
        <a className="carousel-item"><img src={require('../images/typewars.gif')} /></a>
      </div>

      <p> type racer game with fun themes and music! </p>

      <button class="waves-effect waves-light btn blue-grey" href="https://www.youtube.com/watch?v=1CsJ10XzwuM" target="_blank">Demo</button>
      <button class="waves-effect waves-light btn blue-grey" href="https://www.youtube.com/watch?v=1CsJ10XzwuM" target="_blank">Code</button>


    </div>
  )
}

export default TypeWars