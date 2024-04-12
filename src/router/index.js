import qs from 'qs'
import { createRouter, createWebHistory } from 'vue-router'
import { store } from '@/store'
import * as roleType from '@/constants/roleType'

const router = createRouter({
  history: createWebHistory(),
  parseQuery: qs.parse,
  stringifyQuery: qs.stringify,
  routes: [
    {
      name: 'top',
      path: '/',
      component: () => import('@/views/pages/general/Top.vue'),
    },
    {
      name: 'about',
      path: '/about',
      component: () => import('@/views/pages/general/About.vue'),
    },
    {
      name: 'about-company',
      path: '/about_company',
      component: () => import('@/views/pages/general/Company.vue'),
    },
    {
      name: 'contact',
      path: '/contact',
      component: () => import('@/views/pages/general/Contact.vue'),
    },
    {
      name: 'faq',
      path: '/faq',
      component: () => import('@/views/pages/general/Faq.vue'),
    },
    {
      name: 'policy',
      path: '/policy',
      component: () => import('@/views/pages/general/Policy.vue'),
    },
    {
      name: 'terms',
      path: '/terms',
      component: () => import('@/views/pages/general/Terms.vue'),
    },
    {
      name: 'order-contract',
      path: '/order_contract',
      component: () => import('@/views/pages/general/OrderContract.vue'),
    },
    {
      name: 'user-auth',
      path: '/auth',
      children: [
        {
          name: 'user-auth-register',
          path: 'register',
          component: () => import('@/views/pages/auth/register/Index.vue'),
        },
        {
          name: 'user-auth-register-payment',
          path: 'register/payment',
          component: () => import('@/views/pages/auth/register/Payment.vue'),
        },
        {
          name: 'user-auth-register-completed',
          path: 'register/completed',
          component: () => import('@/views/pages/auth/register/Complete.vue'),
        },
        {
          name: 'user-auth-login',
          path: 'login',
          component: () => import('@/views/pages/auth/login/Index.vue'),
          meta: { role: roleType.USER },
        },
        {
          name: 'user-auth-forgot_password',
          path: 'forgot_password',
          component: () =>
            import('@/views/pages/auth/forgotPassword/Index.vue'),
          meta: { role: roleType.USER },
        },
        {
          name: 'user-auth-reset_password',
          path: 'reset_password',
          component: () => import('@/views/pages/auth/resetPassword/Index.vue'),
          meta: { role: roleType.USER },
        },
        {
          name: 'user-auth-verify',
          path: 'verify',
          component: () =>
            import('@/views/pages/auth/emailVerification/Index.vue'),
          meta: { role: roleType.USER },
        },
      ],
    },
    {
      name: 'company',
      path: '/company',
      children: [
        {
          name: 'company-auth',
          path: 'auth',
          children: [
            {
              name: 'company-auth-register',
              path: 'register',
              component: () => import('@/views/pages/auth/register/Index.vue'),
              meta: { role: roleType.COMPANY },
            },
            {
              name: 'company-auth-login',
              path: 'login',
              component: () => import('@/views/pages/auth/login/Index.vue'),
              meta: { role: roleType.COMPANY },
            },
            {
              name: 'company-auth-forgot_password',
              path: 'forgot_password',
              component: () =>
                import('@/views/pages/auth/forgotPassword/Index.vue'),
              meta: { role: roleType.COMPANY },
            },
            {
              name: 'company-auth-reset_password',
              path: 'reset_password',
              component: () =>
                import('@/views/pages/auth/resetPassword/Index.vue'),
              meta: { role: roleType.COMPANY },
            },
            {
              name: 'company-auth-verify',
              path: 'verify',
              component: () =>
                import('@/views/pages/auth/emailVerification/Index.vue'),
              meta: { role: roleType.COMPANY },
            },
          ],
        },
      ],
    },
    {
      name: 'admin-auth',
      path: '/admin/auth',
      children: [
        {
          name: 'admin-auth-login',
          path: 'login',
          component: () => import('@/views/pages/auth/login/Index.vue'),
          meta: { role: roleType.ADMIN },
        },
        {
          name: 'admin-auth-forgot_password',
          path: 'forgot_password',
          component: () =>
            import('@/views/pages/auth/forgotPassword/Index.vue'),
          meta: { role: roleType.ADMIN },
        },
        {
          name: 'admin-auth-reset_password',
          path: 'reset_password',
          component: () => import('@/views/pages/auth/resetPassword/Index.vue'),
          meta: { role: roleType.ADMIN },
        },
        {
          name: 'admin-auth-verify',
          path: 'verify',
          component: () =>
            import('@/views/pages/auth/emailVerification/Index.vue'),
          meta: { role: roleType.ADMIN },
        },
      ],
    },
    {
      name: 'admin',
      path: '/admin',
      component: () => import('@/views/pages/app/admin/Index.vue'),
      children: [
        {
          name: 'admin-dashboard',
          path: 'dashboard',
          component: () => import('@/views/pages/app/admin/Dashboard.vue'),
          meta: { auth: true },
        },
        {
          name: 'admin-users',
          path: 'users',
          component: () => import('@/views/pages/app/admin/users/Index.vue'),
          meta: { auth: true },
        },
      ],
    },
  ],
})

const redirectMap = {
  // '/': 'admin-dashboard',
  '/admin': 'admin-dashboard',
  '/auth': 'user-auth-login',
  '/login': 'user-auth-login',
  '/company/auth': 'company-auth-login',
  '/company/login': 'company-auth-login',
}

router.beforeEach((to, from, next) => {
  const normalizedPath = to.path.replace(/(.)\/$/, '$1')

  if (redirectMap[normalizedPath]) {
    return router.push(
      Object.assign({}, to, { name: redirectMap[normalizedPath] })
    )
  }

  if (to.meta.auth && !store.getters['auth/loggedIn']) {
    return router.push({ name: 'user-auth-login' })
  }

  next()
})

export default router
