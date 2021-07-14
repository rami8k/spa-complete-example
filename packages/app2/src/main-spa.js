// import './set-public-path'
import Vue from 'vue'
import singleSpaVue from 'single-spa-vue'
import App from './App.vue'
import { createRouter } from './router'

const router = createRouter()

Vue.config.productionTip = false

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    template: '<NewsApp />',
    router,
  }
})

export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount
