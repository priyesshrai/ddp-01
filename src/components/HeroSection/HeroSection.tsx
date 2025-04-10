'use client'
import React, { useEffect, useRef } from 'react'
import SideBar from '../SideBar/SideBar'
import Image from 'next/image'
import Link from 'next/link';
import { motion } from "motion/react"
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import { OptionsType } from "@fancyapps/ui/types/Fancybox/options";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

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
                            className="block    ">
                            <div className="block-wraper">
                                <div className="title">
                                    <h2>Work Ex./Educations</h2>
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
                                                    <span>Sunbeam College for women</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <div className="details-wraper">
                                                <div className="company-name">
                                                    <p>College</p>
                                                    <span>Sunbeam College for women</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <div className="details-wraper">
                                                <div className="company-name">
                                                    <p>College</p>
                                                    <span>Sunbeam College for women</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <div className="details-wraper">
                                                <div className="company-name">
                                                    <p>College</p>
                                                    <span>Sunbeam College for women</span>
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
                    </div>
                </div>

                <div className="project-block">
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.2, ease: "easeInOut", delay: 0.22 }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        className="project-block-wraper">
                        <div className="title">
                            <h2>Recent Projects</h2>
                            <Link href='#'>
                                All Project
                                <i className="hgi hgi-stroke hgi-arrow-right-02"></i>
                            </Link>
                        </div>
                        <div className="block-layout-content">
                            <h3>1. Worked for Round Table India's clasrrom strategy development for trainign teachers</h3>
                            <h3>2. Worked with Kuda baazar NGO team for the ganga ghat cleaning drive</h3>
                        </div>
                        {/* <Fancybox
                            options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}
                        >
                            <a href='/images/certificates/c-01.jpg' data-fancybox="gallery" className="box">
                                <img src="/images/certificates/c-01.jpg" alt="" />
                                <div className="tags">Web Developent</div>
                            </a>
                            <a href='/images/certificates/c-02.jpg' data-fancybox="gallery" className="box">
                                <img src="/images/certificates/c-02.jpg" alt="" />
                                <div className="tags">Web Developent</div>
                            </a>
                            <a href='/images/certificates/c-02.jpg' data-fancybox="gallery" className="box">
                                <img src="/images/certificates/c-02.jpg" alt="" />
                                <div className="tags">Web Developent</div>
                            </a>
                        </Fancybox> */}
                    </motion.div>
                </div>
            </div>

            <div className="second-layout">
                <div className="second-layout-wraper">
                    <div className="first-layout-block layout-block">
                        <div className="block-layout-wraper">
                            <div className="title">
                                <h2>Achievements</h2>
                            </div>
                            <div className="block-layout-content">
                                <h3>1. Advance Diploma in computer application (ADCA)</h3>
                                <h3>2.Certificate in Statistical Method</h3>
                                <h3>3. 50-Days Power BI Micro Course</h3>
                                <h3>4. Certification on Digital marketing from Wizards Next LLP </h3>
                            </div>
                        </div>
                    </div>
                    <div className="second-layout-block layout-block">
                        <div className="block-layout-wraper">
                            <div className="title">
                                <h2>Social Activities</h2>
                            </div>
                            <div className="block-layout-content">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="third-layout">
                <div className="third-layout-wraper">
                    <div className="third-layout-block first-third-layout">
                        <div className="third-block-layout-wraper">
                            <div className="title">
                                <h2>Tools Known</h2>
                                <Link href='#'>
                                    See All
                                    <i className="hgi hgi-stroke hgi-arrow-right-02"></i>
                                </Link>
                            </div>
                            {/* <div className="third-content">
                                <div className="card">
                                    <div className="card-icon">
                                        <Image src='/images/tools/ana.png' alt='logo' width={50} height={50} />
                                    </div>
                                    <span>Google Analytics</span>
                                </div>
                                <div className="card">
                                    <div className="card-icon">
                                        <Image src='/images/tools/web.png' alt='logo' width={50} height={50} />
                                    </div>
                                    <span>Google Search Console</span>
                                </div>
                                <div className="card">
                                    <div className="card-icon">
                                        <Image src='/images/tools/business.png' alt='logo' width={50} height={50} />
                                    </div>
                                    <span>Google Business Profile</span>
                                </div>
                                <div className="card">
                                    <div className="card-icon">
                                        <Image src='/images/tools/trends.webp' alt='logo' width={50} height={50} />
                                    </div>
                                    <span>Google Trend</span>
                                </div>
                                <div className="card">
                                    <div className="card-icon">
                                        <Image src='/images/tools/adwords.png' alt='logo' width={50} height={50} />
                                    </div>
                                    <span>Keyword Planner Tool</span>
                                </div>
                                <div className="card">
                                    <div className="card-icon">
                                        <Image src='/images/tools/sem.png' alt='logo' width={50} height={50} />
                                    </div>
                                    <span>SEM Rush</span>
                                </div>
                                <div className="card">
                                    <div className="card-icon">
                                        <Image src='/images/tools/ans.png' alt='logo' width={50} height={50} />
                                    </div>
                                    <span>Answer the Public</span>
                                </div>
                                <div className="card">
                                    <div className="card-icon">
                                        <Image src='/images/tools/moz.png' alt='logo' width={50} height={50} />
                                    </div>
                                    <span>Moz</span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="third-layout-block second-third-layout">
                        <div className="third-block-layout-wraper">
                            <div className="video-profile">

                            </div>

                            <span className='vdo-title'>View Profile Intro</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}


function Fancybox(props: {
    children?: React.ReactNode;
    delegate?: string;
    options?: Partial<OptionsType>;
}) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const delegate = props.delegate || "[data-fancybox]";
        const options = props.options || {};

        NativeFancybox.bind(container, delegate, options);

        return () => {
            NativeFancybox.unbind(container);
            NativeFancybox.close();
        };
    });

    return <div className='box-wraper' ref={containerRef}>{props.children}</div>;
}

export { Fancybox };