import React from 'react'
import './Hero.css'
import heroimg from '../assets/heroimgbg.png';

import Navbar from './Navbar';

const Hero = () => {
  return (
      <div className="herocontainer">
        

        <div className="herotitle">


          <h2 className='maintitle'>
          The goal of true education is a holistic development

          </h2>
          <h3 className='subtitle'>
          atque dolorem iure,
 eum quia reprehenderit voluptatibus laudantiurepellendus

            
          </h3>
        <img className='herobg' src={heroimg} alt="" />

        </div>

        <div className="cta">
          <div className="btn1"> 
          <h2 className='button'> contact us</h2>
          </div>

          <div className="btn2"> 
          <h2 className='button'>apply now</h2>
          </div>
        </div>

      </div>
       

       
  )
}

export default Hero
