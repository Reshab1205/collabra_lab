import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/home">BioGene</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">Register</NavLink>
      </li>
      {/* <li className="nav-item">
        <NavLink className="nav-link" to="/samples">Samples</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/enter-samples">Enter Samples</NavLink>
      </li> */}
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="/test" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
          Samples
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink className="dropdown-item" to="/samples">Stored Samples</NavLink>
          <NavLink className="dropdown-item" to="/enter-samples">Enter Samples</NavLink>
          <div className="dropdown-divider"></div>
          <NavLink className="dropdown-item" to="/some">Something else here</NavLink>
        </div>
      </li>
      <li className="nav-item">
        <NavLink  to="/dis" className="nav-link disabled">Disabled</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact-us">Contact Us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/enter-haematology-report">EnterHaematologyReport</NavLink>
      </li>
    </ul>
    
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><NavLink className="nav-link" to="/home">Logout</NavLink></button>
    
    
    
  </div>
</nav>
    </>
  )
}

export default Navbar