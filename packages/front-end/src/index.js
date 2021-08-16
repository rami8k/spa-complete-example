import { registerApplication, start } from 'single-spa'
import { pathToRegexp } from 'path-to-regexp'
import { importApp } from './helpers/importApp'

const regexp = pathToRegexp(location.pathname)

let importedApps = []
let shareScope = []

registerApplication({
  name: 'app1-article',
  app: () => importApp('@bna/app1/Article', shareScope, importedApps),
  activeWhen: () => regexp.test('/news/:channel/:article')
})

registerApplication({
  name: 'app1-brand',
  app: () => importApp('@bna/app1/BrandLanding', shareScope, importedApps),
  activeWhen: () => regexp.test('/news/bloomberglawnews')
})

registerApplication({
  name: 'app2-brand',
  app: () => importApp('@bna/app2/BrandLanding', shareScope, importedApps),
  activeWhen: () => regexp.test('/news/bloomberglawnews')
})

// registerApplication(
//   'app1-article',
//   () => import('app1/Article'),
//   location => location.pathname.startsWith('/')
// )

// registerApplication(
//   'app2-brand',
//   () => import('app2/BrandLanding'),
//   location => { 
//     return location.pathname.startsWith('/')
//   }
// );

start();