import React from 'react'
import './AboutOverview.css'
import rect14 from '../../assets/Rectangle 14.png'
import rect13 from '../../assets/Rectangle 13.png'
import sectionImg from '../../assets/Section Img.png'
import whiteArrow from '../../assets/icons/white_arrow.svg'

export default function AboutOverview(){
  return (
    <section className="about-overview" aria-labelledby="about-overview-title">
      <div className="about-overview__wrap">
        <div className="about-overview__left reveal" data-reveal>
          <h2 className="about-overview__eyebrow">About Us</h2>
          <h3 id="about-overview-title" className="about-overview__title">We Are Media Leo Tech Your Dedicated Strategic Partner Engineering Your Growth From Concept To Conversion.</h3>
          <p className="about-overview__intro">We believe true digital success requires more than isolated services; it demands an integrated strategy where design, content, and execution work in perfect alignment.</p>
          <p className="about-overview__intro">Our core strength lies in translating complex business visions into unstoppable digital realities. From building high‑conversion, specialized websites and mastering UI/UX for specific industries, to delivering full‑spectrum digital marketing (SEO, SEA, Social Media), and fortifying your foundation with robust business management solutions and specialized training—every touchpoint of your journey is covered.</p>
          <p className="about-overview__intro">Whether you are a local service aiming for market dominance or an enterprise seeking strategic import/export training, our certified experts focus on measurable ROI and sustained, long‑term success tailored precisely to your sector’s unique challenges.</p>
          <div className="about-overview__actions">
            <a href="#join" className="about-overview__button">Join Us <img src={whiteArrow} alt="" className="about-overview__icon" /></a>
          </div>
          <figure className="about-overview__figure" aria-hidden="true">
            <img src={sectionImg} alt="" loading="lazy" className="about-overview__figure-img" />
          </figure>
        </div>

        <div className="about-overview__right reveal" data-reveal>
          <div className="about-overview__media" aria-hidden="true">
            <img src={rect13} alt="" loading="lazy" className="about-overview__img about-overview__img--top" />
            <img src={rect14} alt="" loading="lazy" className="about-overview__img about-overview__img--mid" />
          </div>
          <section className="about-overview__features" aria-labelledby="features-title">
            <p className="about-overview__features-eyebrow">Features</p>
            <h3 id="features-title" className="about-overview__features-title">We are always working to provide you best of the features in all aspects.</h3>
            <ul className="about-overview__list" role="list">
              <li className="about-overview__item"><strong>We engineer digital success:</strong> We turn complex business visions into measurable realities.</li>
              <li className="about-overview__item"><strong>Integrated Solutions:</strong> A holistic strategy where design, content, and execution align perfectly.</li>
              <li className="about-overview__item"><strong>UI/UX Expertise:</strong> High‑conversion websites and custom User Experiences for specific industries.</li>
              <li className="about-overview__item"><strong>Full‑Spectrum Marketing:</strong> SEO, SEA, Social Media, and advanced Branding.</li>
              <li className="about-overview__item"><strong>Beyond the Digital:</strong> Robust business support and specialized training.</li>
              <li className="about-overview__item"><strong>Our Commitment:</strong> Measurable ROI and sustained, long‑term success.</li>
            </ul>
            <div className="about-overview__features-actions">
              <a href="#features" className="about-overview__learn">Learn More <img src={whiteArrow} alt="" className="about-overview__icon" /></a>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}