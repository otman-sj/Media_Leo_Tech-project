import React from 'react'
import './CTA.css'

export default function CTA(){
  return (
    <section className="cta-banner" aria-labelledby="cta-title">
      <div className="cta-banner__wrap">
        <h2 id="cta-title" className="cta-banner__heading">Ready to <span className="accent">Grow</span> Your Business?</h2>
        <p className="cta-banner__subtitle">Let's discuss how we can help you achieve your digital marketing goals. Get a free consultation and audit of your current online presence.</p>
        <div className="cta-banner__actions">
          <a href="#contact" className="cta-banner__button">Get Free Consultation<span aria-hidden="true"> →</span></a>
        </div>
      </div>
    </section>
  )
}