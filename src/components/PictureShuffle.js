import React from 'react'
import {Link} from 'react-router-dom'


function PictureShuffle () {
  return (
      <div className="project">

        <div className="carousel">
          <a className="carousel-item"><img src={require('../images/pictureshuffle.gif')} /></a>
          <a className="carousel-item"><img src={require('../images/pictureshuffle1.png')} /></a>
          <a className="carousel-item"><img src={require('../images/pictureshuffle2.png')} /></a>
          <a className="carousel-item"><img src={require('../images/pictureshuffle3.png')} /></a>
          <a className="carousel-item"><img src={require('../images/pictureshuffle4.png')} /></a>
        </div>

        <h3>PICTURESHUFFLE </h3>

        <p> Just like the picture shuffle games in birthday goody bags, but classier. </p>
        <p> Ruby on Rails, SQLite, JavaScript, HTML/CSS</p>

        <button class="waves-effect waves-light btn blue-grey" href="https://www.youtube.com/watch?v=Q9ZGVWXspnA" target="_blank">Demo</button>
        <button class="waves-effect waves-light btn blue-grey" href="https://github.com/anamsoomro/pictureShuffle" target="_blank">Code</button>
        
      </div>

  )
}

export default PictureShuffle