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


    <nav className="navbar navbar-expand-lg navbar-light bg-light nav-wrappp">
      <a className="navbar-brand" href="#">Website</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/eventlink">Events</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/aboutUs">About Us</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Contact Us</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <button className="btn btn-outline-success my-2 my-sm-0 nav-login" type="submit" onClick={handleLogout}>
            {!user && "Login/Register"}
            {/* LOGIN */}
            <Link to="/login">{user && "LOGOUT"}</Link>
            </button>
        </form>
      </div>
    </nav>
  );
}

export default Nav