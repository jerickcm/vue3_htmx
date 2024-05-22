import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HtmxView from '../views/HtmxView.vue'
import AboutView from '../views/AboutView.vue'
import HtmxViewDynamic from '../views/HtmxDynamicView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/htmx',
      name: 'htmx',
      component: HtmxView
    },
    { path: '/html_x/:case', component: HtmxViewDynamic }
  ]
})

export default router
