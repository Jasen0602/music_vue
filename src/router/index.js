import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from '../views/Recommend.vue'
import Hot from '../views/Hot.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Recommend',
    component: Recommend
  },
  {
    path: '/Hot',
    name: 'Hot',
    component:Hot,

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
