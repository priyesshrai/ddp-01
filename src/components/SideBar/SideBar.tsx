'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "motion/react"


export default function SideBar() {

  function handleEmailBtn() {
    const email = "prashantprajapati@gmail.com";
    navigator.clipboard.writeText(email)
      .then(() => alert("Email copied to clipboard!"))
      .catch(err => console.error("Failed to copy email: ", err));
  }

  return (
    <motion.div className='side-bar'
      initial={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.2, ease: "easeInOut", delay:0.1 }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
    >
      <div className="side-bar-wraper">
        <div className="profile-container">
          <Image src='/images/user/user.png' width={200} height={278} alt='Profile' />
        </div>
        <div className="user-data">
          <h1>Prashant Prajapati</h1>

          <p>
            Hi, I am Prashant Prajapati. Currently I am <strong>Pursuing B.com</strong> from Udai Pratap Autonomous College / Ex-Intern of an <strong>NGO Samarpan Mahila Kalyaan Samiti</strong>
          </p>

          <div className="cta-button-container">
            <Link href='tel:+917339474554'> <i className="hgi hgi-stroke hgi-call-ringing-02"></i> <span>Book A Call</span> </Link>
            <button onClick={handleEmailBtn}><i className="hgi hgi-stroke hgi-copy-01"></i> Copy Email</button>
          </div>

          <div className="social-media-container">
            <Link href='#' className="social-icons">
              <i className="hgi hgi-stroke hgi-instagram"></i>
            </Link>
            <Link href='#' className="social-icons">
              <i className="hgi hgi-stroke hgi-facebook-01"></i>
            </Link>
            <Link href='#' className="social-icons">
              <i className="hgi hgi-stroke hgi-pinterest"></i>
            </Link>
            <Link href='#' className="social-icons">
              <i className="hgi hgi-stroke hgi-new-twitter"></i>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
