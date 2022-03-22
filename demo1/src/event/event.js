import React from 'react'
import "./event.css";
function event() {
    return (

        <div className="Events">
          <div className="heading">Upcoming Events</div>
          <div className="events-box">
            <div className="main-events" id="main-event-1">
              <div className="texting">Event Box 1</div>
              <div className="texting"><h2>25 March 2022</h2></div>
              <div className="texting">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit aliquid itaque adipisci sunt, nisi, voluptatum omnis, ea commodi soluta nihil cupiditate iure aperiam nostrum repellendus! Adipisci at iure aperiam doloremque.</div>
            </div>
            <div className="main-events" id="main-event-3">
              <div className="texting">Event Box 2</div>
              <div className="texting"><h2>25 March 2022</h2></div>
              <div className="texting">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, sunt ratione? Et neque, iure omnis unde minima consequuntur officiis culpa repudiandae asperiores nulla autem velit facilis facere ipsum ut expedita.</div>
            </div>
            <div className="main-events" id="main-event-3">
              <div className="texting">Event Box 3</div>
              <div className="texting"><h2>25 March 2022</h2></div>
              <div className="texting">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis velit libero molestiae. Ab, et eum consectetur numquam ipsam explicabo sint eius repellat quia nobis. Neque praesentium unde porro labore officiis?</div>
            </div>
          </div>
        </div>
      );
}

export default event