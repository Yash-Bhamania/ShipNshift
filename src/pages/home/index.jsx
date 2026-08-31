import React from 'react'
import Hero from '../../components/Hero'
import TrustSection from '../../components/TrustSection'
import Services from '../../components/Services'
import Process from '../../components/Process'
import WhyChoose from '../../components/WhyChoose'
import CTA from '../../components/CTA'

const Home = () => {
  return (
    <div>
      <Hero />
      <TrustSection/>
      <Services/>
      <Process/>
      <WhyChoose/>
      <CTA/>
    </div>
  )
}

export default Home