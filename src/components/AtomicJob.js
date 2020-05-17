import React from 'react'
import {Link} from 'react-router-dom'


function AtomicJob () {
  return (
    <div className="page">
    <h1> Atomic Job</h1>

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={require('../images/atomicjob.gif')} alt="fail"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={require('../images/atomicjob.png')} alt="fail"/>
          </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <span class="badge badge-secondary">Ruby on Rails </span>
      <span class="badge badge-secondary">PostgresSQL</span>
      <span class="badge badge-secondary">JavaScript</span>
      <span class="badge badge-secondary">React</span>
      <span class="badge badge-secondary">Bootstrap</span>

      <a href="https://www.youtube.com/watch?v=1CsJ10XzwuM" target="_blank"><h3>demo</h3> </a>

      <a href="https://www.youtube.com/watch?v=1CsJ10XzwuM" target="_blank"><h3>code</h3> </a>

      <p> Job hunting is painful enough, AtomicJob is to help you organize your job search</p>
      <p> Keep status and notes specific to each job post for easy reference </p>
      <p> Filter the jobs you're interested in for a quick list of which jobs you need to apply for, which you need to follow up with </p>
      <p> Easily pull up notes negarding events, companies and leads. </p>

      <p> By Paul, Georgii, and I</p>

    <Link to="/projects"><h2>BACK TO PROJECTS</h2></Link>
    </div>
    </div>


  )
}

export default AtomicJob