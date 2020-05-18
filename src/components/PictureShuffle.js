import React from 'react'
import {Link} from 'react-router-dom'


function PictureShuffle () {
  return (
    
      <div className="project">
      <div className="carousel">
        <a className="carousel-item"><img src={require('../images/pictureshuffle.gif')} /></a>
        <a className="carousel-item"><img src={require('../images/pictureshuffle.png')} /></a>
      </div>

      <p> Ruby on Rails, SQLite, JavaScript, HTML/CSS</p>
      <p> Just like the picture shuffle games in birthday goody bags, but classier. </p>


      <button class="waves-effect waves-light btn blue-grey" href="https://www.youtube.com/watch?v=1CsJ10XzwuM" target="_blank">Demo</button>
      <button class="waves-effect waves-light btn blue-grey" href="https://www.youtube.com/watch?v=1CsJ10XzwuM" target="_blank">Code</button>
      </div>

  )
}

export default PictureShuffle