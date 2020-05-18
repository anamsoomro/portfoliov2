import React from 'react'
import {Link} from 'react-router-dom'


function CaptionIt () {
  
  return (
    <div className="project">
      
      <div className="carousel">
        <a className="carousel-item"><img src={require('../images/captionit.gif')}/></a>
        <a className="carousel-item"><img src={require('../images/captionit1.png')}/></a>
        <a className="carousel-item"><img src={require('../images/captionit2.png')}/></a>
        <a className="carousel-item"><img src={require('../images/captionit3.png')}/></a>
        <a className="carousel-item"><img src={require('../images/captionit4.png')}/></a>
      </div>

      <p> You think youre funny? Let the people decide! </p>

      <button class="waves-effect waves-light btn blue-grey" href="https://www.youtube.com/watch?v=qpiVlTYH9As" target="_blank">Demo</button>
      <button class="waves-effect waves-light btn blue-grey" href="https://github.com/anamsoomro/CaptionIt" target="_blank">Code</button>

    </div>

  )
}

export default CaptionIt