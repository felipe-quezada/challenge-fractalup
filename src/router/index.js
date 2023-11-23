import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FirstView from '../views/FirstView.vue'
import SecondView from '../views/SecondView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/firstview',
      name: 'firstview',
      component: FirstView
    },
    {
      path: '/secondview',
      name: 'secondview',
      component: SecondView
    }
  ]
})

export default router
