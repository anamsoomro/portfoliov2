
import React, { useEffect } from 'react';
// import {Link} from 'react-router-dom'
// import M from "materialize-css";
import MoneyMoon from '../components/MoneyMoon'
import AtomicJob from '../components/AtomicJob'
import PictureShuffle from '../components/PictureShuffle'
import CaptionIt from '../components/CaptionIt'
import TypeWars from '../components/TypeWars'


function Projects () {

  return (
    <div className="page">
      <div> MONEYMOON <MoneyMoon/> </div>
      <div> ATOMICJOB <AtomicJob/> </div>
      <div> PICTURE SHUFFLE <PictureShuffle/> </div>
      <div> CAPTIONIT <CaptionIt/> </div>
      <div> TYPE WARS <TypeWars/> </div>
    </div>
  )
}

export default Projects