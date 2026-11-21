import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, Copy, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { approach, credentials, profile, shineupExperience, skills } from '@/data/profile.mjs'
import { ResumeLink } from './layout'
import { ExternalLink, Icon, Reveal, SectionHeading, Tags } from './ui'
import styles from '@/styles/Home.module.css'

export function About() {
  return (
    <section id="about" tabIndex={-1} className="section section-band" aria-labelledby="about-title">
      <div className={'wrap ' + styles.aboutGrid}>
        <SectionHeading label="About me" title="A backend-first approach to building products." id="about-title" />
        <Reveal className={styles.aboutCopy}>
          {profile.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          <a href="#experience" className="text-link">Explore my experience <ArrowRight size={16} aria-hidden="true" /></a>
        </Reveal>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section id="skills" tabIndex={-1} className="wrap section" aria-labelledby="skills-title">
      <SectionHeading label="Toolbox" title="Technical skills" id="skills-title" />
      <div className={styles.skillsGrid}>
        {skills.map(group => (
          <Reveal as="article" className={styles.skillCard} key={group.label}>
            <span className="card-icon"><Icon name={group.icon} /></span>
            <h3>{group.label}</h3>
            <Tags items={group.items} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Experience() {
  const { role, company, period, location, stack, contributions } = shineupExperience
  return (
    <section id="experience" tabIndex={-1} className="section section-band" aria-labelledby="experience-title">
      <div className="wrap">
        <SectionHeading label="Professional experience" title="Backend development at ShineUp" id="experience-title" />
        <ol className={styles.timeline}>
          <Reveal as="li" className={styles.timelineItem}>
            <div className={styles.timelineDate}><strong>{period}</strong><span>{location}</span></div>
            <article className={styles.experienceCard}>
              <span className="card-icon"><Icon name="briefcase" /></span>
              <h3>{role}</h3><p className={styles.company}>{company}</p>
              <ul className="check-list">{contributions.map(item => <li key={item}>{item}</li>)}</ul>
              <Tags items={stack} />
              <Link href="/projects/shineup" className="text-link">Explore the ShineUp case study <ArrowRight size={16} aria-hidden="true" /></Link>
            </article>
          </Reveal>
        </ol>
      </div>
    </section>
  )
}

export function Education() {
  return (
    <section className="section section-band" aria-labelledby="education-title">
      <div className={'wrap ' + styles.aboutGrid}>
        <SectionHeading label="Background" title="Education & certifications" id="education-title" />
        <ol className={styles.credentials}>
          {credentials.map(item => (
            <Reveal as="li" className={styles.credential} key={item.title}>
              <span className="card-icon"><Icon name={item.icon} /></span>
              <div><p className={styles.cardMeta}>{item.period}</p><h3>{item.title}</h3>
                <p>{item.organization}</p>{item.detail && <p>{item.detail}</p>}</div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Approach() {
  return (
    <section className="wrap section" aria-labelledby="approach-title">
      <SectionHeading label="How I work" title="Engineering approach" id="approach-title" />
      <div className={styles.threeColumns}>
        {approach.map(item => (
          <Reveal as="article" className={styles.infoCard} key={item.title}>
            <span className="card-icon"><Icon name={item.icon} /></span>
            <h3>{item.title}</h3><p>{item.detail}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function CopyEmail() {
  const [state, setState] = useState('')
  const timer = useRef(null)
  useEffect(() => () => clearTimeout(timer.current), [])

  async function copy() {
    clearTimeout(timer.current)
    try {
      await navigator.clipboard.writeText(profile.email)
      setState('Copied')
    } catch {
      setState('Copy unavailable')
    }
    timer.current = setTimeout(() => setState(''), 3000)
  }

  return (
    <button type="button" className="button button-secondary" onClick={copy} aria-label="Copy email address">
      {state === 'Copied' ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
      <span aria-live="polite">{state || 'Copy email'}</span>
    </button>
  )
}

export function Contact() {
  return (
    <section id="contact" tabIndex={-1} className="wrap section" aria-labelledby="contact-title">
      <Reveal className={styles.contactPanel}>
        <div>
          <SectionHeading label="Contact" title="Let’s connect." description={profile.availability} id="contact-title" />
          <div className={styles.contactActions}>
            <a className="button button-primary" href={'mailto:' + profile.email}><Mail size={17} aria-hidden="true" />Email me</a>
            <CopyEmail />
          </div>
        </div>
        <div className={styles.contactDetails}>
          <a href={'mailto:' + profile.email} className="text-link"><Mail size={18} aria-hidden="true" />{profile.email}</a>
          <ExternalLink href={profile.linkedin}><Linkedin size={18} aria-hidden="true" />LinkedIn</ExternalLink>
          <ExternalLink href={profile.github}><Github size={18} aria-hidden="true" />GitHub</ExternalLink>
          <span><MapPin size={18} aria-hidden="true" />{profile.location}</span>
          <ResumeLink label="Download CV" className="text-link" />
        </div>
      </Reveal>
    </section>
  )
}
