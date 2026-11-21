import { Html, Head, Main, NextScript } from 'next/document'

const loadTheme = "try { if (localStorage.getItem('portfolio-theme') === 'light') document.documentElement.dataset.theme = 'light'; } catch {}"

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script dangerouslySetInnerHTML={{ __html: loadTheme }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
