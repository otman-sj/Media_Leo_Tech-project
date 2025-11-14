import React from 'react'
import './Services.css'
import audienceIcon from '../../assets/audiens_icon.svg'
import cameraIcon from '../../assets/camera_icon.svg'
import codeIcon from '../../assets/code_icon.svg'
import searchIcon from '../../assets/search_icon.svg'
import paintIcon from '../../assets/paint_icon.svg'
import licIcon from '../../assets/arcticons_lic_icon.svg'
import arrowRight from '../../assets/button-arrow-right.svg'

export default function Services(){
  return (
    <section className="services">
      <div className="services__wrap">
        <div className="services__grid">
          <article className="service">
            <div className="service__image service__image--website"></div>
            <div className="service__card">
              <div className="service__badge"><img src={codeIcon} alt="Website icon" /></div>
              <h3 className="service__title">Website Creation</h3>
              <ul className="service__list">
                <li>Professional websites, e‑commerce platforms, and blogs</li>
                <li>Responsive Design</li>
                <li>SEO Optimized</li>
                <li>E‑commerce Ready</li>
              </ul>
              <button className="service__cta" aria-label="Learn more"><img src={arrowRight} alt="Go" /></button>
            </div>
          </article>

          <article className="service">
            <div className="service__image service__image--social"></div>
            <div className="service__card">
              <div className="service__badge"><img src={audienceIcon} alt="Social icon" /></div>
              <h3 className="service__title">Social Media Management</h3>
              <ul className="service__list">
                <li>Content Strategy</li>
                <li>Community Management</li>
                <li>Paid Advertising</li>
                <li>Performance Analytics</li>
              </ul>
              <button className="service__cta" aria-label="Learn more"><img src={arrowRight} alt="Go" /></button>
            </div>
          </article>

          <article className="service">
            <div className="service__image service__image--content"></div>
            <div className="service__card">
              <div className="service__badge"><img src={cameraIcon} alt="Content icon" className="icon icon--camera" /></div>
              <h3 className="service__title">Content Creation</h3>
              <ul className="service__list">
                <li>Video Production</li>
                <li>Photography</li>
                <li>Graphic Design</li>
              </ul>
              <button className="service__cta" aria-label="Learn more"><img src={arrowRight} alt="Go" /></button>
            </div>
          </article>

          <article className="service">
            <div className="service__image service__image--seo"></div>
            <div className="service__card">
              <div className="service__badge"><img src={searchIcon} alt="SEO icon" /></div>
              <h3 className="service__title">SEO Optimization</h3>
              <ul className="service__list">
                <li>Keyword Research</li>
                <li>On‑page SEO</li>
                <li>Link Building</li>
              </ul>
              <button className="service__cta" aria-label="Learn more"><img src={arrowRight} alt="Go" /></button>
            </div>
          </article>

          <article className="service">
            <div className="service__image service__image--ads"></div>
            <div className="service__card">
              <div className="service__badge"><img src={licIcon} alt="Ads icon" /></div>
              <h3 className="service__title">Digital Advertising</h3>
              <ul className="service__list">
                <li>Google Ads</li>
                <li>Facebook Ads</li>
                <li>Precise Audience Targeting</li>
              </ul>
              <button className="service__cta" aria-label="Learn more"><img src={arrowRight} alt="Go" /></button>
            </div>
          </article>

          <article className="service">
            <div className="service__image service__image--branding"></div>
            <div className="service__card">
              <div className="service__badge"><img src={paintIcon} alt="Branding icon" className="icon icon--paint" /></div>
              <h3 className="service__title">Branding</h3>
              <ul className="service__list">
                <li>Logo Design</li>
                <li>Brand Identity</li>
                <li>Style Guides</li>
                <li>Brand Strategy &amp; Positioning</li>
              </ul>
              <button className="service__cta" aria-label="Learn more"><img src={arrowRight} alt="Go" /></button>
            </div>
          </article>
        </div>
        <div className="services__footer">
          <a href="#" className="services__all">View All Services</a>
        </div>
      </div>
    </section>
  )
}