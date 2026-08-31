import React from 'react'
import Hero from '../../components/Hero'
import TrustSection from '../../components/TrustSection'
import Services from '../../components/Services'
import Process from '../../components/Process'
import WhyChoose from '../../components/WhyChoose'

const Home = () => {
  return (
    <div>
      <Hero />
      <TrustSection/>
      <Services/>
      <Process/>
      <WhyChoose/>
    </div>
  )
}

export default Home