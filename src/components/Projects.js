
import React, { useEffect } from 'react';
import MoneyMoon from '../components/MoneyMoon'
import AtomicJob from '../components/AtomicJob'
import PictureShuffle from '../components/PictureShuffle'
import CaptionIt from '../components/CaptionIt'
import TypeWars from '../components/TypeWars'


function Projects () {

  return (
    <div className="page center-text">
      <div> 
        <MoneyMoon/> 
      </div>
      <div> 
        <AtomicJob/> 
      </div>
      <div> 
        <PictureShuffle/> 
      </div>
      <div> 
        <CaptionIt/> 
      </div>
      <div> 
        <TypeWars/> 
      </div>
      <div className="project"> 
        <p>Wanna check out how I made this portfolio? </p>
        <a class="waves-effect waves-light btn blue-grey" href="https://github.com/anamsoomro/portfoliov2" target="_blank" >code</a>
      </div>
    </div>
  )
}

export default Projects