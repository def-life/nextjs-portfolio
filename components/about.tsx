"use client"

import React from 'react'
import SectionTitle from './section-title'
import {motion} from "framer-motion"
import { useSectionInView } from '@/lib/hooks'

function About() {

    const {ref} = useSectionInView({sectionName: "About"})

    return (
        <motion.section ref={ref} id="about"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 1.175}}
        
        
        className='max-w-[50rem] text-center leading-8 mb-24 sm:mb-40 scroll-m-28'>
            <SectionTitle>About Me</SectionTitle>
            <p className='mb-3'>After graduating with a degree in <span className='font-medium'>Accounting,</span> I decided to pursue my passion for programming. I enrolled in a coding bootcamp and learned full-stack web development. My favorite part of programming is the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem. My core stack is <span className='font-medium'>React, Next.js, Node.js, and MongoDB.</span> I am also familiar with TypeScript and Prisma. I am always looking to learn new technologies. I am currently looking for a full-time position as a software developer.</p>
            <p>
                When <span className='italic'>I'm not coding,</span> I enjoy playing video games, watching movies, and playing with my dog. I also enjoy <span className='font-medium'>learning new things.</span> I am currently learning about history and philosophy. I'm also learning how to play the guitar.</p>
        </motion.section>
    )
}

export default About