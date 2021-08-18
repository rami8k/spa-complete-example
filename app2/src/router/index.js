import Vue from "vue";
import VueRouter from 'vue-router'
import View2 from '../views/View2.vue'

Vue.use(VueRouter)

export function createRouter() {
  const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: View2
      }
    ]
  })

  return router
}
