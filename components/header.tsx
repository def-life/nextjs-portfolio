"use client"
import React, { useState } from 'react'
import { links } from '@/lib/data'
import Link from 'next/link'
import { motion } from "framer-motion"
import clsx from 'clsx'
import { useActiveSection } from '@/context/active-section'


function Header() {
    const { activeSection, setActiveSection, setLastClicked } = useActiveSection();
    function changeActiveSection(_activeSection: typeof links[number]["name"]) {
        return () => {
            setActiveSection(_activeSection);
            setLastClicked(Date.now())
        }
    }


    return (
        <motion.header
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className='z-[999] relative'>
            <div className='w-full py-1 fixed backdrop-blur-[0.5rem] bg-white/75 text-[15px]  shadow-lg shadow-black/[0.03]  font-medium text-gray-500 h-[4.5rem] sm:h-[3.25rem] sm:w-[36rem] sm:top-6 sm:left-1/2 sm:-translate-x-1/2 sm:rounded-full dark:bg-gray-950 dark:bg-opacity-75'>
                <nav className='w-[21rem] h-full mx-auto sm:w-full sm:flex sm:items-center sm:justify-center'>
                    <ul className=' flex flex-wrap justify-center items-center sm:gap-5 '>
                        {links.map((link) => {
                            return <Link onClick={changeActiveSection(link.name)} className={clsx('p-2 py-1 relative hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300 transition', {
                                "text-gray-950 dark:text-gray-200": activeSection === link.name
                            })} key={link.hash} href={link.hash}>{link.name}{link.name === activeSection && <motion.span
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                layoutId='activeSection' className='absolute inset-0 bg-gray-100 rounded-full -z-20 dark:bg-gray-800'></motion.span>}</Link>
                        })}
                    </ul>

                </nav>

            </div>

        </motion.header>
    )
}

export default Header
