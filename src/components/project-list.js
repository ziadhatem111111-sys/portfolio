import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { featuredProjects, supportingProjects } from '@/data/projects.mjs'
import { ExternalLink, Icon, ProjectCover, Reveal, SectionHeading, Tags } from './ui'
import styles from '@/styles/Home.module.css'

function ProjectCard({ project }) {
  return (
    <Reveal as="article" className={styles.projectCard}>
      <ProjectCover project={project} className={'project-cover ' + styles.cardCover} linked />
      <div className={styles.projectBody}>
        <p className={styles.projectType}>{project.category}</p>
        <h3><Link href={'/projects/' + project.slug}>{project.name}</Link></h3>
        <p>{project.summary}</p>
        <p className={styles.contribution}>{project.contribution}</p>
        <ul className={styles.projectFocus} aria-label="Project focus">
          {project.focus.map(item => <li key={item}>{item}</li>)}
        </ul>
        {project.cardStack.length > 0 && <Tags items={project.cardStack} />}
        <div className={styles.projectActions}>
          <Link href={'/projects/' + project.slug} className="button button-secondary" aria-label={project.name + ' case study'}>Case Study <ArrowRight size={16} aria-hidden="true" /></Link>
          <ExternalLink href={project.url} aria-label={project.name + ' live website'}>Live Website</ExternalLink>
        </div>
      </div>
    </Reveal>
  )
}

export function FeaturedProjects() {
  return (
    <section id="work" tabIndex={-1} className={'wrap section ' + styles.featured} aria-labelledby="work-title">
      <SectionHeading label="Selected work" title="Featured projects" id="work-title" />
      <div className={styles.projectGrid}>
        {featuredProjects.map(project => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </section>
  )
}

export function SupportingProjects() {
  return (
    <section className="wrap section" aria-labelledby="more-work-title">
      <SectionHeading label="More work" title="Additional projects" id="more-work-title" />
      <div className={styles.threeColumns}>
        {supportingProjects.map(project => (
          <Reveal as="article" className={styles.infoCard} key={project.name}>
            <span className="card-icon"><Icon name={project.icon} /></span>
            <p className={styles.cardMeta}>{project.type}</p>
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <Tags items={project.stack} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
