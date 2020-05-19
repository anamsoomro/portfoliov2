import React from 'react'

function Nav () {
  return (
    <div className="navbar-fixed">
      <nav>
      {/* <div class="nav-wrapper blue-grey "> */}
      <div class="nav-wrapper black ">

        <div class="brand-logo right hide-on-med-and-down">anam soomro</div>
        <ul >
          <li><a className="nav-link" href="/">about me</a></li>
          <li><a className="nav-link" href="/background">background</a></li>
          <li><a className="nav-link" href="/projects">projects</a></li>
        </ul>
        </div>
      </nav>
      </div>


  )
}

export default Nav