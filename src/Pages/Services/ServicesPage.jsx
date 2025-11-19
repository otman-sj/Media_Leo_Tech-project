import React from 'react'
import Services from '../../Component/Services/Services.jsx'
import ServiceHero from '../../Component/ServiceHero/ServiceHero.jsx'
import './ServicesPage.css'
import ServiceWhy from '../../Component/ServiceWhy/ServiceWhy.jsx'

export default function ServicesPage(){
  return (
    <main className="services-page" aria-labelledby="services-title">
      <h1 id="services-title" className="sr-only">Services</h1>
      <ServiceHero />
      <ServiceWhy />
      <Services />
    </main>
  )
}