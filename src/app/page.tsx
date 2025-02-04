import Home from '@/app/components/home'
import React from 'react'
import Finance from './components/finance'
import Footer from './components/footer'
import TestimonialSection from './components/TestimonialSection'

const page = () => {
  return (
    <div>
      <Home/>
      <Finance/>
      <TestimonialSection/>
      <Footer/>
    </div>
  )
}

export default page

