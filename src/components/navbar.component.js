import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <Link to ="/" className="navbar-brand" >ExerciseTracker</Link>
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
      <Link to ="/" className="nav-link" >Exercises</Link>
      </li>
      <li className="nav-item">
        <Link to ="/create" className="nav-link" >Create Exercise Log</Link>
      </li>
      <li className="nav-item">
        <Link to ="/user" className="nav-link" >Create User</Link>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar
