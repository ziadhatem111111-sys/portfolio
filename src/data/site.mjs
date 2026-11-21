const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL

export function getSiteOrigin() {
  if (!configuredOrigin) return undefined
  try {
    const parsed = new URL(configuredOrigin)
    if (parsed.protocol === 'https:' || parsed.protocol === 'http:') return parsed.origin
  } catch {
    return undefined
  }
  return undefined
}
