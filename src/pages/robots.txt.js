import { getSiteOrigin } from '@/data/site.mjs'

export function getServerSideProps({ res }) {
  const origin = getSiteOrigin()
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end('User-agent: *\nAllow: /\n' + (origin ? 'Sitemap: ' + origin + '/sitemap.xml\n' : ''))
  return { props: {} }
}

export default function Robots() { return null }
