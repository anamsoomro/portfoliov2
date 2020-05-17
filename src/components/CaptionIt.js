import React from 'react'
import {Link} from 'react-router-dom'


function CaptionIt () {
  return (
    <div className="page">
      <h2> CaptionIt!</h2>
  
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="false">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={require('../images/captionit.gif')} alt="fail"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={require('../images/captionit.png')} alt="fail"/>
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
      <span class="badge badge-secondary">Sinatra</span>
      <span class="badge badge-secondary">HTML/CSS</span>
      

      <a href="https://www.youtube.com/watch?v=1CsJ10XzwuM" target="_blank"><h3>demo</h3> </a>

      <a href="https://www.youtube.com/watch?v=1CsJ10XzwuM" target="_blank"><h3>code</h3> </a>

      <p> You think youre funny? Let the people decide! </p>
      <p> Similar to the card game What Do You Meme? users caption images and "knee slap" on captions they find funny </p> 
      <p> Users can caption other peoples images or upload their own and tag them with categories</p> 
      <p> Log in to see the funniest users, images, captions, or just browse </p> 

      <p> By Blake and I </p>



      <Link to="/projects"><h2>BACK TO PROJECTS</h2></Link>
    </div>
    </div>

  )
}

export default CaptionIt