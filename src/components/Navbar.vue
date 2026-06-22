<script setup>
/**
 * Navbar.vue
 * Barra di navigazione fissa con supporto per menu mobile
 */
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X, Ticket } from 'lucide-vue-next'

const route = useRoute()
const menuAperto = ref(false)

// Definizione dei link di navigazione
const navLinks = [
  { to: '/',        label: 'Home' },
  { to: '/mostre',  label: 'Mostre' },
  { to: '/artisti', label: 'Artisti' },
  { to: '/about',   label: 'About' },
]

// Controlla se un link è attivo (percorso corrente o sotto-percorso)
function isActive(path) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

function chiudiMenu() {
  menuAperto.value = false
}
</script>

<template>
  <!-- Navbar fissa con effetto glassmorphism -->
  <nav class="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-xl border-b border-stone-200/60 supports-backdrop-blur:bg-stone-50/60">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="flex items-center justify-between h-16">

        <!-- Logo / Nome museo -->
        <RouterLink to="/" class="flex flex-col leading-none" @click="chiudiMenu">
          <span class="text-xs tracking-[0.3em] text-stone-500 uppercase font-light">Archivio</span>
          <span class="font-display text-xl text-stone-900 tracking-wide">Aperto</span>
        </RouterLink>

        <!-- Navigazione desktop -->
        <div class="hidden md:flex items-center gap-4">
          <div class="flex items-center gap-1 bg-stone-900/[0.03] rounded-full p-1">
            <RouterLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="relative text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full transition-all duration-300"
              :class="isActive(link.to)
                ? 'text-white bg-stone-900 font-medium shadow-sm'
                : 'text-stone-500 hover:text-stone-900'"
            >
              {{ link.label }}
            </RouterLink>
          </div>

          <!-- CTA Prenotazioni -->
          <RouterLink
            to="/prenotazioni"
            class="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-medium px-5 py-2.5 rounded-full transition-all duration-300"
            :class="isActive('/prenotazioni')
              ? 'bg-stone-900 text-white'
              : 'bg-amber-300 text-stone-900 hover:bg-amber-400 hover:shadow-md hover:shadow-amber-300/30'"
          >
            <Ticket :size="13" />
            Prenota
          </RouterLink>
        </div>

        <!-- Pulsante menu mobile -->
        <button
          class="md:hidden text-stone-700 hover:text-stone-900 transition-colors rounded-full p-2 hover:bg-stone-900/5"
          @click="menuAperto = !menuAperto"
          aria-label="Apri menu"
        >
          <X v-if="menuAperto" :size="20" />
          <Menu v-else :size="20" />
        </button>
      </div>
    </div>

    <!-- Menu mobile a tendina -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="menuAperto" class="md:hidden bg-stone-50 border-t border-stone-200 px-6 py-4">
        <div class="flex flex-col gap-1 mb-3">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-xs uppercase tracking-[0.2em] py-3 px-4 rounded-xl transition-all duration-200"
            :class="isActive(link.to) ? 'text-white bg-stone-900 font-medium' : 'text-stone-500 hover:bg-stone-900/5'"
            @click="chiudiMenu"
          >
            {{ link.label }}
          </RouterLink>
        </div>
        <RouterLink
          to="/prenotazioni"
          class="flex items-center justify-center gap-1.5 text-xs uppercase tracking-[0.2em] font-medium py-3.5 px-4 rounded-xl transition-all duration-200"
          :class="isActive('/prenotazioni') ? 'bg-stone-900 text-white' : 'bg-amber-300 text-stone-900'"
          @click="chiudiMenu"
        >
          <Ticket :size="14" />
          Prenota la tua visita
        </RouterLink>
      </div>
    </Transition>
  </nav>
</template>
