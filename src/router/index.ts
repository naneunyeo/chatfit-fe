import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mainLayout',
      component: () => import('../layout/MainLayout.vue'),
      children: [
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '404',
          name: 'notFound',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'blog',
          name: 'blog',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'feature',
          name: 'feature',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'home',
          name: 'home',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'pricing',
          name: 'pricing',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'service',
          name: 'service',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'testimonial',
          name: 'testimonial',
          component: () => import('../views/AboutView.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    }
  ]
})

export default router
