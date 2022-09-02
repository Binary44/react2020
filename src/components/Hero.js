import React from 'react'
import hero from '../images/heroimg.png'
import img1 from '../images/1.svg'
import img2 from '../images/2.svg'
import img3 from '../images/3.svg'
import img4 from '../images/4.svg'
import './Hero.css'

const Hero = () => {
  return (
    <div>
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
    <div className='icons'>
    <img className='image' src={img1} alt="" />
    <img className='image' src={img2} alt="" />
    <img className='image' src={img3} alt="" />
    <img className='image' src={img4} alt="" />
     </div> 
     </div>
  )
}

export default Hero