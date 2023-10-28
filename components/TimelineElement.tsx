import { useTheme } from '@/context/theme'
import { experiencesData } from '@/lib/data'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'

type TimelineElementProps = typeof experiencesData[number]

function TimelineElement(props: TimelineElementProps) {
  const { title, location, description, icon, date } = props
  const { ref, inView } = useInView({
    triggerOnce: true,
  })
  const { theme } = useTheme()

  return <div ref={ref} className="vertical-timeline-element">
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
      date={date}
      icon={icon}
      iconStyle={{
        background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
        fontSize: "1.5rem"
      }}

    >
      <h3 className='font-semibold !capitalize'>{title}</h3>
      <h4 className='!font-normal !mt-1'>{location}</h4>
      <p className='!font-normal !mt-1 !text-gray-700 dark:!text-white/80'>
        {description}
      </p>
    </VerticalTimelineElement>
  </div>
}

export default TimelineElement