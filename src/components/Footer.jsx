import React from 'react'
import logo from '../images/logo.png'
import insta from '../images/insta-icon.png'
import linkdin from '../images/linkedin-icon.png'
import medium from '../images/medium.png'
import styles from '../css/Footer.module.css'

function Footer() {
    return (
        <>
            <section className={`${styles.section_footer} w-full pt-16`}>
                <div className="container mx-auto">
                    <div className="logo flex justify-center items-center">
                        <img src={logo} alt="" />
                    </div>
                    <div className="discription mt-8">
                        <h1 className='text-xl'>Where Learners Shape Tomorrow's Tech</h1>
                        <p className='text-[#ffffff90]'>INNOVATE EMPOWER TRANSFORM</p>
                    </div>
                    <div className={`${styles.footer_nav} mt-8 px-10`}>
                        <div className={`${styles.links} mx-auto`}>
                            <h1 className='text-xl'>Quick Links</h1>
                            <a href="#">Events</a>
                            <a href="#">Projects</a>
                            <a href="#">Our Team</a>
                        </div>
                        <div className={`${styles.links} mx-auto`}>
                            <h1 className='text-xl'>Wrrite to us</h1>
                            <a href="#">mlcoe.akgec@gmail.com</a>
                        </div>
                        <div className={`${styles.links} mx-auto`}>
                            <h1 className='text-xl'>Contact Us</h1>
                            <a href="#">+91-9811021619</a>
                            <a href="#">+91-9711605607</a>
                        </div>
                    </div>
                    <div className={`${styles.media}`}>
                        <a href="#"><img src={insta} alt="" /></a>
                        <a href="#"><img src={linkdin} alt="" /></a>
                        <a href="#"><img src={medium} alt="" /></a>
                    </div>
                    <div className={`${styles.hr_line}`}>

                    </div>
                    <div className="copyright mt-6 pb-10">
                        <p>©  Machine Learning Centre of Excellence</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Footer