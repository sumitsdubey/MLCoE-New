import React from 'react'
import styles from '../css/Hero.module.css'
import hero_img from '../images/hero-bg.png'

function Hero() {
  return (
<>
    <section className={`${styles.hero_section}`}>
        <div className="hero mt-16">
            <div className="top">
                <p className={`${styles.text_top} text-white text-[1.2rem]`}>INNOVATE EMPOWER TRANSFORM</p>
                <h1 className='font-semibold text-[3.5rem] mt-5'>Empowering Innovation through <br/> Machine Learning</h1>
            </div>
            <div className={`${styles.bottom} w-full mt-8`}>
            </div>
        </div>
    </section>
</>
  )
}

export default Hero