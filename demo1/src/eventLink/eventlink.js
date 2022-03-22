import React from 'react'
import "./eventlink.css";
import download from "./images/download.png";       
import webinar from "./images/webinar.jpg";       
import workshops from "./images/workshops.jpg";       

function eventlink() {
    return (

        <div className="events-wrapper">
          <h1 align="center">Events</h1>
          <div className="first3">
            <div className="event"><img src={download} /></div>
            <div className="event"><img src={webinar} className='eventimg'/></div>
            <div className="event"><img src={workshops} className='eventimg'/></div>
          </div>
          <div className="second3">
            <div className="event"><img src="desktop/college/demo/demo1/src/eventLink/images/workshops.jpg" className='eventimg'/></div>
            <div className="event" />
            <div className="event" />
          </div>
        </div>
      );
}

export default eventlink