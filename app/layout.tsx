import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import ActiveSectionProvider from '@/context/active-section'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'
import ThemeProvider from '@/context/theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Abhishek | Personal Portfolio",
  description: "Abhishek is a full-stack developer with 1 year of experience"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth' >
      <body className={`${inter.className}  bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`} >
        <div className='bg-[#fbe2e3] -z-10 h-[31.25rem] w-[31.25rem] absolute top-[-6rem] right-[11rem] blur-[10rem] sm-w-[68.75rem] rounded-full dark:bg-[#946263]'></div>
        <div className='bg-[#dbd7fb] -z-10 h-[31.25rem] w-[50rem] absolute top-[-1rem] left-[-35rem] blur-[10rem] rounded-full sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>

        <ThemeProvider>
          <ActiveSectionProvider>
            <Header />
            {children}
            <Toaster position='top-right' />
            <Footer />
          </ActiveSectionProvider>
        <ThemeSwitch />
        </ThemeProvider>

      </body>
    </html>
  )
}
