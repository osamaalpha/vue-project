import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/editHouse',
      name: 'editHouse',
      component: () => import('../views/EditHouseView.vue')
    },

    {
      path: '/createHouse',
      name: 'createHouse',
      component: () => import('../views/CreateHouseView.vue')
    },

    {
      path: '/house/:id',
      name: 'house',
      component: () => import('../views/HouseView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'ErrorView',
      component: () => import('../views/Error.vue')
    }
  ],
  linkActiveClass: 'nav-item-active'
})

export default router
