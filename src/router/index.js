import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/index.vue'
import MainView from '../views/MainView/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: '/ai',
      children: [
        {
          path: '/:type',
          name: 'main',
          component: MainView,
        },
      ]
    },

  ],
})

export default router
