"use client"

import React from 'react'
import SectionTitle from './section-title'
import { motion } from "framer-motion"
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import type { Variants } from 'framer-motion'

const fadeInAnimation: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: (custom: number) => {
        return {
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.05 }
        }
    }
}

function Skills() {
    const { ref } = useSectionInView({ sectionName: "Skills", threshold: 0.7 })
    return (
        <section ref={ref} id="skills" className='max-w-[42rem] mb-24 scroll-m-28 sm:mb-40'>
            <SectionTitle>My Skills</SectionTitle>
            <motion.ul className='text-gray-800 text-lg flex justify-center flex-wrap gap-3'>
                {skillsData.map((skill, index) => {
                    return <motion.li viewport={{ once: true }} variants={fadeInAnimation} initial="hidden" whileInView="visible" custom={index} className='bg-white border border-black/10 px-5 py-2 rounded-lg dark:bg-white/10 dark:text-white/80' key={skill}>{skill}</motion.li>
                })}
            </motion.ul>

        </section>
    )
}

export default Skills