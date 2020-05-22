import React from 'react'
// import myImage from '../images/anam.jpg'
// console.log(myImage) // => /static/media/anam.0dc8093b.jpg
import EmailForm from '../components/EmailForm'
import M from "materialize-css";


function Summary () {

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  });


  return (
    <div className="summary">

      <div className="image">
        <img src={require('../images/media.io_anam.jpg')}></img>
        {/* <img src={myImage}></img> */}
      </div>

      <div className="text">
        <h1> ANAM SOOMRO </h1>
        <p> I'm a full-stack developer with a background in architecture, engineering, and construction. I am excited to take my career from focusing on the built environment to now building on the internet. </p>
        
        {/* <p> Challenges and purpose are what keep me motivated and engaged, and whats make me exctied about coding. But what's kept me hooked is seeing things go from 0 to 100 with my own hands.</p> */}
        <p> Throughout my career I found to be most engaged when confronted with new challenges, hands-on problem solving, working with the team to find the "bugs" in our workflow, and collaborating on how to eliminate them. The itch for more is what drew me to programming, but what's kept me hooked has been seeing projects go from 0 to 100.</p>
        
        <p> I currently build with Ruby on Rails, JavaScript, React, Redux, HTML, and CSS. Although I have been doing solo work to hone my skills, I actively seek out developer friends to share and practice with. Interested? Get in <a class="modal-trigger" href="#modal1"> touch</a>!</p>
        
        <p> Despite toying around with code behind a screen all day, I belong outside. Between riding my bike and laying in the grass, I like to find rocks and flowers to take the outdoors back home with me. </p>
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

      <div id="modal1" class="modal bottom-sheet">
        <div class="modal-content">
          <i class="material-icons modal-close">clear</i>
          <EmailForm />
        </div>
      </div>

    </div>

  )
}

export default Summary