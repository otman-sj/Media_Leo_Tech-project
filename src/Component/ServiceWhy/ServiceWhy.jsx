import React from 'react'
import './ServiceWhy.css'
import imgLeft from '../../assets/Image-1.png'
import imgMid from '../../assets/Image.png'
import arrowRight from '../../assets/icons/Ic_Arrow.svg'

export default function ServiceWhy(){
  return (
    <section className="service-why" aria-labelledby="service-why-title">
      <div className="service-why__wrap">
        <div className="service-why__heading">
          <h2 id="service-why-title" className="service-why__title">Why Our Services</h2>
          <a href="#learn" className="service-why__link">
            <span>Learn More</span>
            <img src={arrowRight} alt="" className="service-why__link-icon" />
          </a>
        </div>
        <div className="service-why__media" aria-hidden="true">
          <img src={imgLeft} alt="" className="service-why__img service-why__img--left" />
          <img src={imgMid} alt="" className="service-why__img service-why__img--mid" />
          <div className="service-why__chip"></div>
        </div>
        <div className="service-why__content">
          <div className="service-why__text">
            <p>Our approach integrates high‑performance design with data‑driven marketing and essential business support. This ensures that every service is a foundational element for your long‑term success and market dominance.</p>
            <p>Your digital assets don’t just look excellent, but actively convert visitors into loyal, paying customers. By emphasizing measurable ROI and providing tailored training, we build sustainable systems that empower your business to scale and maintain its competitive advantage independently.</p>
          </div>
        </div>
        <div className="benefits__header">
          <h3 className="benefits__subtitle">Our Digital <span className="accent">Solutions</span></h3>
          <p className="benefits__desc">Comprehensive digital marketing services designed to accelerate your business growth and establish a powerful online presence.</p>
        </div>
      </div>
    </section>
  )
}