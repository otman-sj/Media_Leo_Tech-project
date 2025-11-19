import React from 'react'
import './BenefitsHeader.css'

export default function BenefitsHeader(){
  return (
    <section className="benefits-header" aria-label="Section header">
      <div className="benefits-header__wrap">
        <h3 className="benefits__subtitle">Our Digital <span className="accent">Solutions</span></h3>
        <p className="benefits__desc">Comprehensive digital marketing services designed to accelerate your business growth and establish a powerful online presence.</p>
      </div>
    </section>
  )
}