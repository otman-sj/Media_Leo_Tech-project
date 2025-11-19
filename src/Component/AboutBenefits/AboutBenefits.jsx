import React from 'react'
import './AboutBenefits.css'

const items = [
  {
    id: '01',
    title: 'Maximized Conversion Rate',
    text: "We don't just increase traffic; we optimize every digital touchpoint through specialized UI/UX design to ensure higher sales and lead generation for your industry.",
  },
  {
    id: '02',
    title: 'Guaranteed Strategic Clarity',
    text: 'Access to an integrated blueprint where all your digital and business activities (from SEO to training) align under one cohesive, results‑driven strategy.',
  },
  {
    id: '03',
    title: 'Risk‑Mitigated Investment',
    text: 'Focus on measurable ROI. We prioritize actions that guarantee a tangible return on your marketing and design investment, eliminating guesswork and wasteful spending.',
  },
  {
    id: '04',
    title: 'Affordable Pricing',
    text: "With Weekend UX, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning.",
  },
  {
    id: '05',
    title: 'Time and Resource Savings',
    text: 'End the need to hire multiple agencies. Our comprehensive service model covers all your needs—design, content, marketing, and training—under one roof.',
  },
  {
    id: '06',
    title: 'Empowered Ownership & Training',
    text: "Custom eLearning makes your team effective; it's the perfect delivery method for sustainable results.",
    cta: 'Read More',
  },
]

export default function AboutBenefits(){
  return (
    <section className="about-benefits" aria-labelledby="about-benefits-title">
      <div className="about-benefits__wrap">
        <p className="about-benefits__eyebrow">Our Benefits</p>
        <h2 id="about-benefits-title" className="about-benefits__title">By Joining WEEKENS UX Platform,<br/>One Can Avail a Lot Of Benefits.</h2>
        <p className="about-benefits__subtitle">Install our top‑rated dropshipping app to your e‑commerce site and get access to US Suppliers, AliExpress vendors, and the best.</p>
        <div className="benefits-grid" role="list">
          {items.map((b) => (
            <article key={b.id} className="benefit-card" role="listitem">
              <div className="benefit-card__badge" aria-hidden="true">{b.id}</div>
              <h3 className="benefit-card__title">{b.title}</h3>
              <p className="benefit-card__text">{b.text}</p>
              {b.cta && (
                <a href="#read" className="benefit-card__cta" aria-label={b.cta}>{b.cta}</a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}