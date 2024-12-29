import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import About from '../component/About'
import Managment from '../component/Managment'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Managment/>
      
    </div>
  )
}

export default Homepage
