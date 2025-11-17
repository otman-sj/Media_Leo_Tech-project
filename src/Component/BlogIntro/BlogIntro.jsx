import React from 'react'
import './BlogIntro.css'
import girlImg from '../../assets/gril_img.png'

export default function BlogIntro(){
  return (
    <section className="blog-intro" aria-labelledby="blog-intro-title">
      <div className="blog-intro__container">
        <div className="blog-intro__media" aria-hidden="true">
          <div className="pin-figure">
            <svg className="pin" viewBox="0 0 512 640" aria-hidden="true">
              <defs>
                <path id="pinPath" d="M256 16 C147 16 60 103 60 212 C60 366 256 624 256 624 C256 624 452 366 452 212 C452 103 365 16 256 16 Z"/>
                <clipPath id="pinClip">
                  <use href="#pinPath" />
                </clipPath>
              </defs>

              <use href="#pinPath" fill="none" stroke="#E9ECF1" strokeWidth="6" />
              <use href="#pinPath" fill="none" stroke="#F3F4F6" strokeWidth="1.5" opacity=".5" />

              <g clipPath="url(#pinClip)">
                <circle cx="240" cy="280" r="250" fill="#F59A23" />
                <image className="pin-img" href={girlImg} x="0" y="0" width="512" height="640" preserveAspectRatio="xMidYMid slice" />
              </g>
            </svg>
          </div>
        </div>
        <div className="blog-intro__content">
          <p className="blog-intro__eyebrow">Thank You For Reading!</p>
          <h2 id="blog-intro-title" className="blog-intro__title">Start Reading Our Latest Digital Insights</h2>
          <p className="blog-intro__text">
            Our blog is your essential resource for staying ahead in a fast-paced digital world.
            Dive into our expertly curated content that goes beyond theory, offering actionable strategies on all services,
            specialized industry marketing tactics, and best practices for leveraging digital assets to drive measurable,
            sustainable business growth.
          </p>
          <div className="blog-intro__stats" aria-label="Blog highlights">
            <div className="blog-intro__stat">
              <div className="blog-intro__stat-value">5/5</div>
              <div className="blog-intro__stat-label">Average User Content Rating</div>
            </div>
            <div className="blog-intro__stat">
              <div className="blog-intro__stat-value">100+</div>
              <div className="blog-intro__stat-label">In-Depth Articles Published</div>
            </div>
            <div className="blog-intro__stat">
              <div className="blog-intro__stat-value">15+</div>
              <div className="blog-intro__stat-label">Specialized Industry Categories</div>
            </div>
            <div className="blog-intro__stat">
              <div className="blog-intro__stat-value">10+</div>
              <div className="blog-intro__stat-label">Professional Guides</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}