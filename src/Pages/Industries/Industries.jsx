import React from 'react'
import IndustriesHero from '../../Component/IndustriesHero/IndustriesHero.jsx'
import IndustriesSection from '../../Component/IndustriesSection/IndustriesSection.jsx'
import IndustriesTestimonials from '../../Component/IndustriesTestimonials/IndustriesTestimonials.jsx'
import IndustriesUpdates from '../../Component/IndustriesUpdates/IndustriesUpdates.jsx'
import IndustriesFeedback from '../../Component/IndustriesFeedback/IndustriesFeedback.jsx'

export default function Industries(){
  return (
    <main className="page industries-page" aria-labelledby="industries-hero-title">
      <IndustriesHero />
      <IndustriesSection />
      <IndustriesTestimonials />
      <IndustriesUpdates />
      <IndustriesFeedback />
    </main>
  )
}