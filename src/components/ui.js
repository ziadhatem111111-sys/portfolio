import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Activity, ArrowUpRight, Award, Braces, BriefcaseBusiness, CodeXml, CreditCard,
  Database, GraduationCap, Layers3, MapPin, PanelsTopLeft, Search, Server,
  ShieldCheck, ShoppingBag, Terminal, TrainFront,
} from 'lucide-react'

const icons = {
  activity: Activity, award: Award, bag: ShoppingBag, braces: Braces, briefcase: BriefcaseBusiness,
  code: CodeXml, credit: CreditCard, database: Database, graduation: GraduationCap,
  layers: Layers3, map: MapPin, panels: PanelsTopLeft, search: Search, server: Server,
  shield: ShieldCheck, terminal: Terminal, train: TrainFront,
}

export function Icon({ name, ...props }) {
  const Glyph = icons[name]
  return <Glyph aria-hidden="true" size={20} strokeWidth={1.65} {...props} />
}

export function Reveal({ children, className, as = 'div' }) {
  const reduce = useReducedMotion()
  const Element = motion[as]
  return (
    <Element className={className} initial={reduce ? false : { y: 12 }}
      whileInView={{ y: 0 }} viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduce ? 0 : 0.48, ease: 'easeOut' }}>
      {children}
    </Element>
  )
}

export function SectionHeading({ label, title, description, id }) {
  return (
    <div className="section-heading">
      {label && <p className="eyebrow"><span aria-hidden="true" />{label}</p>}
      <h2 id={id}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

export function Tags({ items }) {
  return <ul className="tags" aria-label="Technologies">{items.map(item => <li key={item}>{item}</li>)}</ul>
}

export function ExternalLink({ href, children, className = 'text-link', icon = true, ...props }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>
      {children}{icon && <ArrowUpRight size={16} aria-hidden="true" />}
    </a>
  )
}

export function ProjectCover({ project, priority = false, className, linked = false }) {
  const image = (
    <div className="cover-image">
      <Image src={project.cover} alt={project.coverAlt} fill priority={priority}
        sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 600px" />
    </div>
  )
  return (
    <figure className={className}>
      {linked
        ? <Link href={'/projects/' + project.slug} className="cover-link" aria-label={'Read the ' + project.name + ' case study'}>{image}</Link>
        : image}
      <figcaption className="cover-caption">Concept imagery</figcaption>
    </figure>
  )
}
