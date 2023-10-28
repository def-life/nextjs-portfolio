"use client"

import React from 'react'

// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom"
import { FaPaperPlane } from 'react-icons/fa'
import clsx from 'clsx'



function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button disabled={pending} className={clsx('border bg-gray-900 text-white h-[3rem] w-[8rem] rounded-lg group hover:scale-110 gap-1 flex justify-center items-center outline-none focus:scale-110 active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-75 dark:border-transparent dark:bg-white/10', {

        })} type='submit'>{pending ? <span className='animate-spin h-6 w-6 rounded-full border-b-2 border-white'></span> : <>Submit <FaPaperPlane className="group-hover:-translate-y-1 group-hover:translate-x-1 transition opacity-75" /></>}</button>
    )
}

export default SubmitButton