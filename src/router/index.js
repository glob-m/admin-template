import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'Home',
    component: _ => import('../views/home/IndexPage.vue'),
    children: [
      {
        path: '/home',
        name: '首页',
        component: _ => import('../views/home/HomePage.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: _ => import('../views/login/IndexPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
