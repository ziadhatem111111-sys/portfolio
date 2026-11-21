import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, Icon, ProjectCover, Reveal, SectionHeading, Tags } from './ui'
import styles from '@/styles/CaseStudy.module.css'

function CaseHero({ project }) {
  const reduce = useReducedMotion()
  return (
    <section className={styles.hero} data-project={project.slug} aria-labelledby="case-title">
      <div className="wrap">
        <Link href="/#work" className="text-link"><ArrowLeft size={16} aria-hidden="true" /> All projects</Link>
        <motion.div className={styles.heroGrid} initial={reduce ? false : { y: 14 }} animate={{ y: 0 }}
          transition={{ duration: reduce ? 0 : 0.5 }}>
          <div>
            <p className="eyebrow"><span aria-hidden="true" /> {project.category}</p>
            <h1 id="case-title">{project.name}</h1>
            <p className={styles.intro}>{project.summary}</p>
            <dl className={styles.meta}>
              <div><dt>Role</dt><dd>{project.role}</dd></div>
              {project.period && <div><dt>Period</dt><dd>{project.period}</dd></div>}
              {project.location && <div><dt>Market</dt><dd>{project.location}</dd></div>}
            </dl>
            <ExternalLink href={project.url} className="button button-primary">Live Website</ExternalLink>
          </div>
          <ProjectCover project={project} className={'project-cover ' + styles.heroCover} priority />
        </motion.div>
      </div>
    </section>
  )
}

function CaseContext({ project }) {
  return (
    <section className="wrap section" aria-labelledby="context-title">
      <SectionHeading label="Project context" title="The product and the problem" id="context-title" />
      <div className={styles.grid}>
        {[
          ['Context', project.context], ['The problem', project.problem], ['The product', project.solution],
        ].map(([title, detail]) => (
          <Reveal as="article" className={styles.card} key={title}><h3>{title}</h3><p>{detail}</p></Reveal>
        ))}
      </div>
    </section>
  )
}

function Contributions({ project }) {
  return (
    <section className="section section-band" aria-labelledby="contributions-title">
      <div className={'wrap ' + styles.split}>
        <SectionHeading label="Engineering work" title="My contributions" id="contributions-title" />
        <Reveal className={styles.card}>
          {project.contributions.length > 0
            ? <ul className="check-list">{project.contributions.map(item => <li key={item}>{item}</li>)}</ul>
            : <p>{project.contribution}</p>}
          <h3>Technology stack</h3>
          {project.stack.length > 0 ? <Tags items={project.stack} /> : <p>Technology and architecture details are pending verification against project documentation.</p>}
        </Reveal>
      </div>
    </section>
  )
}

function Architecture({ architecture }) {
  return (
    <figure className={styles.figure}>
      <figcaption><p className={styles.figureLabel}>Conceptual architecture</p>
        <h3>{architecture.title}</h3><p>{architecture.description}</p></figcaption>
      <div className={styles.hub}>
        <span className="card-icon"><Icon name={architecture.hub.icon} /></span>
        <div><strong>{architecture.hub.title}</strong><small>{architecture.hub.detail}</small></div>
      </div>
      <ul className={styles.branches} aria-label="Technology layers">
        {architecture.branches.map(branch => (
          <li key={branch.title}><Icon name={branch.icon} /><strong>{branch.title}</strong><small>{branch.detail}</small></li>
        ))}
      </ul>
    </figure>
  )
}

function Flow({ flow }) {
  return (
    <figure className={styles.figure}>
      <figcaption><p className={styles.figureLabel}>{flow.label}</p><h3>{flow.title}</h3></figcaption>
      <ol className={styles.flow}>
        {flow.steps.map((step, index) => (
          <li key={step}><span>{step}</span>
            {index < flow.steps.length - 1 && <><ArrowRight className={styles.flowAcross} size={16} aria-hidden="true" /><ArrowDown className={styles.flowDown} size={16} aria-hidden="true" /></>}
          </li>
        ))}
      </ol>
    </figure>
  )
}

function Capabilities({ project }) {
  return (
    <section className="wrap section" aria-labelledby="capabilities-title">
      <SectionHeading label="What the product offers" title="Platform capabilities" id="capabilities-title" />
      <div className={styles.grid}>
        {project.capabilities.map(group => (
          <Reveal as="article" className={styles.card} key={group.title}>
            <span className="card-icon"><Icon name={group.icon} /></span>
            <h3>{group.title}</h3>
            <ul className="check-list">{group.items.map(item => <li key={item}>{item}</li>)}</ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Gallery({ project }) {
  if (!project.gallery.length) return null
  return (
    <section className="section section-band" aria-labelledby="gallery-title">
      <div className="wrap">
        <SectionHeading label="Product imagery" title={project.slug === 'shineup' ? 'Inside the customer app' : 'Inside the storefront'} id="gallery-title" />
        <figure className={styles.gallery} data-project={project.slug}>
          <div>
            {project.gallery.map(({ src, alt, width, height }) => (
              <Image key={src} src={src} alt={alt} width={width} height={height}
                sizes={project.slug === 'shoezy'
                  ? width > 500 ? '(max-width: 470px) 86vw, 70vw' : '(max-width: 470px) 245px, 27vw'
                  : '(max-width: 650px) 29vw, 258px'} />
            ))}
          </div>
          <figcaption>Public product screenshots. <ExternalLink href={project.source.url}>{project.source.label}</ExternalLink></figcaption>
        </figure>
      </div>
    </section>
  )
}

export default function CaseStudy({ project, nextProject }) {
  return (
    <article className={styles.caseStudy}>
      <CaseHero project={project} />
      <CaseContext project={project} />
      <Contributions project={project} />
      <section className="wrap section" aria-labelledby="systems-title">
        <SectionHeading label="System and workflow" title={project.architecture ? 'How the backend fits together' : 'From discovery to a shopping bag'} id="systems-title" />
        {project.architecture && <Architecture architecture={project.architecture} />}
        <Flow flow={project.flow} />
      </section>
      <Capabilities project={project} />
      <Gallery project={project} />
      <section className="wrap section" aria-labelledby="considerations-title">
        <SectionHeading label="Design trade-offs" title="Engineering considerations" id="considerations-title" />
        <div className={styles.grid}>
          {project.considerations.map(item => (
            <Reveal key={item.title} as="article" className={styles.card}><h3>{item.title}</h3><p>{item.detail}</p></Reveal>
          ))}
        </div>
      </section>
      <section className="section section-band" aria-labelledby="result-title">
        <div className={'wrap ' + styles.split}>
          <SectionHeading label="Result" title={project.name + ' today'} id="result-title" />
          <div><p className={styles.result}>{project.result}</p>
            <ExternalLink href={project.url} className="button button-primary">Live Website</ExternalLink></div>
        </div>
      </section>
      <div className={'wrap ' + styles.caseNav}>
        <Link href="/#work" className="text-link"><ArrowLeft size={16} aria-hidden="true" />All projects</Link>
        <Link href={'/projects/' + nextProject.slug} className="text-link">{nextProject.name} case study <ArrowRight size={16} aria-hidden="true" /></Link>
      </div>
    </article>
  )
}
