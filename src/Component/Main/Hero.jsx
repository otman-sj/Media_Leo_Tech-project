import React from 'react'
import './Hero.css'
import mainImg from '../../assets/mainImg.jpg'
import icon1 from '../../assets/1.svg'
import icon2 from '../../assets/2.svg'
import icon22 from '../../assets/22.svg'
import icon99 from '../../assets/99.svg'
import vector from '../../assets/Vector.svg'
import vector1 from '../../assets/Vector-1.svg'
import logoSvg from '../../assets/Logo.svg'

export default function Hero() {
  return (
    <div>
      <div className='main'>
        <h1>Welcome To <span>M</span>edia<br></br> Leo Tech</h1>
        <p>Your strategic partner who blueprints your vision into unstoppable digital execution.</p>
        <div className='hero-cta'>
          <a href="#" className="cta-btn cta-btn--primary">Start Now</a>
          <a href="#" className="cta-btn cta-btn--secondary">Watch our Story <span className="play-icon" aria-hidden="true"></span></a>
        </div>
        <div className='hero-media'>
          <img src={mainImg} alt="" />
        </div>
      </div>
      <div className='brands'>
        <ul className='brands__list'>
          <li><img src={icon1} alt="brand" /></li>
          <li><img src={icon2} alt="brand" /></li>
          <li><img src={icon22} alt="brand" /></li>
          <li><img src={logoSvg} alt="brand" /></li>
          <li><img src={vector} alt="brand" /></li>
          <li><img src={vector1} alt="brand" /></li>
          <li><img src={icon99} alt="brand" /></li>
        </ul>
      </div>
    </div>
  )
}
