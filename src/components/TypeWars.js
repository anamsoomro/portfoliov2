import React from 'react'
import {Link} from 'react-router-dom'


function TypeWars () {
  return (
    <div className="project">
      
      <div className="carousel">
        <a className="carousel-item"><img src={require('../images/typewars.gif')} /></a>
        <a className="carousel-item"><img src={require('../images/typewars1.png')} /></a>
        <a className="carousel-item"><img src={require('../images/typewars2.png')} /></a>
        <a className="carousel-item"><img src={require('../images/typewars3.png')} /></a>
        <a className="carousel-item"><img src={require('../images/typewars4.png')} /></a>
      </div>

      <h3>TYPE WARS </h3>

      <p> Type racer game with fun themes and music. </p>
      <p> Ruby, ActiveRecord </p>

      <button class="waves-effect waves-light btn blue-grey" href="https://www.youtube.com/watch?v=47lKxfCWTo8" target="_blank">Demo</button>
      <button class="waves-effect waves-light btn blue-grey" href="https://github.com/anamsoomro/type_wars" target="_blank">Code</button>

    </div>
  )
}

export default TypeWars