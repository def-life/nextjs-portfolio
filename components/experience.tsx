"use client"

import React from 'react'
import SectionTitle from './section-title'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useInView } from "react-intersection-observer"
import { useTheme } from '@/context/theme';


function Experience() {
    const { ref } = useSectionInView({ sectionName: "Experience", threshold: 0.45 })
    const {theme} = useTheme()
    return (
        <section ref={ref} id="experience" className='max-w-[70rem] mb-24 scroll-m-28 sm:mb-40'>
            <SectionTitle>My experience</SectionTitle>
            <VerticalTimeline lineColor=''>
                {

                    experiencesData.map((experience, index) => {
                        const { ref, inView } = useInView({
                            triggerOnce: true,
                        })
                        return <div ref={ref} key={index} className="vertical-timeline-element">
                            <VerticalTimelineElement
                            
                                contentStyle={{
                                    background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                                    padding: "1.3rem 2rem",
                                    boxShadow: "none",
                                    textAlign: "left",
                                    border: "1px solid rgba(0, 0, 0, 0.05)",
                                    
                                }}
                                visible={inView}
                                contentArrowStyle={{
                                    borderRight: "0.4rem solid  #9ca3af"
                                }}
                                date={experience.date}
                                icon={experience.icon}
                                iconStyle={{
                                    background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                                    fontSize: "1.5rem"
                                }}

                            >
                                <h3 className='font-semibold !capitalize'>{experience.title}</h3>
                                <h4 className='!font-normal !mt-1'>{experience.location}</h4>
                                <p className='!font-normal !mt-1 !text-gray-700 dark:!text-white/80'>
                                    {experience.description}
                                </p>
                            </VerticalTimelineElement>
                        </div>
                    })


                }


            </VerticalTimeline>
        </section>
    )
}

export default Experience