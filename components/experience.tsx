"use client"

import React from 'react'
import SectionTitle from './section-title'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useInView } from "react-intersection-observer"
import { useTheme } from '@/context/theme';
import TimelineElement from './TimelineElement';


function Experience() {
    const { ref } = useSectionInView({ sectionName: "Experience", threshold: 0.45 })
    const { theme } = useTheme()
    return (
        <section ref={ref} id="experience" className='max-w-[70rem] mb-24 scroll-m-28 sm:mb-40'>
            <SectionTitle>My experience</SectionTitle>
            <VerticalTimeline lineColor=''>
                {

                    experiencesData.map((experience, index) => {
                        return <TimelineElement {...experience} key={index} />
                    })


                }


            </VerticalTimeline>
        </section>
    )
}

export default Experience