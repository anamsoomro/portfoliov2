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
      </div>

      <div className="text">
        <h1> ANAM SOOMRO </h1>
        <p> Hey there! I'm a software engineer with a background in architecture, engineering, and construction. Whether it's a physical building or a virtual experience, I love seeing the progression of design and iteration. </p>
        
        <p> Despite choosing a career that has me behind a screen, I belong outside. Between riding my bike and laying in the grass, I like to find rocks and wildflowers to take the outdoors back home with me. </p>

        <p> Wanna chat? Get in <a class="modal-trigger" href="#modal1"> touch</a>! </p>
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