export const basePath = '/portfolio'
const siteOrigin = 'https://ziadhatem111111-sys.github.io'

export function withBasePath(path) {
  return basePath + path
}

export function siteUrl(path) {
  return siteOrigin + withBasePath(path)
}

export function projectPath(slug) {
  return '/projects/' + slug + '/'
}
