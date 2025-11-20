import React, { useEffect } from 'react'
import AboutHero from '../../Component/AboutHero/AboutHero.jsx'
import AboutOverview from '../../Component/AboutOverview/AboutOverview.jsx'
import AboutBenefits from '../../Component/AboutBenefits/AboutBenefits.jsx'
import AboutContact from '../../Component/AboutContact/AboutContact.jsx'

export default function About(){
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })
    elements.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return (
    <main className="page" aria-labelledby="about-hero-title">
      <AboutHero />
      <AboutOverview />
      <AboutBenefits />
      <AboutContact />
    </main>
  )
}
