import { registerApplication, start } from 'single-spa'
import { pathToRegexp } from 'path-to-regexp'

const regexp = pathToRegexp(location.pathname)

let sharedScope = []

registerApplication({
  name: 'app1-article',
  app: () => System.import('@bna/app1').then(app => {
    app.init(sharedScope)
    return app.get('Article').then(module => {
      return module()
    })
  }),
  activeWhen: () => regexp.test('/news/:channel/:article')
})

registerApplication({
  name: 'app1-brand',
  app: () => System.import('@bna/app1').then(app => {
    return app.get('BrandLanding').then(module => {
      return module()
    })
  }),
  activeWhen: () => regexp.test('/news/bloomberglawnews')
})

registerApplication({
  name: 'app2-brand',
  app: () => System.import('@bna/app2').then(app => {
    app.init(sharedScope)

    return app.get('BrandLanding').then(module => {
      return module()
    })
  }),
  activeWhen: () => regexp.test('/news/bloomberglawnews1')
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