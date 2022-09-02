import React from 'react'
import hero from '../images/heroimg.png'

const Hero = () => {
  return (
    <div className='container'>
        <div className='content'>
            <h1>make Remote <br /> Work</h1>
            <p>Get your team in sync, no matter your location. <br /> Streamline processs, create team rituals, and <br />watch producivity solar.</p>
            <button>Learn More</button>
        </div>
        <div className='image'>
            <img src={hero} alt="" />
        </div>
    </div>
  )
}

export default Hero