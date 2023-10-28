import React from 'react'

type SectionTitleProp = {
    children: React.ReactNode
}

function SectionTitle(props: SectionTitleProp) {
    const { children } = props
    return (
        <h2 className='font-medium text-3xl mb-8 text-center'>{children}</h2>
    )
}

export default SectionTitle