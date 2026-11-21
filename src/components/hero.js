import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, CircleDot, MapPin, Terminal } from 'lucide-react'
import { profile } from '@/data/profile.mjs'
import { Icon } from './ui'
import { ResumeLink, SocialLinks } from './layout'
import styles from '@/styles/Hero.module.css'

const services = [
  { name: 'PostgreSQL', detail: 'Data layer', icon: 'database' },
  { name: 'Redis + BullMQ', detail: 'Background jobs', icon: 'layers' },
  { name: 'Socket.IO', detail: 'Live events', icon: 'activity' },
]

function SystemIllustration() {
  return (
    <figure className={styles.visual} aria-label="Conceptual backend diagram with NestJS routing requests to data, jobs, and live events">
      <div className={styles.visualBar}>
        <Terminal size={15} aria-hidden="true" />
        <span>backend.system</span>
        <div className={styles.dots} aria-hidden="true"><i /><i /><i /></div>
      </div>
      <div className={styles.diagram} aria-hidden="true">
        <div className={styles.request}><CircleDot size={13} /> HTTP request</div>
        <div className={styles.engine}>
          <span className={styles.engineIcon}><Icon name="server" size={28} /></span>
          <strong>NestJS</strong><small>API layer</small>
        </div>
        <div className={styles.bus}><i /><i /><i /></div>
        <div className={styles.services}>
          {services.map(service => (
            <div className={styles.service} key={service.name}>
              <Icon name={service.icon} size={19} />
              <strong>{service.name}</strong>
              <small>{service.detail}</small>
            </div>
          ))}
        </div>
      </div>
      <figcaption className={styles.visualFoot}><span><i aria-hidden="true" /> Request lifecycle</span><span>Conceptual diagram</span></figcaption>
    </figure>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={'wrap ' + styles.heroGrid}>
        <motion.div initial={reduce ? false : { y: 14 }} animate={{ y: 0 }} transition={{ duration: reduce ? 0 : 0.52 }}>
          <p className="eyebrow"><span aria-hidden="true" /> Hello, I’m {profile.name}.</p>
          <h1 id="hero-title">Building the backend behind <em>real-world digital products.</em></h1>
          <p className={styles.intro}>{profile.introduction}</p>
          <div className={styles.actions}>
            <a href="#work" className="button button-primary">View My Work <ArrowDown size={17} aria-hidden="true" /></a>
            <ResumeLink />
          </div>
          <div className={styles.heroMeta}>
            <SocialLinks />
            <span className={styles.metaRule} aria-hidden="true" />
            <span className={styles.location}><MapPin size={16} aria-hidden="true" />{profile.location}</span>
            <a href="#contact" className={'text-link ' + styles.connect}>Let’s Connect <ArrowRight size={15} aria-hidden="true" /></a>
          </div>
        </motion.div>
        <motion.div initial={reduce ? false : { y: 19 }} animate={{ y: 0 }}
          transition={{ duration: reduce ? 0 : 0.62, ease: 'easeOut' }} className={styles.visualColumn}>
          <SystemIllustration />
        </motion.div>
      </div>
    </section>
  )
}
