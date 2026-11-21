import CaseStudy from '@/components/case-study'
import Seo from '@/components/seo'
import { featuredProjects } from '@/data/projects.mjs'

export function getStaticPaths() {
  return { paths: featuredProjects.map(({ slug }) => ({ params: { slug } })), fallback: false }
}

export function getStaticProps({ params }) {
  const index = featuredProjects.findIndex(({ slug }) => slug === params.slug)
  if (index < 0) return { notFound: true }
  const project = featuredProjects[index]
  const next = featuredProjects[(index + 1) % featuredProjects.length]
  return { props: { project, nextProject: { slug: next.slug, name: next.name } } }
}

export default function ProjectPage({ project, nextProject }) {
  return (
    <>
      <Seo project={project} />
      <CaseStudy key={project.slug} project={project} nextProject={nextProject} />
    </>
  )
}
