import { registerApplication, start } from 'single-spa'
import { pathToRegexp } from 'path-to-regexp'
import { importApp } from './helpers/importApp'

const regexp = pathToRegexp(location.pathname)

let importedApps = []
let shareScope = []

registerApplication({
  name: 'app1-view1',
  app: () => importApp('app1/view1', shareScope, importedApps),
  activeWhen: () => true
})

registerApplication({
  name: 'app1-view2',
  app: () => importApp('app1/view2', shareScope, importedApps),
  activeWhen: () => true
})

registerApplication({
  name: 'app2-view',
  app: () => importApp('app2/view2', shareScope, importedApps),
  activeWhen: () => true
})

// registerApplication(
//   'app1-article',
//   () => import('app1/View1'),
//   location => location.pathname.startsWith('/')
// )

// registerApplication(
//   'app2-brand',
//   () => import('app2/View2'),
//   location => { 
//     return location.pathname.startsWith('/')
//   }
// );

start();