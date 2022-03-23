import React from 'react'
import './nav.css';
import {Link} from "react-router-dom";
import { Context } from "../context/Context";
import { useContext } from "react";

function Nav() {
  const {user, dispatch} = useContext(Context);
  
  const handleLogout = () => {
    dispatch({type: "LOGOUT"})
  }
  return (


    <nav className="navbar navbar-expand-lg navbar-light nav-wrappp">
      <a className="navbar-brand" href="#" style={{color: "white", fontSize: "25px", fontWeight: "bold"}}>Website</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active light">
            <a className="nav-link" style={{color: "rgb(180, 178, 178)"}} href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/eventlink" style={{color: "rgb(180, 178, 178)"}}>Events</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/aboutUs" style={{color: "rgb(180, 178, 178)"}}>About Us</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#" style={{color: "rgb(180, 178, 178)"}}>Contact Us</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <button className="btn btn-outline-success my-2 my-sm-0 nav-login" type="submit" style={{color: "white"}} onClick={handleLogout} to="/login">
            {!user && "Login/Register"}
            {/* LOGIN */}
            <Link className="nav-login" to="/login">{user && "LOGOUT"}</Link>
            </button>
        </form>
      </div>
    </nav>
  );
}

export default Nav