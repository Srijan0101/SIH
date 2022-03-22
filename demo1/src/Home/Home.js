import React from 'react'
import Carousel from "../Home/Carousel/carousel"
import Event from "../Home/event/event"
import Nav from '../Nav/nav';
import Contact from './Contact/Contact';

function Home() {
  return (
    <div className='home'>
        <Nav />
        <Carousel />
        <Event />
        <Contact />
    </div>
  )
}

export default Home;