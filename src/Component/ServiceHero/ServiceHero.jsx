import React, { useRef, useState } from 'react'
import './ServiceHero.css'
import bgImg from '../../assets/Service_Hero.png'
import cardImg from '../../assets/0001.jpg'
import globeIcon from '../../assets/icons/Ic_Globe.svg'
import videoSrc from '../../assets/MediaLeo.mp4'

export default function ServiceHero(){
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)
  const handlePlay = () => { setPlaying(true) }
  return (
    <section className="service-hero" aria-labelledby="service-hero-title">
      <div className="service-hero__image" aria-hidden="true">
        <img src={bgImg} alt="" className="service-hero__img" />
        <div className="service-hero__overlay" />
      </div>
      <div className="service-hero__wrap">
        <div className="service-hero__content">
          <h1 id="service-hero-title" className="service-hero__title">
            Our Comprehensive <span className="service-hero__accent">Service</span> Offerings
          </h1>
          <p className="service-hero__text">
            Media Leo Tech has delivered over 100<br/> successful digital projects and integrated<br/> strategies across
            multiple key industries.<br/> Explore our full spectrum of specialized services<br/> below.
          </p>
          <button className="service-hero__cta" aria-label="Save Time">
            <img src={globeIcon} alt="" className="service-hero__cta-icon" />
            <span>Save Time</span>
          </button>
        </div>
        <aside className="service-hero__media" aria-label="Company media">
          <div className="service-hero__card">
            {playing ? (
              <video ref={videoRef} src={videoSrc} className="service-hero__card-video" controls autoPlay muted playsInline preload="auto" />
            ) : (
              <>
                <img src={cardImg} alt="" className="service-hero__card-img" onClick={handlePlay} />
                <button className="service-hero__play" aria-label="Play video" onClick={handlePlay}>
                  <span className="service-hero__play-triangle" />
                </button>
              </>
            )}
          </div>
        </aside>
      </div>
    </section>
  )
}