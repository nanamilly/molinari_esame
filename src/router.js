import { createWebHistory, createRouter } from 'vue-router'

// Lazy loading di tutte le viste per ottimizzare il bundle
const Home            = () => import('./views/Home.vue')
const Mostre          = () => import('./views/Mostre.vue')
const DettaglioMostra = () => import('./views/DettaglioMostra.vue')
const Artisti         = () => import('./views/Artisti.vue')
const DettaglioArtista = () => import('./views/DettaglioArtista.vue')
const About           = () => import('./views/About.vue')
const Prenotazioni    = () => import('./views/Prenotazioni.vue')

const routes = [
  { path: '/',              name: 'Home',              component: Home },
  { path: '/mostre',        name: 'Mostre',            component: Mostre },
  { path: '/mostre/:id',    name: 'DettaglioMostra',   component: DettaglioMostra },
  { path: '/artisti',       name: 'Artisti',           component: Artisti },
  { path: '/artisti/:id',   name: 'DettaglioArtista',  component: DettaglioArtista },
  { path: '/prenotazioni',  name: 'Prenotazioni',      component: Prenotazioni },
  { path: '/about',         name: 'About',             component: About },
  // Reindirizza le vecchie rotte per retrocompatibilità
  { path: '/About',         redirect: '/about' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Torna in cima alla pagina ad ogni navigazione
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router