import { createRouter, createWebHistory } from 'vue-router'
import Internacao from '../views/Internacao.vue'

const routes = [
  {
    path:'/', 
    name: "Index",
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/dashboard',
    name:"Dashboard",
    component: () =>import('@/views/dashboard.vue')
  },
  {
    path: '/internacao',
    name:"Internacao",
    component: Internacao
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
