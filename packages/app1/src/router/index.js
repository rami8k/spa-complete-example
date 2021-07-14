import Vue from "vue";
import VueRouter from 'vue-router'
import Article from '../views/Article.vue'

Vue.use(VueRouter)

export function createRouter() {
  const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Article
      }
    ]
  })

  return router
}
