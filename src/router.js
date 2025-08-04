import { createWebHistory, createRouter } from 'vue-router'
import home from './views/home.vue'
import About from './views/About.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: home,
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