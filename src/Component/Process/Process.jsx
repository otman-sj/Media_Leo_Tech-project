import React from 'react'
import './Process.css'
import searchSvg from '../../assets/search.svg'
import peopleSvg from '../../assets/people.svg'
import growthSvg from '../../assets/growth arrow.svg'
import rocketSvg from '../../assets/rocket.svg'

export default function Process() {
  const steps = [
    { key: 1, title: 'EVALUATE YOUR NEEDS', desc: 'Submit your request online for free and one of our digital marketing experts will contact you to evaluate your needs.' },
    { key: 2, title: 'RECEIVE A PROPOSAL', desc: 'Receive a competitive proposal with the best strategies tailored to your goals and budget.' },
    { key: 3, title: 'SCHEDULE YOUR CAMPAIGN', desc: 'Choose the best timing and approach for your campaign according to your priorities and objectives.' },
    { key: 4, title: 'RELAX AND LET US WORK', desc: 'Sit back and let our team execute your marketing campaign to maximize results.' }
  ]
  const icons = [searchSvg, peopleSvg, growthSvg, rocketSvg]

  return (
    <>
      <div className="process-intro">
        <h2 className="process-intro__title">Our Proven <span>Work</span> Process</h2>
        <p className="process-intro__subtitle">A structured and personalized approach to transform your digital presence into business success.</p>
      </div>
      <section className="process" aria-labelledby="process-title">
        <h2 id="process-title" className="sr-only">How it works</h2>
        <ol className="process__grid" role="list">
          {steps.map((s, i) => (
            <li key={s.key} className="step">
              <h3 className="step__title">{s.title}</h3>
              <div className="step__icon-badge">
                <span className="step__icon">
                  <img src={icons[i]} alt="" aria-hidden="true" />
                </span>
                <span className="step__badge" aria-hidden="true">{s.key}</span>
              </div>
              <span className="step__connector" aria-hidden="true"></span>
              <p className="step__desc">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}