import { getSiteOrigin } from '@/data/site.mjs'
import { featuredProjects } from '@/data/projects.mjs'

export function getServerSideProps({ res }) {
  const origin = getSiteOrigin()
  if (!origin) return { notFound: true }
  const paths = ['/', ...featuredProjects.map(project => '/projects/' + project.slug)]
  const urls = paths.map(path => '<url><loc>' + origin + path + '</loc></url>').join('')
  res.setHeader('Content-Type', 'application/xml; charset=utf-8')
  res.end('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + urls + '</urlset>')
  return { props: {} }
}

export default function Sitemap() { return null }
