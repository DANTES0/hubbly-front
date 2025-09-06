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
    {
      path: Pages.Registration.StaticPath,
      name: Pages.Registration.Name,
      component: import('@/pages/Registration.vue'),
    },
    {
      path: Pages.ResetPassword.StaticPath,
      name: Pages.ResetPassword.Name,
      component: import('@/pages/ResetPassword.vue'),
    },
    {
      path: Pages.ResetConfirmPassword.StaticPath,
      name: Pages.ResetConfirmPassword.Name,
      component: import('@/pages/ResetPasswordConfirm.vue'),
    },
    {
      path: Pages.ConfirmEmail.StaticPath,
      name: Pages.ConfirmEmail.Name,
      component: import('@/pages/ConfirmEmail.vue'),
    },
  ],
})

export default router
