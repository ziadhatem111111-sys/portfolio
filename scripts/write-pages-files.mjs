import { writeFile } from 'node:fs/promises'
import { featuredProjects } from '../src/data/projects.mjs'
import { projectPath, siteUrl } from '../src/data/site.mjs'

const output = new URL('../out/', import.meta.url)
const paths = ['/', ...featuredProjects.map(({ slug }) => projectPath(slug))]
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...paths.map(path => '  <url><loc>' + siteUrl(path) + '</loc></url>'),
  '</urlset>',
  '',
].join('\n')
const robots = 'User-agent: *\nAllow: /\nSitemap: ' + siteUrl('/sitemap.xml') + '\n'

await Promise.all([
  writeFile(new URL('sitemap.xml', output), sitemap),
  writeFile(new URL('robots.txt', output), robots),
  writeFile(new URL('.nojekyll', output), ''),
])
