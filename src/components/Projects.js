
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
        <h3>MONEYMOON </h3>
        <MoneyMoon/> 
      </div>
      <div> 
        <h3>ATOMICJOB </h3>
        <AtomicJob/> 
      </div>
      <div> 
        <h3>PICTURE SHUFFLE </h3>
        <PictureShuffle/> 
      </div>
      <div> 
        <h3>CAPTIONIT!</h3>
        <CaptionIt/> 
      </div>
      <div> 
        <h3>TYPE WARS </h3>
        <TypeWars/> 
      </div>
      <div className="project"> 
        wanna check out how I made this site? 
        <button class="waves-effect waves-light btn blue-grey" href="https://www.youtube.com/watch?v=1CsJ10XzwuM" target="_blank">code</button>
      </div>
    </div>
  )
}

export default Projects