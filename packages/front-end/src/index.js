import { registerApplication, start } from 'single-spa';

let sharedScope = []

registerApplication({
  name: 'app1-article',
  app: () => System.import('@bna/app1').then(app => {
    app.init(sharedScope)
    return app.get('Article').then(module => {
      return module()
    })
  }),
  activeWhen: '/'
})

registerApplication({
  name: 'app1-brand',
  app: () => System.import('@bna/app1').then(app => {
    return app.get('BrandLanding').then(module => {
      return module()
    })
  }),
  activeWhen: '/'
})

registerApplication(
  'app2-brand',
  () => System.import('@bna/app2').then(app => {
    app.init(sharedScope)

    return app.get('BrandLanding').then(module => {
      return module()
    })
  }),
  location => { 
    return location.pathname.startsWith('/')
  }
);

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