import Hero from '@/components/hero'
import { FeaturedProjects, SupportingProjects } from '@/components/project-list'
import { About, Approach, Contact, Education, Experience, Skills } from '@/components/profile-sections'
import Seo from '@/components/seo'

export default function Home() {
  return (
    <>
      <Seo />
      <Hero />
      <FeaturedProjects />
      <About />
      <Skills />
      <Experience />
      <SupportingProjects />
      <Education />
      <Approach />
      <Contact />
    </>
  )
}
