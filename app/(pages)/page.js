import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Powered from '../components/Powered'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div><Navbar/>
    <HeroSection/>
    <Powered/>
    <Footer/>
    </div>
  )
}

export default page