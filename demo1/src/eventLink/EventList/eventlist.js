import React, { useState } from 'react'
import Data from './MOCK_DATA2'
import SingleEvent from "../EventList/SingleEvent/SingleEvent"


function Eventlist() {

    const [content, setContent] = useState([]);

  return (
    <div className='eventComp'>
        {

            content && content.map((c) => 
            <SingleEvent 
            name={c.name}          // reqd(unique for all) 
            code={c.code}          // reqd(unique for all) 
            
            />)
        }

    </div>
  )
}

export default Eventlist