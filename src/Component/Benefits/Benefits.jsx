import React from 'react'
import './Benefits.css'
import shieldIcon from '../../assets/shild_icon.svg'
import fileIcon from '../../assets/file_icon.svg'
import audienceIcon from '../../assets/audiens_icon.svg'

export default function Benefits(){
  return (
    <section className="benefits">
      <div className="benefits__wrap">
        <h2 className="benefits__title">Boost Your <span>Visibility</span> Online<br/>With Peace Of Mind</h2>
        <div className="benefits__grid">
          <div className="benefit">
            <div className="benefit__icon"><img src={shieldIcon} alt="Shield" /></div>
            <h3 className="benefit__heading">Digital Experts At Your Service</h3>
            <p className="benefit__text">Our team supports you every step of the way to grow your online presence and reach your marketing goals.</p>
          </div>
          <div className="benefit">
            <div className="benefit__icon"><img src={fileIcon} alt="Flexible" /></div>
            <h3 className="benefit__heading">Flexible Pricing Value Without Compromise.</h3>
            <p className="benefit__text">We deliver strategic marketing solutions specifically designed to fit all budgets, guaranteeing outstanding value for your investment with no hidden fees.</p>
          </div>
          <div className="benefit">
            <div className="benefit__icon"><img src={audienceIcon} alt="Transparency" /></div>
            <h3 className="benefit__heading">Transparency &amp; Trust</h3>
            <p className="benefit__text">You'll always know exactly what we're doing and the impact it's having on your business, giving you full control and confidence in our partnership.</p>
          </div>
        </div>
        <h3 className="benefits__subtitle">Our Digital <span className="accent">Solutions</span></h3>
        <p className="benefits__desc">Comprehensive digital marketing services designed to accelerate your business growth and establish a powerful online presence.</p>
      </div>
    </section>
  )
}