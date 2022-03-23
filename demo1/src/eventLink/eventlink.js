import React from 'react'
import "./eventlink.css";
import international from "./images/international.jpg";       
import webinar from "./images/webinar.jpg";       
import workshops from "./images/workshops.jpg";       
import seminar from "./images/seminar.png";
import talks from "./images/tech.png";
import hackathon from "./images/hackathon.webp";
import Nav from '../Nav/nav';
import Footer from '../Home/Footer/Footer';
import { Link } from 'react-router-dom';
function eventlink() {
    return (

      <>
      <Nav />

      <div className="events-wrapper">
        <h1 align="center" className="evetxt">Events</h1>
        <div className='search-wrapper'>
        <input type="text" className="searchbar" placeholder="Search..."> 
        </input> 
        <button><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
              </path>
            </svg></button>
        </div>
          
        <div className="first3">
          <div className="event">
            <a href='/eventList'>
              
            <img src={international} className="event-imgg" />
            </a>
          
          </div>
          <div className="event"><img src={seminar} className="event-imgg"/></div>
          <div className="event"><img src={webinar} className="event-imgg"/></div>
        </div>
        <div className="first3">
          <div className="event"><img src={workshops} className="event-imgg"/></div>
          <div className="event"><img src={hackathon} className="event-imgg"/></div>
          <div className="event"><img src={talks} className="event-imgg"/></div>
        </div>
        {/* <div class="first3">
            <div class="event"><img src="images/download.png"></div>
            <div class="event"><img src="images/seminar.png"></div>
            <div class="event"><img src="images/webinar.jpg"></div>
        </div> */}
        <div>
        </div>
      </div>
      <Footer />
      </>
      );
}

export default eventlink