import React from 'react'
import heroImage from '../assets/heroimg.jpg'

const Hero = () => {
  return (
    <>
    <section className="hero">
      <img src={heroImage} alt="" />
      <div className="hero-cta">
        <h1 className="hero-cta__header">
          <span className="hero-cta__header-primary"> velkommen til </span>
          <span className="hero-cta__header-secondary"> asfaltteknikk </span>
        </h1>
        <button className="btn cta-btn">Våre Tjenester</button>
      </div>
    </section>
    </>
  )
}

export default Hero