import { createRouter, createWebHistory } from 'vue-router/auto'

const routes = [
  {
    path:'/', 
    name: "Index",
    component: () => import('@/pages/index.vue'),
  },
  {
    path: '/dashboard',
    name:"Dashboard",
    component: () => import('@/pages/dashboard.vue'),
    children: [
      {
        path: '/teste',
        name: 'Login',
        component: () =>
          import('@/pages/login.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
