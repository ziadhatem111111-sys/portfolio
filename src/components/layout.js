import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUp, Download, Github, Linkedin, Menu, Moon, SquareTerminal, Sun, X } from 'lucide-react'
import { profile } from '@/data/profile.mjs'
import { withBasePath } from '@/data/site.mjs'
import { ExternalLink } from './ui'
import styles from '@/styles/Layout.module.css'

const navigation = [
  { id: 'work', label: 'Work' }, { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' }, { id: 'experience', label: 'Experience' },
]

export function ResumeLink({ className = 'button button-secondary', label = 'Download Resume' }) {
  return <a href={withBasePath(profile.resume)} download className={className} title="Portfolio résumé based on supplied CV details"><Download size={17} aria-hidden="true" />{label}</a>
}

export function SocialLinks() {
  return (
    <div className={styles.social}>
      <ExternalLink href={profile.github} aria-label="GitHub" className="icon-button" icon={false}><Github size={18} aria-hidden="true" /></ExternalLink>
      <ExternalLink href={profile.linkedin} aria-label="LinkedIn" className="icon-button" icon={false}><Linkedin size={18} aria-hidden="true" /></ExternalLink>
    </div>
  )
}

function ThemeToggle() {
  const [light, setLight] = useState(false)
  useEffect(() => { setLight(document.documentElement.dataset.theme === 'light') }, [])

  function toggleTheme() {
    const theme = light ? 'dark' : 'light'
    document.documentElement.dataset.theme = theme
    setLight(theme === 'light')
    try { window.localStorage.setItem('portfolio-theme', theme) } catch {}
  }

  return (
    <button type="button" className="icon-button" onClick={toggleTheme}
      aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'}>
      {light ? <Moon size={19} aria-hidden="true" /> : <Sun size={19} aria-hidden="true" />}
    </button>
  )
}

function Header() {
  const { pathname, events } = useRouter()
  const home = pathname === '/'
  const projectPage = pathname === '/projects/[slug]'
  const SectionLink = home ? 'a' : Link
  const reduce = useReducedMotion()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const menuButton = useRef(null)
  const navigationElement = useRef(null)
  const pendingSection = useRef('')

  useEffect(() => {
    if (!home) return
    const sections = [...navigation, { id: 'contact' }]
      .map(({ id }) => document.getElementById(id)).filter(Boolean)
    let frame = 0
    function update() {
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        setActive('contact')
        return
      }
      const cutoff = Math.min(window.innerHeight * 0.36, 215)
      setActive(sections.reduce((current, section) =>
        section.getBoundingClientRect().top <= cutoff ? section.id : current, ''))
    }
    function onScroll() {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [home])

  useEffect(() => {
    function close() { setOpen(false) }
    function focusSection() {
      const id = pendingSection.current
      pendingSection.current = ''
      if (id) requestAnimationFrame(() => document.getElementById(id)?.focus({ preventScroll: true }))
    }
    events.on('routeChangeStart', close)
    events.on('routeChangeComplete', focusSection)
    return () => {
      events.off('routeChangeStart', close)
      events.off('routeChangeComplete', focusSection)
    }
  }, [events])

  useEffect(() => {
    if (open) navigationElement.current?.querySelector('a')?.focus()
  }, [open])

  function sectionHref(id) {
    return (home ? '' : '/') + '#' + id
  }

  function selectSection(id) {
    if (open && home) document.getElementById(id)?.focus({ preventScroll: true })
    if (open && !home) pendingSection.current = id
    setOpen(false)
  }

  function menuKeyDown(event) {
    if (event.key === 'Escape' && open) {
      setOpen(false)
      menuButton.current?.focus()
    }
  }

  return (
    <header className={styles.header} onKeyDown={menuKeyDown}>
      <div className={'wrap ' + styles.headerRow}>
        <SectionLink href={home ? '#top' : '/'} className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.mark}><SquareTerminal size={19} aria-hidden="true" /></span>
          {profile.name}
        </SectionLink>
        <nav ref={navigationElement} id="site-nav" aria-label="Main navigation" className={styles.nav} data-open={open}>
          {navigation.map(({ id, label }) => (
            <SectionLink href={sectionHref(id)} key={id} onClick={() => selectSection(id)}
              aria-current={home && active === id ? 'location' : projectPage && id === 'work' ? 'true' : undefined}>
              {label}
              {(home ? active === id : projectPage && id === 'work') && <motion.span className={styles.navIndicator} layoutId="active-section"
                transition={{ duration: reduce ? 0 : 0.22 }} aria-hidden="true" />}
            </SectionLink>
          ))}
          <SectionLink href={sectionHref('contact')} onClick={() => selectSection('contact')} className={styles.mobileContact}
            aria-current={home && active === 'contact' ? 'location' : undefined}>Contact</SectionLink>
        </nav>
        <div className={styles.headerActions}>
          <ThemeToggle />
          <SectionLink href={sectionHref('contact')} className={'button button-secondary ' + styles.headerContact}
            aria-current={home && active === 'contact' ? 'location' : undefined}>Let’s Connect</SectionLink>
          <button type="button" className={'icon-button ' + styles.menuButton} onClick={() => setOpen(value => !value)}
            ref={menuButton} aria-expanded={open} aria-controls="site-nav" aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={'wrap ' + styles.footerRow}>
        <Link href="/" className={styles.brand}>
          <span className={styles.mark}><SquareTerminal size={18} aria-hidden="true" /></span>{profile.name}
        </Link>
        <p>{profile.title} <span aria-hidden="true">·</span> {profile.location}</p>
        <SocialLinks />
      </div>
    </footer>
  )
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const { asPath } = useRouter()
  useEffect(() => {
    function update() { setVisible(window.scrollY > 650) }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [asPath])
  return visible && <a href="#top" className={'icon-button ' + styles.scrollTop} aria-label="Back to top"><ArrowUp size={20} aria-hidden="true" /></a>
}

export default function Layout({ children }) {
  return (
    <>
      <div id="top" tabIndex={-1} />
      <a href="#content" className="skip-link">Skip to content</a>
      <Header />
      <main id="content" tabIndex={-1}>{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
