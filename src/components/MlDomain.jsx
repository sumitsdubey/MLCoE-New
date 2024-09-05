import React from 'react'
import { useState, useEffect } from 'react';
import styles from '../css/MlDomain.module.css'
import next from '../images/next.png'
import aero from '../images/aero.png'

function MlDomain() {

    // Initialize state with default values
    const [selectedDomain, setSelectedDomain] = useState("Data Science");
    const [selectedDescription, setSelectedDescription] = useState("Extracting insights from data to solve problems.");

    // Function to update content on cell click
    const handleCellClick = (domain, description) => {
        setSelectedDomain(domain);
        setSelectedDescription(description);
    };

    // useEffect to set default content on initial render
    useEffect(() => {
        // Set default content on initial load (if needed)
        setSelectedDomain("Data Science");
        setSelectedDescription("Extracting insights from data to solve problems.");
    }, []);



    return (
        <>
            <section className="ml_domain w-full mt-10 pb-20">
                <div className="container">
                    <div className={`${styles.top_section} w-full`}>
                        <p className='text-[#ffffff90]'>KNOW THE ML DOMAINS</p>
                        <h1 className='mt-5'>The future is Now: <span>Embrace</span>  <br />
                            Machine Learning</h1>
                    </div>
                    <div className={`${styles.bottom_section} w-full`}>
                        <div className={`${styles.ml_layout} mx-auto`}>
                            <div className={`${styles.card_outer}`}>
                                <div className={`${styles.card_mid}`}>
                                    <div className={`${styles.card_inner}`}>
                                        <div className={`${styles.top}`}>
                                            <p className='text-l'>{selectedDomain}</p>
                                            <div className="icon">
                                                <img src={next} alt="" />
                                            </div>
                                        </div>
                                        <div className={`${styles.bottom}`}>
                                            <p>{selectedDescription}</p>
                                            <img src={aero} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.option_btns}`}>
                            <div className={styles.btns} id="cell1" onClick={() => handleCellClick("Data Science", "Extracting insights from data to solve problems.")}>
                                <span>Data Science</span>
                            </div>
                            <div className={styles.btns} id="cell3" onClick={() => handleCellClick("Deep Learning", "Artificial neural networks modeled after the human brain.")}>
                                <span>Deep Learning</span>
                            </div>



                            <div className={styles.btns} id="cell2" onClick={() => handleCellClick("Generative AI", "Creating AI that can tackle various tasks.")}>
                                <span>Gen-AI</span>
                            </div>
                            <div className={styles.btns} id="cell6" onClick={() => handleCellClick("Large Language Models", "AI models trained on massive amounts of text data for advanced language processing.")}>
                                <span>Large Language Models</span>
                            </div>



                            <div className={styles.btns} id="cell4" onClick={() => handleCellClick("Natural Language Processing", "Making computers understand human language.")}>
                                <span>Natural Languag Processing</span>
                            </div>
                            <div className={styles.btns} id="cell7" onClick={() => handleCellClick("MLOps", "Automating the development and deployment of machine learning models.")}>
                                <span>MLOps</span>
                            </div>



                            <div className={styles.btns} id="cell5" onClick={() => handleCellClick("Computer Vision", "Equipping computers with the ability to 'see' and interpret visual data.")}>
                                <span>Computer Vision</span>
                            </div>
                            <div className={styles.btns} id="cell8" onClick={() => handleCellClick("Competitive Kaggle", "Online platform for data science competitions and collaboration.")}>
                                <span>Competitive Kaggle</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MlDomain