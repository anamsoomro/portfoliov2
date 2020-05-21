import React from 'react'
import {Link} from 'react-router-dom'


function AtomicJob () {
  return (
    <div className="project">
      <div className="carousel">
        <a className="carousel-item"><img src={require('../images/atomicjob.gif')} /></a>
        <a className="carousel-item"><img src={require('../images/atomicjob1.png')} /></a>
        <a className="carousel-item"><img src={require('../images/atomicjob2.png')} /></a>
        <a className="carousel-item"><img src={require('../images/atomicjob3.png')} /></a>
        <a className="carousel-item"><img src={require('../images/atomicjob4.png')} /></a>
      </div>

      <h3>ATOMICJOB </h3>

      <p> Organize your job search, because job hunting is painful enough.</p>
      <p>Ruby on Rails, PostgreSQL, JavaScript, React, Bootstrap</p>

      <button class="waves-effect waves-light btn blue-grey" href="https://www.youtube.com/watch?v=5i_m4Tvaw5g&t=5s" target="_blank">Demo</button>
      <button class="waves-effect waves-light btn blue-grey" href="https://github.com/anamsoomro/atomic-job-front-end" target="_blank">Code-Frontend</button>
      <button class="waves-effect waves-light btn blue-grey" href="https://github.com/anamsoomro/atomic-job-back-end" target="_blank">Code-Bckend</button>

    </div>


  )
}

export default AtomicJob