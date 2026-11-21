# Ziad Hatem · Developer Portfolio

A Next.js portfolio for Ziad Hatem, a backend and full stack developer based in Cairo. The two featured case studies are [ShineUp](https://ziadhatem111111-sys.github.io/portfolio/projects/shineup/) and [Shoezy](https://ziadhatem111111-sys.github.io/portfolio/projects/shoezy/).

## Run locally

Use Node.js 20 or newer. The lockfile pins the dependencies used for this implementation.

```sh
npm ci
npm run dev
```

Open [localhost:3000/portfolio/](http://localhost:3000/portfolio/). To verify and build the static site:

```sh
npm run lint
npm run build
```

The production build writes the static site to `out/` for hosting at `/portfolio/`. The public origin and base path live in [site.mjs](src/data/site.mjs). The build also generates the sitemap, robots file, and `.nojekyll`.

Search crawlers look for `robots.txt` at the domain root. Submit the [project sitemap](https://ziadhatem111111-sys.github.io/portfolio/sitemap.xml) directly or reference it from the domain-root robots file if you manage that site.

## Deploy to GitHub Pages

In the repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The [deployment workflow](.github/workflows/deploy.yml) runs on pushes to `main` and can also run manually from the Actions tab. It installs locked dependencies, runs lint and the build, and publishes `out/` to [the portfolio URL](https://ziadhatem111111-sys.github.io/portfolio/).

## Starter audit

The workspace already contained the unpacked starter. It used the Pages Router and CSS Modules, with Framer Motion installed and no Tailwind dependency. It served the stock Next.js homepage and example API route, with tutorial content, unrelated project and portrait images, and a dummy PDF in public assets.

## Implementation plan

1. Retain the Pages Router and CSS Modules. Build a reusable layout, responsive section navigation, and persistent theme controls.
2. Centralize profile and project content. Lead the home page with the engineering diagram and the two flagship projects, then add experience, supporting work, and contact.
3. Prerender both case studies. Explain product context and engineering work, add conceptual diagrams, and cite the public product screenshots.
4. Remove starter content, add portfolio metadata and a PDF download, and verify the production build, lint, and browser interactions.

## Edit content

- [Profile data](src/data/profile.mjs) contains identity, contact details, skills, experience, and credentials.
- [Project data](src/data/projects.mjs) contains both case studies and supporting projects. Fill Shoezy’s technology and contribution fields after verifying them from the project source or documentation.
- [Résumé PDF](public/ziad-hatem-resume.pdf) is a one-page portfolio adaptation of the CV facts supplied in the brief. Replace the file with the original reviewed CV when it is available, or update the file path in the profile data.

The featured project covers are concept imagery. The case-study galleries use [ShineUp’s public App Store screenshots](https://apps.apple.com/sa/app/id6792269696) and desktop and mobile captures of [Shoezy’s public catalog](https://shoezy.store/products).
