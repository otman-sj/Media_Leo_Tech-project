import React from 'react'
import './index.css'
import Header from './Component/Header/Header.jsx'
import Main from './Component/Main/Hero.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Main />
    </div>
  )
}

export default App
