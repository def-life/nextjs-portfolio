"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import Link from 'next/link'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSection } from '@/context/active-section'
import { links } from '@/lib/data'

const image = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween"
    }

  }
}

const emogi = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1.04,
    transition: {
      type: "spring",
      delay: 0.2,
      stiffness: 140,
      duration: 0.8
    }

  },

}

const paragraph = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 110 }

  }
}

const buttonsContainer = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, delay: 0.1, mass: 1 }

  }
}


function Intro() {
  const {ref} = useSectionInView({sectionName: "Home", threshold: 0.5})
  const {setActiveSection, setLastClicked } = useActiveSection();
  function changeActiveSection(_activeSection: typeof links[number]["name"]) {
      return () => {
          setActiveSection(_activeSection);
          setLastClicked(Date.now())
      }
  }

  return (
    <section ref={ref} id="home" className='pt-28 mb-24 sm:pt-36 max-w-[50rem]'>
      <div className=' flex justify-center items-center'>
        <div className='relative'>
          <motion.div
            variants={image}
            initial="hidden"
            animate="visible"
          >
            <Image className='border-[0.35rem] border-white shadow-xl rounded-full object-cover ' src={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"} width={96} height={96} alt='Abhishek Portrait' priority quality={80} />
          </motion.div>
          <motion.span
            variants={emogi}
            initial="hidden"
            animate="visible"
            className='text-4xl absolute bottom-0 right-0'>👋</motion.span></div>
      </div>
      <div>
        <motion.h1
          variants={paragraph}
          initial="hidden"
          animate="visible"

          className='mt-5 text-2xl sm:text-3xl md:text-4xl font-medium text-center mb-10 !leading-[1.5]'>
          <span className='font-bold' >Hello, I'm Ricardo.</span> I'm a <span className='font-bold'>full-stack developer</span> with <span className='font-bold'>8 years</span> of experience. I enjoy building <span className='italic'>sites & apps.</span> My focus is <span className='underline'>React (Next.js).</span>
        </motion.h1>
        <motion.div
          variants={buttonsContainer}
          initial="hidden"
          animate="visible"

          className='flex flex-col gap-3 justify-center text-lg items-center font-medium px-4 sm:flex-row'>
          <motion.div

          ><Link onClick={changeActiveSection("Contact")} href="#contact" className='group bg-gray-900 text-white px-7 py-3 rounded-full flex gap-2 items-center justify-center outline-none focus:scale-110 hover:scale-110 active:scale-105'><span>Contact me here</span> <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition" /></Link></motion.div>
          <motion.a href="/CV.pdf" download className='group bg-white text-gray-500 border  px-7 py-3 rounded-full flex gap-2 items-center justify-center outline-none focus:scale-110 hover:scale-110 hover:text-gray-900 active:scale-105 dark:bg-white/10 dark:text-gray-200 dark:border-none'><span>Download CV</span><HiDownload className="opacity-80 group-hover-translate-y-1 group-hover:translate-y-1 transition" /></motion.a>
          <motion.a href="https://www.linkedin.com/in/abhishek-rana-33375b1a0" target='_blank' className='bg-white text-gray-700 border p-4 rounded-full flex gap-2 items-center justify-center outline-none focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 dark:bg-white/10 dark:text-white/60 dark:border-transparent'><BsLinkedin /></motion.a>
          <motion.a href="https://github.com/def-life" target='_blank' className='bg-white text-gray-700 border  p-4 rounded-full flex gap-2 items-center justify-center outline-none focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 dark:bg-white/10 dark:text-gray dark:text-white/60 dark:border-transparent'><BsGithub /></motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Intro