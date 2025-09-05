import { Pages } from '@/enums/pages'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: import('@/pages/Landing.vue'),
    },
    {
      path: Pages.Login.StaticPath,
      name: Pages.Login.Name,
      component: import('@/pages/Login.vue'),
    },
  ],
})

export default router
