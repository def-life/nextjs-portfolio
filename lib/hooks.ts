import { useActiveSection } from "@/context/active-section"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import type { SectionName } from "./types"

type useSectionInViewProps = {
    sectionName: SectionName,
    threshold?: number
}

function useSectionInView({ sectionName, threshold=0.75 }: useSectionInViewProps) {
    const { setActiveSection, lastClicked } = useActiveSection()
    const { ref, inView } = useInView({ threshold })


    useEffect(() => {
        if(inView && Date.now() - lastClicked > 1000) {
            setActiveSection(sectionName)
        }
    },[inView, setActiveSection, lastClicked, sectionName])

    return {ref}
}

export {useSectionInView}