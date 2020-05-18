import React from 'react'
import {Link} from 'react-router-dom'


function AtomicJob () {
  return (
    <div className="project">



      <div className="carousel">
        <a className="carousel-item"><img src={require('../images/atomicjob.gif')} /></a>
        <a className="carousel-item"><img src={require('../images/atomicjob.png')} /></a>
      </div>



      <p>Ruby on Rails, Postgres, JavaScript, React, Bootstrap</p>
      <p> Job hunting is painful enough, AtomicJob is to help you organize your job search</p>

      <button class="waves-effect waves-light btn blue-grey" href="https://www.youtube.com/watch?v=1CsJ10XzwuM" target="_blank">Demo</button>
      <button class="waves-effect waves-light btn blue-grey" href="https://www.youtube.com/watch?v=1CsJ10XzwuM" target="_blank">Code</button>

    </div>


  )
}

export default AtomicJob