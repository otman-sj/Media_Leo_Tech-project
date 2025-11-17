import React, { useEffect, useState } from 'react'
import './index.css'
import Header from './Component/Header/Header.jsx'
import Footer from './Component/Footer/Footer.jsx'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Blog from './Pages/Blog/Blog.jsx'
import ServicesPage from './Pages/Services/ServicesPage.jsx'
import Industries from './Pages/Industries/Industries.jsx'
import Contact from './Pages/Contact/Contact.jsx'



function App() {
  const [route, setRoute] = useState(window.location.pathname || '/')
  useEffect(() => {
    const onPop = () => setRoute(window.location.pathname || '/')
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  const navigate = (path, e) => { if (e) e.preventDefault(); if (path !== route) { window.history.pushState({}, '', path); setRoute(path) } }
  const Page = route === '/' ? Home
    : route === '/about' ? About
    : route === '/blog' ? Blog
    : route === '/services' ? ServicesPage
    : route === '/industries' ? Industries
    : route === '/contact' ? Contact
    : Home
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header route={route} onNavigate={navigate} />
      <Page onNavigate={navigate} />
      <Footer onNavigate={navigate} />
    </div>
  )
}

export default App
