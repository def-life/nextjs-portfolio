"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'

type ThemeProviderProps = { children: React.ReactNode }
type Theme = "light" | "dark"

type ThemeContextType = {
    theme: Theme,
    changeTheme: () => void

}

const ThemeContext = createContext<ThemeContextType | null>(null)


function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>("light")


    useEffect(() => {
        const theme = window.localStorage.getItem("theme") as Theme | null
        if (theme) {
            setTheme(theme)
            if (theme === "dark") {
                document.documentElement.classList.add("dark")
            }
        } else {

            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme("dark")
                document.documentElement.classList.add("dark")
            }
        }
    }, [])


    function changeTheme() {
        if (theme === "dark") {
            setTheme("light")
            localStorage.setItem("theme", "light")
            document.documentElement.classList.remove("dark")
        } else {
            setTheme("dark")
            localStorage.setItem("theme", "dark")
            document.documentElement.classList.add("dark")

        }
    }



    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>
    )
}


export function useTheme() {
    const context = useContext(ThemeContext)
    if (context === null) {
        throw new Error("useTheme must be used within an ThemeProvider")
    }

    return context;
}


export default ThemeProvider