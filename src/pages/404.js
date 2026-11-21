import Head from 'next/head'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="wrap section">
      <Head><title>Page unavailable | Ziad Hatem</title></Head>
      <div className="section-heading">
        <p className="eyebrow"><span aria-hidden="true" />404</p>
        <h1>Page unavailable</h1>
        <p className="section-description">This page may have moved or the address may be incomplete.</p>
      </div>
      <Link href="/" className="button button-primary">Back to portfolio</Link>
    </section>
  )
}
