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

      <h3>CAPTIONIT!</h3>

      <p> Social media platform to validate how funny you are. </p>
      <p>Ruby on Rails, Sinatra, HTML, CSS</p>

      <a class="waves-effect waves-light btn blue-grey" href="https://www.youtube.com/watch?v=qpiVlTYH9As" target="_blank">Demo</a>
      <a class="waves-effect waves-light btn blue-grey" href="https://github.com/anamsoomro/CaptionIt" target="_blank">Code</a>

    </div>

  )
}

export default CaptionIt