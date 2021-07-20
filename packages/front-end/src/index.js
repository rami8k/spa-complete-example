import { registerApplication, start } from 'single-spa';

let initScope = []

registerApplication(
  'app1-article',
  () => System.import('app1').then(app => {
    app.init(initScope)
    return app.get('./Article').then(module => {
      return module()
    })
  }),
  location => location.pathname.startsWith('/')
)

registerApplication(
  'app1-brand',
  () => System.import('app1').then(app => {
    return app.get('./BrandLanding').then(module => {
      return module()
    })
  }),
  location => location.pathname.startsWith('/')
)

registerApplication(
  'app2-brand',
  () => System.import('app2').then(app => {
    app.init(initScope)

    return app.get('./BrandLanding').then(module => {
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