import React from 'react'
import BlogHero from '../../Component/BlogHero/BlogHero.jsx'
import './Blog.css'
import searchIcon from '../../assets/search.svg'
import BlogIntro from '../../Component/BlogIntro/BlogIntro.jsx'

export default function Blog(){
  return (
    <main className="blog-page" aria-labelledby="blog-title">
      <BlogHero />
      <section className="blog-search" aria-label="Search posts">
        <div className="blog-search__container">
          <div className="blog-search__bar">
            <img src={searchIcon} alt="" className="blog-search__icon" />
            <input type="text" className="blog-search__input" placeholder="Search" />
          </div>
        </div>
      </section>
      <BlogIntro />
    </main>
  )
}