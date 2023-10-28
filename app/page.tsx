import About from "@/components/about"
import Contact from "@/components/contact"
import Experience from "@/components/experience"
import Intro from "@/components/intro"
import Projects from "@/components/projects"
import SectionDivider from "@/components/section-divider"
import Skills from "@/components/skills"


export default function Home() {
  return (
    <main className="px-4 flex justify-center items-center flex-col">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}
