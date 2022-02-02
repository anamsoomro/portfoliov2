import React from 'react'
import pdf from '../images/Soomro_Resume.pdf'
import M from "materialize-css";
import EmailForm from './EmailForm'


function Background () {

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  });

  return (
      <div>

        <div class="container">
          <div class="timeline-block timeline-block-right">
            <div class="marker"></div>
            <div class="timeline-content">
              <h3>Human Being</h3>
              <h4>California</h4>
              <span>08/94&lrm; - present&lrm; </span>
              <p> I love hearing other's perspectives and am always down to chat. Don't be shy, <a class="modal-trigger" href="#modal1">email</a> me or message me on <a href="https://www.linkedin.com/in/anamsoomro/" target="_blank" rel="noopener noreferrer">LinkedIn</a>!</p>
            </div>
          </div>
          <div class="timeline-block timeline-block-left">
            <div class="marker"></div>
            <div class="timeline-content">
              <h3>Software Development Engineer</h3>
              <h4>Skilljar</h4>
              <span>12/21&lrm; - present&lrm; </span>
              <p> Enhancing our ever-growing <a href="https://www.skilljar.com/product/">product</a> one line of code at a time!&lrm; </p>
            </div>
          </div>
          <div class="timeline-block timeline-block-right">
            <div class="marker"></div>
            <div class="timeline-content">
              <h3>Service and Support Engineer</h3>
              <h4>Skilljar</h4>
              <span>08/20&lrm; - 12/21&lrm; </span>
              <p> Solved problems by being the bridge between engineering, product and customer success. </p>
            </div>
          </div>
          <div class="timeline-block timeline-block-left">
            <div class="marker"></div>
            <div class="timeline-content">
              <h3>Software Engineering</h3>
              <h4>Flatiron School</h4>
              <span>01/20&lrm; - 05/20&lrm; </span>
              <p> Built full-stack applications using Ruby and JavaScript frameworks. Check out my <a href="/projects">projects</a> to see my evolution from week 1 to week 15.&lrm;</p>
            </div>
          </div>
          <div class="timeline-block timeline-block-right">
            <div class="marker"></div>
            <div class="timeline-content">
              <h3>Project Engineer</h3>
              <h4>The Beck Group</h4>
              <span>03/19 - 01/20</span>
              <p> Oversaw construction of the central plaza and overall sustainability at the <a href='https://www.google.com/maps/@32.7797885,-96.7995636,3a,75y,146.59h,98.21t/data=!3m6!1e1!3m4!1s1906U5XlCSt3Wy0utkaO0A!2e0!7i16384!8i8192?hl=en' target="_blank" rel="noopener noreferer">AT&T Discovery District</a> rennovation in the heart of Downtown Dallas. Led them to <a href='https://www.sustainablesites.org/' target='_blank' rel='noopener noreferer'>SITES</a> certication!</p>
            </div>
          </div>
          <div class="timeline-block timeline-block-left">
            <div class="marker"></div>
            <div class="timeline-content">
              <h3>Sustainability Consultant</h3>
              <h4>The Beck Group</h4>
              <span>05/18&lrm; - 03/19&lrm;</span>
              <p>Advised architecture teams on <a href='https://www.beckgroup.com/about-beck/services/sustainablity/' target="_blank" rel='noreferer noopener'>sustainability</a> through quantitative analysis on energy performance, but also holistically from the paint on the walls to the daylight in a space.&lrm; </p>
            </div>
          </div>
          <div class="timeline-block timeline-block-right">
            <div class="marker"></div>
            <div class="timeline-content">
              <h3>Energy Modeler</h3>
              <h4>alliantgroup</h4>
              <span>06/16 - 04/18 </span>
              <p> Quanitfied and verfied energy performace through simulations of buildings ranging prisons, airplane hangars, schools, dorms, hospitals, and more.  </p>
            </div>
          </div>
          <div class="timeline-block timeline-block-left">
            <div class="marker"></div>
            <div class="timeline-content">
              <h3>Civil and Environmental Engineering</h3>
              <h4>University of Houston</h4>
              <span>08/12&lrm; - 05/16&lrm;</span>
              <p>Kickstarted a coffee addiction.&lrm;</p>
            </div>
          </div>
          <div class="timeline-block timeline-block-right">
            <div class="marker"></div>
            <div class="timeline-content">
              <h3>Civil Engineering Intern</h3>
              <h4>A&S Engineers</h4>
              <span>06/15 - 12/15</span>
              <p>Learned about the management, design, and construction of the infrastructure that gets water to and from you.</p>
          </div>
        </div>
      </div>

      <div className="center-text">
        <h5> check out my <a href={pdf} target="_blank" el="noopener noreferrer">resume</a> for more info</h5>
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

export default Background