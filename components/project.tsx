"use client"

import { projectsData } from "@/lib/data"
import { useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { motion } from "framer-motion"

type ProjectProps = typeof projectsData[number]


function Project(props: ProjectProps) {
    const ref = useRef<HTMLElement>(null)
    const { title, description, imageUrl, tags } = props
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.64, 1])

    return <motion.section
        style={{
            scale: scaleProgress,
            opacity: opacityProgress
        }}

        ref={ref} className='group bg-gray-100 overflow-hidden last:mb-0 mb-6 border border-black/0.5 relative px-5 pt-4 pb-7 rounded-lg sm:pb-4 sm:pl-10 sm:pt-10 sm:h-[20rem] sm:mb-12 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:border-transparent' >
        <div className='sm:max-w-[50%] sm:group-even:ml-[18rem] flex flex-col h-full sm:group-even:pl-6'>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <p className='mt-2 text-gray-700 leading-relaxed tracking-wide dark:text-white/70'>{description}</p>
            <ul className='flex flex-wrap mt-4 text-[0.7rem] gap-2 tracking-wider sm:mt-auto '>
                {tags.map((tag) => {
                    return <div className='bg-black/70 text-white rounded-full px-3 py-1 uppercase dark:text-white/70' key={tag}>{tag}</div>
                })}
            </ul>
        </div>
        <Image className='hidden rounded-lg group-even:right-[initial] group-even:-left-[10rem] group-hover:-translate-x-3 group-hover:translate-y-3 transition group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3  group-even:group-hover:rotate-2 sm:block absolute top-8 -right-[10rem] max-w-[28.5rem]' src={imageUrl} alt={title} quality={90} />
    </motion.section>
}

export default Project

