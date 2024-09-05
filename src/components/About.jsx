import React from 'react'
import styles from '../css/About.module.css'
import innovate from '../images/graph.png'
import empower from '../images/handshake.png'
import transform from '../images/rocket.png'

function About() {
    return (
        <>
            <section className={`${styles.about_section} w-full mt-20 px-10 pb-20`}>
                <div className={`${styles.container} w-full`}>
                    <div className={`${styles.top}`}>
                        <p className='text-[#ffffff90]'>ABOUT US</p>
                        <h1 className={`${styles.heading} mt-5 font-[600]`}>Connecting Minds, <span> Advancing</span>    <br />Machine Learning</h1>
                    </div>
                    <div className={`${styles.bottom} flex flex-wrap justify-between mt-16`}>
                        <div className={`${styles.left} w-[40%] mx-auto`}>
                            <div className={`${styles.left_card}`}>
                                <div className="card_img">
                                    <img src={innovate} alt="" />
                                </div>
                                <div className={`${styles.card_content}`}>
                                    <h1 className='text-xl w-500'>Innovate</h1>
                                    <p className='text-s'>Pioneer the future of machine mm learning with groundbreaking nnnn research.</p>
                                </div>
                            </div>
                            <div className={`${styles.left_card}`}>
                                <div className="card_img">
                                    <img src={empower} alt="" />
                                </div>
                                <div className={`${styles.card_content}`}>
                                    <h1 className='text-xl w-500'>Empower</h1>
                                    <p className='text-s'>Democratize knowledge by making machine learning accessible.</p>
                                </div>
                            </div>
                            <div className={`${styles.left_card}`}>
                                <div className="card_img">
                                    <img src={transform} alt="" />
                                </div>
                                <div className={`${styles.card_content}`}>
                                    <h1 className='text-xl w-500'>Transform</h1>
                                    <p className='text-s'>Drive impact with machine learning impact solutions that reshape industries.</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.right} w-[40%] m-auto`}>
                            <video autoPlay controls src=""></video>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About