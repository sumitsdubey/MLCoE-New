import React from 'react'
import styles from '../css/OurDomain.module.css'
import ml_img from '../images/ML-Icon.png'
import wd_img from '../images/WebD-Icon.png'
import uiux_img from '../images/UIUX-Icon.png'

function OurDomain() {
  return (
    <>
    <section className={`${styles.section_our_domain} w-full mt-10 pb-20`}>
        <div className="container">
            <div className={`${styles.top_section} w-full`}>
                <p className='text-[#ffffff90]'>OUR DOMAINS</p>
                <h1 className='mt-5'>Beyond Limitations: <span>Technology </span> that <br /> Breaks Barriers</h1>
            </div>
            <div className={`${styles.bottom_section} mt-16`}>
                <div className={`${styles.card}`}>
                    <img src={ml_img} alt="" />
                    <h1>Machine Learning</h1>
                    <p>Transforming data into intelligent insights for a smarter tomorrow.</p>
                </div>
                <div className={`${styles.card}`}>
                    <img src={wd_img} alt="" />
                    <h1>Web Development</h1>
                    <p>Crafting seamless and dynamic web experiences that engage and inspire.</p>
                </div>
                <div className={`${styles.card}`}>
                    <img src={uiux_img} alt="" />
                    <h1>UI/UX Desiging</h1>
                    <p>Designing captivating interfaces that delight users at every touchpoint.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default OurDomain