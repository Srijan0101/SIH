import React from 'react'
import "./SingleEvent.css"

function SingleEvent(props) {
  return (
    <div className='singleComponent'>

        <span>{props.name}</span>
        <span>{props.code}</span>
        <span>{props.organisation}</span>


    </div>
  )
}

export default SingleEvent