"use client"

import React, { createContext, useContext, useState } from 'react'
import type { SectionName } from '@/lib/types'


type ActiveSectionProviderProps = { children: React.ReactNode }

type ActiveSectionContextType = {
    activeSection: SectionName,
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>,
    lastClicked: number,
    setLastClicked: React.Dispatch<React.SetStateAction<number>>

}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)


function ActiveSectionProvider({ children }: ActiveSectionProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home")
    const [lastClicked, setLastClicked] = useState(0);

    return (
        <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, lastClicked, setLastClicked }}>{children}</ActiveSectionContext.Provider>
    )
}


export function useActiveSection() {
    const context = useContext(ActiveSectionContext)
    if (context === null) {
        throw new Error("useActiveSection must be used within an ActiveSectionProvider")
    }

    return context;
}


export default ActiveSectionProvider