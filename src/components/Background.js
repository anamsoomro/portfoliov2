import React from 'react'
import pdf from '../images/Soomro_Resume4.pdf'

function Background () {
  return (
    <div>
    <div class="container">

    <div class="timeline-block timeline-block-right">
      <div class="marker"></div>
      <div class="timeline-content">
          <h3>seeking new oppurtunities</h3>
          <p>got an oppurtunity in mind? a project you want to collaborate on? just want to chat? <a href="mailto:anamsoomroed@gmail.com" target="_blank" rel="noopener noreferrer">email</a> me or connect with me on<a href="https://www.linkedin.com/in/anamsoomro/" target="_blank" rel="noopener noreferrer"> LinkedIn!</a> </p>
      </div>
    </div>

    <div class="timeline-block timeline-block-left">
      <div class="marker"></div>
      <div class="timeline-content">
          <h3>Software Engineering</h3>
          <h4>Flatiron School</h4>
          <span>01/20 - 05/20 </span>
          <p> immersed in full-stack development using Ruby and JavaScript. Check out my <a href="/projects">projects</a> to see the evolution from week 1 to week 15</p>
      </div>
    </div>

    <div class="timeline-block timeline-block-right">
      <div class="marker"></div>
      <div class="timeline-content">
          <h3>Project Engineer</h3>
          <h4>The Beck Group</h4>
          <span>03/19 - 01/20</span>
          <p> construction management and keeping things sustainable at the AT&T Discovery District project in the heart of Downtown Dallas</p>
      </div>
    </div>

    <div class="timeline-block timeline-block-left">
      <div class="marker"></div>
      <div class="timeline-content">
          <h3>Sustainability Consultant</h3>
          <h4>The Beck Group</h4>
          <span>05/18 - 03/19</span>
          <p>stretching past energy modeling to look at sustainiabilty as a whole from the paint that hits the walls, to how much daylight a space gets</p>
      </div>
    </div>

    <div class="timeline-block timeline-block-right">
      <div class="marker"></div>
      <div class="timeline-content">
          <h3>Energy Modeler</h3>
          <h4>alliantgroup</h4>
          <span>06/16 - 04/18 </span>
          <p>simulated enrgy performance of buildings from prisons to air plane hangars to qualify designers and builders for money back.</p>
      </div>
    </div>

    <div class="timeline-block timeline-block-left">
      <div class="marker"></div>
      <div class="timeline-content">
          <h3>Civil Engineering</h3>
          <h4>University of Houston</h4>
          <span>08/12 - 05/16</span>
          <p>discovered the magic of coffee</p>
      </div>
    </div>
    
    <div class="timeline-block timeline-block-right">
      <div class="marker"></div>
      <div class="timeline-content">
          <h3>Civil Engineering Intern</h3>
          <h4>A&S Engineers</h4>
          <span>06/15 - 12/15</span>
          <p>Learning about the design and construction of the infrastructure that gets water to and out of your home</p>
      </div>
    </div>
    </div>
    <div className="center-text">
      <h5> check out my <a href={pdf} target="_blank">resume</a> for more info</h5>
      </div>
    </div>

  )
}

export default Background