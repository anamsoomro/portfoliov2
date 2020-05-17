
import React from 'react'
import {Link} from 'react-router-dom'

function Projects () {
  return (
    <div className="page">

        <div class="card" >
          <Link to="/projects/moneymoon" >
            <img class="card-img-top" src={require('../images/moneymoon5.png')} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">moneymoon</h5>
            </div>
          </Link>
        </div>

        <div class="card">
          <Link to="/projects/atomic-job">
          <img class="card-img-top" src={require('../images/atomicjob.png')} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">atomic job</h5>
          </div>
          </Link>
        </div>

        <div class="card">
          <Link to="/projects/pictureshuffle">
            <img class="card-img-top" src={require('../images/pictureshuffle.png')} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">pictureshuffle</h5>
            </div>
          </Link>
        </div>

        <div class="card">
          <Link to="/projects/captionit">
            <img class="card-img-top" src={require('../images/captionit.png')} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">captionIt!</h5>
            </div>
          </Link>
        </div>

        <div class="card">
          <Link to="/projects/typewars">
          <img class="card-img-top" src={require('../images/typewars.png')} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">type wars</h5>
          </div>
          </Link>
        </div>

    </div>
  )
}

export default Projects