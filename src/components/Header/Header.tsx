'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from "motion/react"

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <motion.header className='header'
            initial={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
        >
            <nav className='navbar'>
                <div className="menu-container">
                    <div className="logo-container">
                        <Link href='/'>
                            <Image src='/images/user/logo.png' width={200} height={27} alt='This is logo' />
                        </Link>
                    </div>
                    {/* <div className={`links-container ${openMenu ? 'menu-active' : ""}`}>
                        <ul className='links-wraper'>
                            <li className='mob-logo'>
                                <Link href='/'>
                                    <Image src='/images/logo/logo.png' width={160} height={27} alt='This is logo' />
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className='active'>
                                    <i className="hgi hgi-stroke hgi-home-01"></i>
                                    <span>
                                        Home
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href='/about'>
                                    <i className="hgi hgi-stroke hgi-user-square"></i>
                                    <span>
                                        About
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href='/services'>
                                    <i className="hgi hgi-stroke hgi-layers-01"></i>
                                    <span>
                                        Services
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href='/work'>
                                    <i className="hgi hgi-stroke hgi-ai-beautify"></i>
                                    <span>
                                        Work
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href='/blog'>
                                    <i className="hgi hgi-stroke hgi-license-draft"></i>
                                    <span>
                                        Blog
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href='/contact'>
                                    <i className="hgi hgi-stroke hgi-message-add-01"></i>
                                    <span>
                                        Contact
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div> */}
                    <div className={`btn-container ${openMenu ? 'menu-active' : ""}`}>
                        <div className="btn-wraper">
                            {/* <div className="them-toggler">
                                <i className="hgi hgi-stroke hgi-sharp hgi-sun-02"></i>
                            </div> */}
                            <Link href='/contact'>
                                Let's Talk
                                <i className="hgi hgi-stroke hgi-sent"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="hamberger-container" onClick={() => setOpenMenu(!openMenu)}>
                        <i className="hgi hgi-stroke hgi-menu-04"></i>
                    </div>
                    <div className={`overlay ${openMenu ? 'menu-active' : ""} `} onClick={() => setOpenMenu(false)}></div>
                </div>
            </nav>
        </motion.header>
    )
}
