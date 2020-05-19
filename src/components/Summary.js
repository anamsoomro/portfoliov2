import React from 'react'
// import myImage from '../images/anam.jpg'
// console.log(myImage) // => /static/media/anam.0dc8093b.jpg


function Summary () {
  return (
    <div className="summary">

      <div className="image no-scroll">
        <img src={require('../images/anam2.jpg')}></img>
        {/* <img src={myImage}></img> */}
      </div>

      <div className="text no-scroll">
      <div className="image-mobile"></div> 
      <h1> ANAM SOOMRO </h1>
      <p> I'm a full-stack developer with a background in architecture, engineering and construction. Excited to take my career dedicated to the built environment to now building on the internet. </p>
      <p> Challenges and purpose are what have kept me motivated and engaged, part of the draw that brought me to coding. But what's kept me hooked, is seeing things go from 0 to a 100 with my own hands.</p>
      <p> My current toolset includes Ruby on Rails, JavaScript, React, Redux, HTML and CSS. </p>
      <p> Despite toying around with code behind a screen all day, I belong outside. Between riding my bike and laying in the grass, I like to find rocks and flowers to take the outdoors back in with me. </p>

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