import React from 'react'

function Nav () {
  return (
    <div className="navbar-fixed">
      <nav>
      <div class="nav-wrapper black ">
        {
          window.location.href.includes("background") || window.location.href.includes("projects")
          ? <div class="brand-logo right hide-on-med-and-down">ANAM SOOMRO</div>
          : null
        }
        <ul >
          <li><a className="nav-link" href="/">ABOUT ME</a></li>
          <li><a className="nav-link" href="/background">BACKGROUND</a></li>
          <li><a className="nav-link" href="/projects">PROJECTS</a></li>
        </ul>
        </div>
      </nav>
      </div>


  )
}

export default Nav