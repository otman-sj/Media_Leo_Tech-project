import React from 'react'
import Hero from '../../Component/Main/Hero.jsx'
import Benefits from '../../Component/Benefits/Benefits.jsx'
import Services from '../../Component/Services/Services.jsx'
import Process from '../../Component/Process/Process.jsx'
import Reviews from '../../Component/Reviews/Reviews.jsx'
import CTA from '../../Component/CTA/CTA.jsx'
import Expertise from '../../Component/Expertise/Expertise.jsx'

export default function Home({ onNavigate }){
  return (
    <>
      <Hero />
      <Benefits />
      <Services />
      <div className="services__footer">
        <a href="/services" className="services__all" onClick={(e)=> onNavigate && onNavigate('/services', e)}>View All Services</a>
      </div>
      <Process />
     <Reviews/>
     <CTA/>
     <Expertise/>
    </>
  )
}
