import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Head from "next/head"
import Link from "next/link"

function Home() {
  return (
    <div className="bg-[#1F2535] text-white h-screen snap-y snap-mandatory
    overflow-scroll z-0">
      <Head>
        <title>Ricardo Cruz</title>
        {/*         <link rel="icon" href="https://www.mancity.com/meta/media/yowlxkfa/ruben-dias.png?width=900" />
 */}
        <link rel="icon" href="https://static.fctables.com/upload/js/js29m58a2350d283cb/sergio-aguero.png" />
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src="ricardoShot.png" alt="" />
          </div>
        </footer>
      </Link>
    </div>
  )
}
export default Home