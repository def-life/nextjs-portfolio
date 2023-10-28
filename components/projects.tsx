"use client"
import React from "react"
import SectionTitle from './section-title'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useSectionInView } from '@/lib/hooks'

function Projects() {
    const {ref} = useSectionInView({sectionName: "Projects", threshold: 0.42})
    return (
        <section ref={ref} id="projects" className='max-w-[42rem] mb-24 scroll-m-28 sm:mb-40'>
            <SectionTitle >My projects</SectionTitle>
            <div>

                {projectsData.map((project) => {
                    return <React.Fragment key={project.title} >
                        <Project {...project} />
                    </React.Fragment>
                })}
            </div>
        </section>
    )
}


export default Projects