import React from 'react'
import styles from '../css/Contact.module.css'

function Contact() {
  return (
    <>
        <section className="section_contact w-full pt-16 pb-20">
            <div className="container w-[90%] mx-auto">
                <div className={`${styles.heading}`}>
                    <h1>
                        Contact Us
                    </h1>
                </div>
                <div className={`${styles.form_layout}`}>
                    <div className={`${styles.form}`}>
                        <form action="">
                            <input type="text" name="name" placeholder='Name' id="" />
                            <input type="email" name='email' placeholder='Email'/>
                            <textarea type="area" name='message' placeholder='Message' />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                    <div className={`${styles.image}`}>
                        <img src="" alt="Image Not Found" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact