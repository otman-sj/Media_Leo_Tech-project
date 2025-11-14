import React from 'react'
import './index.css'
import Header from './Component/Header/Header.jsx'
import Hero from './Component/Main/Hero.jsx'
import Benefits from './Component/Benefits/Benefits.jsx'
import Services from './Component/Services/Services.jsx'



function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Hero />
      <Benefits />
      <Services />
    </div>
  )
}

export default App
