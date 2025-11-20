import React from 'react'
import ContactHero from '../../Component/ContactHero/ContactHero'
import ContactLead from '../../Component/ContactLead/ContactLead'

export default function Contact(){
  return (
    <main className="page" aria-label="Contact page" style={{ overflow: 'hidden' }}>
      <ContactHero />
      <ContactLead />
    </main>
  )
}