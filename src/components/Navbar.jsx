import React from "react";
import "../css/Style.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {

  return (
    <div>
      <nav id="navbar_color" className="navbar navbar-expand-lg navbar-dark bg fixed-top">
        <div className="container-fluid ">
          <NavLink id="navbar_logo" className="navbar-brand" to="/"> NamasteNews </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"> <NavLink id="navbar_links" className="nav-link active" aria-current="page" to="/">Home</NavLink></li>
              <li className="nav-item"> <NavLink id="navbar_links" className="nav-link " aria-current="page" to="/business">Business</NavLink></li>
              <li className="nav-item"> <NavLink id="navbar_links" className="nav-link " aria-current="page" to="/entertainment">Entertainment</NavLink></li>
              <li className="nav-item"> <NavLink id="navbar_links" className="nav-link " aria-current="page" to="/health">Health </NavLink></li>
              <li className="nav-item"> <NavLink id="navbar_links" className="nav-link " aria-current="page" to="/science">Science </NavLink></li>
              <li className="nav-item"> <NavLink id="navbar_links" className="nav-link " aria-current="page" to="/sports">Sports </NavLink></li>
              <li className="nav-item"> <NavLink id="navbar_links" className="nav-link " aria-current="page" to="/technology">Technology </NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}


export default Navbar;
