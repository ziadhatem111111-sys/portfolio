import '@fontsource-variable/inter'
import '@fontsource-variable/space-grotesk'
import '@/styles/globals.css'
import { MotionConfig } from 'framer-motion'
import Layout from '@/components/layout'

export default function App({ Component, pageProps }) {
  return (
    <MotionConfig reducedMotion="user">
      <Layout><Component {...pageProps} /></Layout>
    </MotionConfig>
  )
}
