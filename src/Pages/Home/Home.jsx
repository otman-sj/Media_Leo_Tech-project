import React from 'react'
import Hero from '../../Component/Main/Hero.jsx'
import Benefits from '../../Component/Benefits/Benefits.jsx'
import Services from '../../Component/Services/Services.jsx'
import Process from '../../Component/Process/Process.jsx'
import Reviews from '../../Component/Reviews/Reviews.jsx'
import CTA from '../../Component/CTA/CTA.jsx'
import Expertise from '../../Component/Expertise/Expertise.jsx'

export default function Home(){
  return (
    <>
      <Hero />
      <Benefits />
      <Services />
      <Process />
     <Reviews/>
     <CTA/>
     <Expertise/>
    </>
  )
}
