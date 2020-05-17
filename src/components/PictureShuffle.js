import React from 'react'
import {Link} from 'react-router-dom'


function PictureShuffle () {
  return (
    <div className="page">
      <h2> PictureShuffle</h2>

      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="false">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={require('../images/pictureshuffle.gif')} alt="fail"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={require('../images/pictureshuffle.png')} alt="fail"/>
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
      <span class="badge badge-secondary">sqlite3</span>
      <span class="badge badge-secondary">JavaScript</span>
      <span class="badge badge-secondary">HTML/CSS</span>
      

      <a href="https://www.youtube.com/watch?v=1CsJ10XzwuM" target="_blank"><h3>demo</h3> </a>

      <a href="https://www.youtube.com/watch?v=1CsJ10XzwuM" target="_blank"><h3>code</h3> </a>

      <p> Just like the picture shuffle games in birthday goody bags, but classier. </p>
      <p> Shuffle an image and race the clock trying to put it back in order. </p>
      <p> If you get stuck you can pause a game to pick up later, or just give up. </p>
      <p> Check out leader boards to see who did it the quickest. Also who actually thought and did it with the least moves.</p>

      <p> By Cornelius and I </p>

      <Link to="/projects"><h2>BACK TO PROJECTS</h2></Link>
    </div>
    </div>
  )
}

export default PictureShuffle