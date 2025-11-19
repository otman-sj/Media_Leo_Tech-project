import React from 'react'
import AboutHero from '../../Component/AboutHero/AboutHero.jsx'
import AboutOverview from '../../Component/AboutOverview/AboutOverview.jsx'
import AboutBenefits from '../../Component/AboutBenefits/AboutBenefits.jsx'
import AboutContact from '../../Component/AboutContact/AboutContact.jsx'

export default function About(){
  return (
    <main className="page" aria-labelledby="about-hero-title">
      <AboutHero />
      <AboutOverview />
      <AboutBenefits />
      <AboutContact />
    </main>
  )
}
