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
              <h3>Seeking New Opportunities</h3>
              <p>Got an opportunity in mind? Project you want to collaborate on? Just want to chat? 
                <a class="modal-trigger" href="#modal1"> Email me </a>
                or connect with me on
                <a href="https://www.linkedin.com/in/anamsoomro/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>!
              </p>
            </div>
          </div>
          <div class="timeline-block timeline-block-left">
            <div class="marker"></div>
            <div class="timeline-content">
              <h3>Software Engineering</h3>
              <h4>Flatiron School</h4>
              <span>01/20 - 05/20 </span>
              <p> Full-stack development using Ruby and JavaScript framewiirks. Check out my <a href="/projects">projects</a> to see the evolution from week 1 to week 15.</p>
            </div>
          </div>
          <div class="timeline-block timeline-block-right">
            <div class="marker"></div>
            <div class="timeline-content">
              <h3>Project Engineer</h3>
              <h4>The Beck Group</h4>
              <span>03/19 - 01/20</span>
              <p> Construction management and keeping things sustainable at the AT&T Discovery District rennovation in the heart of Downtown Dallas.</p>
            </div>
          </div>
          <div class="timeline-block timeline-block-left">
            <div class="marker"></div>
            <div class="timeline-content">
              <h3>Sustainability Consultant</h3>
              <h4>The Beck Group</h4>
              <span>05/18 - 03/19</span>
              <p>Energy performance things, but also looking at sustainiabilty as a whole from the paint that hits the walls, to how much daylight a space gets.</p>
            </div>
          </div>
          <div class="timeline-block timeline-block-right">
            <div class="marker"></div>
            <div class="timeline-content">
              <h3>Energy Modeler</h3>
              <h4>alliantgroup</h4>
              <span>06/16 - 04/18 </span>
              <p>Simulated the energy performance of buildings from prisons to airplane hangars, rewarding designers and builders for susttainable design with money back in their pocket. </p>
            </div>
          </div>
          <div class="timeline-block timeline-block-left">
            <div class="marker"></div>
            <div class="timeline-content">
              <h3>Civil and Environmental Engineering</h3>
              <h4>University of Houston</h4>
              <span>08/12 - 05/16</span>
              <p>Kickstarted a coffee adddiction.</p>
            </div>
          </div>
          <div class="timeline-block timeline-block-right">
            <div class="marker"></div>
            <div class="timeline-content">
              <h3>Civil Engineering Intern</h3>
              <h4>A&S Engineers</h4>
              <span>06/15 - 12/15</span>
              <p>Learned about the design and construction of the infrastructure that gets water to and from your home.</p>
          </div>
        </div>
      </div>

      <div className="center-text">
        <h5> check out my <a href={pdf} target="_blank">resume</a> for more info</h5>
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