import Head from 'next/head'
import { profile } from '@/data/profile.mjs'
import { projectPath, siteUrl } from '@/data/site.mjs'

const personId = siteUrl('/#ziad-hatem')

const person = {
  '@type': 'Person',
  '@id': personId,
  name: profile.name,
  alternateName: profile.fullName,
  jobTitle: profile.title,
  description: profile.headline,
  address: { '@type': 'PostalAddress', addressLocality: 'Cairo', addressCountry: 'EG' },
  sameAs: [profile.github, profile.linkedin],
  url: siteUrl('/'),
}

export default function Seo({ project }) {
  const title = project ? project.name + ' Case Study | ' + profile.name : profile.name + ' | ' + profile.title
  const description = project ? project.summary : profile.introduction
  const canonical = siteUrl(project ? projectPath(project.slug) : '/')
  const image = siteUrl(project ? project.cover : '/media/portfolio-preview.jpg')
  const imageAlt = project ? project.coverAlt : 'Ziad Hatem, Backend & Full Stack Developer'
  const structured = project ? {
    '@type': 'CreativeWork',
    name: project.name + ' Case Study',
    description,
    url: canonical,
    image,
    author: { '@id': personId },
    about: { '@type': 'Thing', name: project.name, url: project.url },
  } : person

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={project ? 'article' : 'website'} />
      <meta property="og:site_name" content={profile.name} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <link rel="canonical" href={canonical} />
      <meta property="og:url" content={canonical} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...structured }).replace(/</g, '\\u003c') }} />
    </Head>
  )
}
