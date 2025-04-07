'use client'
import React from 'react'
import SideBar from '../SideBar/SideBar'
import Image from 'next/image'
import { motion } from "motion/react"

export default function HeroSection() {
    return (
        <section className='hero-section'>
            <div className="hero-section-wraper">
                <SideBar />

                <div className="work-block">
                    <div className="work-block-wraper">
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.15 }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            className="block first">
                            <div className="block-wraper">
                                <div className="title">
                                    <h2>Educations</h2>
                                </div>
                                <div className="content">
                                    <div className="content-wraper">
                                        <div className="details">
                                            <div className="details-wraper">
                                                <div className="company-name">
                                                    <p>Qualification</p>
                                                    <span>B.Com</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <div className="details-wraper">
                                                <div className="company-name">
                                                    <p>College</p>
                                                    <span>Udai Pratap Autonomous College</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.2 }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            className="block second">
                            <div className="block-wraper">
                                <div className="title">
                                    <h2>My Expert Area</h2>
                                </div>
                                <div className="block-area">
                                    <div className="block-area-wraper">
                                        <div className="item">
                                            <div className="item-icon">
                                                <Image src='/images/skills/search.png' width={50} height={50} alt='Logo' />
                                            </div>
                                            <span>Strategy</span>
                                        </div>
                                        <div className="item">
                                            <div className="item-icon">
                                                <Image src='/images/skills/pro.png' width={50} height={50} alt='Logo' />
                                            </div>
                                            <span>Problem Solving</span>
                                        </div>
                                        <div className="item">
                                            <div className="item-icon">
                                                <Image src='/images/skills/eng.png' width={50} height={50} alt='Logo' />
                                            </div>
                                            <span>English</span>
                                        </div>
                                        <div className="item">
                                            <div className="item-icon">
                                                <Image src='/images/skills/social.png' width={50} height={50} alt='Logo' />
                                            </div>
                                            <span>Marketing</span>
                                        </div>
                                        <div className="item">
                                            <div className="item-icon">
                                                <Image src='/images/skills/talk.png' width={50} height={50} alt='Logo' />
                                            </div>
                                            <span>Communication</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.25 }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            className="hero-footer-2-wraper-2">
                            <div className="foot-wrap">
                                <div className="title">
                                    <h2>Acheivements</h2>
                                </div>

                                <h3>1. Advance Diploma in computer application (ADCA)</h3>
                                <h3>2.Certificate in Statistical Method</h3>
                                <h3>3. 30-Days Power BI Micro Course</h3>
                                <h3>4. Certification on Digital marketing from Wizards Next LLP </h3>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="project-block">
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.2, ease: "easeInOut", delay: 0.18 }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        className="block">
                        <div className="block-wraper">
                            <div className="title">
                                <h2>Work Experience</h2>
                            </div>
                            <div className="content">
                                <div className="content-wraper">
                                    <div className="details">
                                        <div className="details-wraper">
                                            {/* <div className="time">
                                                    <span>06-2024-Present</span>
                                                </div> */}
                                            <div className="company-logo">
                                                <Image src='/images/user/work.jpg' width={30} height={30} alt='glo' />
                                            </div>
                                            <div className="company-name">
                                                <p>Samarpan Mahila Kalyaan Samiti</p>
                                                <span>Internship</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <div className="details-wraper">
                                            {/* <div className="time">
                                                    <span>2020-2024</span>
                                                </div> */}
                                            <div className="company-logo">
                                                <Image src='/images/user/images.png' width={30} height={30} alt='glo' />
                                            </div>
                                            <div className="company-name">
                                                <p>Career Launcher</p>
                                                <span> Internship</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.2, ease: "easeInOut", delay: 0.23 }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        className="project-block-wraper">
                        <div className="title">
                            <h2>Certificates</h2>
                            {/* <Link href='#'>
                                All Project
                                <i className="hgi hgi-stroke hgi-arrow-right-02"></i>
                            </Link> */}
                        </div>

                        <div className="box">
                            <img src="/images/certificates/01.png" alt="" />
                        </div>
                        <div className="box">
                            <img src="/images/certificates/02.png" alt="" />
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.2, ease: "easeInOut", delay: 0.25 }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    className="hero-footer-2-wraper-2">
                    <div className="foot-wrap">
                        <div className="title">
                            <h2>Recent Projects</h2>
                        </div>

                        <h3>1. Worked for Round Table India&apos;s clasrrom strategy development for trainign teachers</h3>
                        <h3>2. Worked with Kuda baazar NGO team for the ganga ghat cleaning drive</h3>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
