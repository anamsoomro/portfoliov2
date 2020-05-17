import React from 'react'
import {Link} from 'react-router-dom'


function TypeWars () {
  return (
    <div className="page">
    <h2> Type Wars</h2>

      
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="false">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={require('../images/typewars.gif')} alt="fail"/>
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
      <span class="badge badge-secondary">SQLite </span>



      <a href="https://www.youtube.com/watch?v=1CsJ10XzwuM" target="_blank"><h3>demo</h3> </a>

      <a href="https://www.youtube.com/watch?v=1CsJ10XzwuM" target="_blank"><h3>code</h3> </a>

      <p> type racer game with fun themes and music! </p>

      <p> check out game stats to see your best speed as well as the high scores for each theme</p>

      <p> by Mitch and I </p>


    <Link to="/projects"><h2>BACK TO PROJECTS</h2></Link>
    </div>
    </div>
  )
}

export default TypeWars