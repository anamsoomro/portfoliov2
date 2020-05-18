import React from 'react'

function Summary () {
  return (
    <div className="summary">

      <div className="image">
      <img src={require('../images/anam.jpg')}></img>

      </div>

      <div className="text">
      <div className="image-mobile">
      </div> <h1> ANAM SOOMRO </h1>
      <p> I'm a full stack developer with a background in architecture, engineering and construction. </p>
      <p> Excited to take my experience dedicated to the built environment to building on the internet. </p>
      <p> Currently equipped with Ruby on Rails, JavaScript, React, Redux, HTML and CSS. </p>
      <p> In my downtime I like to ride my bike and pick flowering weeds. </p>

      <div class="social-icons">
        <a href="https://www.linkedin.com/in/anamsoomro/" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/anamsoomro" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://medium.com/@anamsoomroed" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-medium"></i>
        </a>
        <a href="https://www.youtube.com/channel/UC2q6ffKH0of1asvLXD2H2aA" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-youtube"></i>
        </a>
      </div>
      </div>

    </div>

  )
}

export default Summary