import Home from '@/app/components/home'
import React from 'react'
import Finance from './components/finance'
import Footer from './components/footer'
import FAQs from './components/faqs'
import TestimonialSection from './components/TestimonialSection'

const page = () => {
  return (
    <div>
      <Home/>
      <Finance/>
      <FAQs/>
      <TestimonialSection/>
      <Footer/>
    </div>
  )
}

export default page

