import Head from 'next/head'
import { profile } from '@/data/profile.mjs'
import { getSiteOrigin } from '@/data/site.mjs'

const origin = getSiteOrigin()
const personId = origin ? origin + '/#ziad-hatem' : undefined

const person = {
  '@type': 'Person',
  '@id': personId,
  name: profile.name,
  alternateName: profile.fullName,
  jobTitle: profile.title,
  description: profile.headline,
  address: { '@type': 'PostalAddress', addressLocality: 'Cairo', addressCountry: 'EG' },
  sameAs: [profile.github, profile.linkedin],
  url: origin ? origin + '/' : undefined,
}

export default function Seo({ project }) {
  const title = project ? project.name + ' Case Study | ' + profile.name : profile.name + ' | ' + profile.title
  const description = project ? project.summary : profile.introduction
  const path = project ? '/projects/' + project.slug : '/'
  const canonical = origin ? origin + path : undefined
  const imagePath = project ? project.cover : '/media/portfolio-preview.jpg'
  const image = origin ? origin + imagePath : imagePath
  const imageAlt = project ? project.coverAlt : 'Ziad Hatem, Backend & Full Stack Developer'
  const structured = project ? {
    '@type': 'CreativeWork',
    name: project.name + ' Case Study',
    description,
    url: canonical,
    image: origin ? image : undefined,
    author: personId ? { '@id': personId } : person,
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
      {canonical && <link rel="canonical" href={canonical} />}
      {canonical && <meta property="og:url" content={canonical} />}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...structured }).replace(/</g, '\\u003c') }} />
    </Head>
  )
}
