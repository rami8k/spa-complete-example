import Vue from "vue";
import VueRouter from 'vue-router'
import View1 from '../views/View1.vue'

Vue.use(VueRouter)

export function createRouter() {
  const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: View1
      }
    ]
  })

  return router
}
