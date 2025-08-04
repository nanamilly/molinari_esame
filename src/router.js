import { createWebHistory, createRouter } from 'vue-router'
import Homepage from './views/Homepage.vue'
import About from './views/About.vue'

const routes = [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
    },
    {
      path: '/About',
      name: 'About',  
      component: About,
    }
  ]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router