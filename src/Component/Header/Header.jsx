import React, { useState } from 'react'

import './Header.css'
import logoSvg from '../../assets/Logo.svg'
import phoneIcon from '../../assets/phone-svgrepo-com.svg'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [language, setLanguage] = useState({ label: 'Select a langauge', flag: '' })
  const [showDefaultOption, setShowDefaultOption] = useState(true)
  return (
    <>
    <header className="header">
      <div className="wrap">
        <a className="logo" href="/">
          <img src={logoSvg} alt="Media Leo Tech" className="logo__img" />
        </a>
        <nav id="main-nav" className="nav" aria-label="Primary" data-open={open ? 'true' : 'false'}>
          <ul className="nav__list">
            <li><a className="nav__link nav__link--active" href="#">Home</a></li>
            <li><a className="nav__link" href="#">Blog</a></li>
            <li><a className="nav__link" href="#">Services</a></li>
            <li><a className="nav__link" href="#">Industries</a></li>
            <li><a className="nav__link" href="#">About us</a></li>
            <li><a className="nav__link" href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="actions">
          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen(!open)}
          >
            <span className="nav-toggle__bar"></span>
            <span className="sr-only">Toggle navigation</span>
          </button>
          <a className="btn btn--primary" href="tel:+212528222211">
            <img src={phoneIcon} alt="Phone" className="btn__icon" />
            +212 5 28 22 22 11
          </a>
          <div className="lang">
            <button
              className="btn btn--secondary lang__button"
              aria-haspopup="menu"
              aria-expanded={langOpen}
              onClick={() => setLangOpen(!langOpen)}
            >
              {language.flag ? <span className={`flag ${language.flag}`} aria-hidden="true"></span> : null}
              {language.label}
            </button>
            <ul className="lang__menu" data-open={langOpen ? 'true' : 'false'} role="menu">
              {showDefaultOption && (
                <li>
                  <button role="menuitem" className="lang__item" onClick={() => { setShowDefaultOption(false); setLangOpen(false) }}>Select a langauge</button>
                </li>
              )}
              <li>
                <button role="menuitem" className="lang__item" onClick={() => { setLanguage({ label: 'العربية', flag: 'fi fi-ma' }); setShowDefaultOption(false); setLangOpen(false) }}><span className="fi fi-ma flag" aria-hidden="true"></span>العربية</button>
              </li>
              <li>
                <button role="menuitem" className="lang__item" onClick={() => { setLanguage({ label: 'English', flag: 'fi fi-gb' }); setShowDefaultOption(false); setLangOpen(false) }}><span className="fi fi-gb flag" aria-hidden="true"></span>English</button>
              </li>
              <li>
                <button role="menuitem" className="lang__item" onClick={() => { setLanguage({ label: 'Français', flag: 'fi fi-fr' }); setShowDefaultOption(false); setLangOpen(false) }}><span className="fi fi-fr flag" aria-hidden="true"></span>Français</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}
