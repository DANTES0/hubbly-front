import { Pages } from '@/enums/pages'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/pages/Landing.vue'),
    },
    {
      path: Pages.Login.StaticPath,
      name: Pages.Login.Name,
      component: () => import('@/pages/Login.vue'),
    },
    {
      path: Pages.Registration.StaticPath,
      name: Pages.Registration.Name,
      component: () => import('@/pages/Registration.vue'),
    },
    {
      path: Pages.ResetPassword.StaticPath,
      name: Pages.ResetPassword.Name,
      component: () => import('@/pages/ResetPassword.vue'),
    },
    {
      path: Pages.ResetConfirmPassword.StaticPath,
      name: Pages.ResetConfirmPassword.Name,
      component: () => import('@/pages/ResetPasswordConfirm.vue'),
    },
    {
      path: Pages.ConfirmEmail.StaticPath,
      name: Pages.ConfirmEmail.Name,
      component: () => import('@/pages/ConfirmEmail.vue'),
    },
    {
      path: Pages.MyEvents.StaticPath,
      name: Pages.MyEvents.Name,
      component: () => import('@/pages/MyEvents.vue'),
    },
    {
      path: Pages.CreateEvents.StaticPath,
      name: Pages.CreateEvents.Name,
      component: () => import('@/pages/CreateEvent.vue'),
      children: [
        // /events/info
        {
          path: Pages.CreateEvents.Children.MainInfo.StaticPath,
          name: Pages.CreateEvents.Children.MainInfo.Name,
          component: () => import('@/components/pages/createEvent/MainInfo.vue'),
        },
        // /events/templates
        {
          path: Pages.CreateEvents.Children.Templates.StaticPath,
          name: Pages.CreateEvents.Children.Templates.Name,
          component: () => import('@/components/pages/createEvent/Templates.vue'),
        },
        // /events/registration-form → обёртка
        {
          path: Pages.CreateEvents.Children.RegistrationForm.StaticPath,
          name: Pages.CreateEvents.Children.RegistrationForm.Name,
          component: () => import('@/pages/RegistrationForm.vue'),
          children: [
            // /events/registration-form/edit
            {
              path: Pages.CreateEvents.Children.RegistrationForm.Children.Edit.StaticPath,
              name: Pages.CreateEvents.Children.RegistrationForm.Children.Edit.Name,
              component: () =>
                import('@/components/pages/createEvent/RegistrationForm/RegistrationFormEdit.vue'),
            },
          ],
        },
      ],
    },
  ],
})

export default router
