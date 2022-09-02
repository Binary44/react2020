import React from 'react'
import hero from '../images/heroimg.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className='container'>
        <div className='content'>
            <h1>make <br /> Remote  Work</h1>
            <p>Get your team in sync, no matter your location. <br /> Streamline processs, create team rituals, and <br />watch producivity solar.</p>
            <button>Learn More</button>
        </div>
        <div>
            <img className='image' src={hero} alt="" />
        </div>
    </div>
  )
}

export default Hero