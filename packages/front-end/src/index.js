import { registerApplication, start } from 'single-spa';

registerApplication(
  'app1-article',
  () => import('app1/Article'),
  location => location.pathname.startsWith('/')
)

registerApplication(
  'app2-brand',
  () => import('app2/BrandLanding'),
  location => { 
    return location.pathname.startsWith('/')
  }
);

start();