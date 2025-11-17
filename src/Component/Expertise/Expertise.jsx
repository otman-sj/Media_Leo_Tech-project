import React from 'react'
import './Expertise.css'
import PeopleIcon from '../../assets/icons/fa7-solid_people-line.svg'
import ArrowIcon from '../../assets/icons/game-icons_tron-arrow.svg'
import GlobalIcon from '../../assets/icons/ri_global-fill.svg'
import GoalIcon from '../../assets/icons/octicon_goal-16.svg'
import RewardIcon from '../../assets/icons/marketeq_reward.svg'

export default function Expertise(){
  return (
    <section className="expertise" aria-labelledby="expertise-title">
      <div className="expertise__wrap">
        <h2 id="expertise-title" className="expertise__title">What Our <span className="accent">Expertise</span> Bring</h2>
        <p className="expertise__subtitle">Don't just take our word for it. Here's what our comprehensive digital marketing solutions can do for your business growth.</p>

        <div className="expertise__grid">
          <div className="xp-left">
            <div className="xp-brand">
              <div className="xp-badge" aria-hidden="true"><img src={GlobalIcon} alt="" aria-hidden="true" /></div>
              <div className="xp-brand__text">
                <div className="xp-brand__title">Media Leo Tech</div>
                <div className="xp-brand__subtitle">Your Trusted Digital Partner</div>
              </div>
            </div>

            <p className="xp-paragraph">Choose the expertise of a professional digital marketing agency in Morocco, present at every stage of your digital strategy, whether you're targeting local, national, or international markets.</p>
            <p className="xp-paragraph">Our tailored marketing solutions are designed to fit all budgets, delivering an excellent quality‑to‑price ratio whether you're based in Agadir, Marrakech, Casablanca, Rabat, or anywhere else in the world.</p>

            <div className="xp-callout">
              <div className="xp-badge" aria-hidden="true"><img src={GoalIcon} alt="" aria-hidden="true" /></div>
              <div className="xp-callout__text">
                <div className="xp-callout__title">Ready to take your business to the next level?</div>
                <p className="xp-paragraph">With Media Leo Tech, benefit from complete attention to detail, optimal budget management, and measurable results that drive your success forward.</p>
              </div>
            </div>
          </div>

          <div className="xp-right">
            <div className="xp-image">
              <div className="xp-stat xp-stat--top-left">
                <div className="xp-stat__badge" aria-hidden="true"><img src={PeopleIcon} alt="" aria-hidden="true" /></div>
                <div className="xp-stat__text">
                  <div className="xp-stat__value">500+</div>
                  <div className="xp-stat__label">Happy Clients</div>
                </div>
              </div>
              <div className="xp-stat xp-stat--bottom-right">
                <div className="xp-stat__badge" aria-hidden="true"><img src={ArrowIcon} alt="" aria-hidden="true" /></div>
                <div className="xp-stat__text">
                  <div className="xp-stat__value">250%</div>
                  <div className="xp-stat__label">Average ROI</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xp-features">
          <article className="xp-feature-card">
            <div className="xp-badge" aria-hidden="true"><img src={PeopleIcon} alt="" aria-hidden="true" /></div>
            <h3 className="xp-feature-title">Expert Team</h3>
            <p className="xp-feature-desc">Certified professionals with proven track records</p>
          </article>
          <article className="xp-feature-card">
            <div className="xp-badge" aria-hidden="true"><img src={GoalIcon} alt="" aria-hidden="true" /></div>
            <h3 className="xp-feature-title">Measurable Results</h3>
            <p className="xp-feature-desc">Data‑driven strategies that deliver real ROI</p>
          </article>
          <article className="xp-feature-card">
            <div className="xp-badge" aria-hidden="true"><img src={GlobalIcon} alt="" aria-hidden="true" /></div>
            <h3 className="xp-feature-title">Global Reach</h3>
            <p className="xp-feature-desc">Local expertise with international capabilities</p>
          </article>
          <article className="xp-feature-card">
            <div className="xp-badge" aria-hidden="true"><img src={RewardIcon} alt="" aria-hidden="true" /></div>
            <h3 className="xp-feature-title">24/7 Support</h3>
            <p className="xp-feature-desc">Dedicated account managers always available</p>
          </article>
        </div>
      </div>
    </section>
  )
}