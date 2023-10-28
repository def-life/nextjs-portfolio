"use client"

import { useTheme } from '@/context/theme'
import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'



function ThemeSwitch() {
    const {theme, changeTheme} = useTheme()
   
    return (
        <button onClick={changeTheme} className='fixed right-5 bottom-5 bg-white border border-white border-opacity-40 w-[3rem] h-[3rem] rounded-full flex justify-center items-center bg-opacity-80 backdrop-blur-[0.5rem] shadow-2xl hover:scale-110 active:scale-105 transition-all dark:bg-gray-950'>
            {theme === "light" ? <BsSun /> : <BsMoon />}
        </button>
    )
}

export default ThemeSwitch