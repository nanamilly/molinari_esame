<script setup>
/**
 * Footer.vue
 * Piede di pagina con info istituzionali e link rapidi
 */
import { MapPin, Phone, Mail, Clock } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-stone-900 text-stone-300 mt-auto">
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">

        <!-- Colonna 1 - Identità museo -->
        <div>
          <div class="mb-6">
            <p class="text-xs tracking-[0.3em] text-stone-500 uppercase mb-1">Archivio</p>
            <h2 class="font-display text-2xl text-white">Aperto</h2>
          </div>
          <p class="text-sm text-stone-400 leading-relaxed">
            Un archivio digitale dedicato alla conservazione e alla divulgazione
            del patrimonio artistico, dai grandi maestri del passato ai protagonisti
            dell'arte contemporanea.
          </p>
        </div>

        <!-- Colonna 2 - Link rapidi -->
        <div>
          <h3 class="text-xs uppercase tracking-[0.2em] text-stone-500 mb-5">Esplora</h3>
          <nav class="flex flex-col gap-3">
            <RouterLink
              v-for="(link, i) in [
                { to: '/', label: 'Home' },
                { to: '/mostre', label: 'Mostre' },
                { to: '/artisti', label: 'Artisti' },
                { to: '/prenotazioni', label: 'Prenotazioni' },
                { to: '/about', label: 'About' },
              ]"
              :key="i"
              :to="link.to"
              class="text-sm text-stone-400 hover:text-white transition-colors duration-200"
            >
              {{ link.label }}
            </RouterLink>
          </nav>
        </div>

        <!-- Colonna 3 - Contatti -->
        <div>
          <h3 class="text-xs uppercase tracking-[0.2em] text-stone-500 mb-5">Contatti</h3>
          <div class="flex flex-col gap-4">
            <div class="flex items-start gap-3">
              <MapPin :size="15" class="mt-0.5 text-stone-500 flex-shrink-0" />
              <span class="text-sm text-stone-400">Via dell'Arte 14, 00186 Roma</span>
            </div>
            <div class="flex items-center gap-3">
              <Phone :size="15" class="text-stone-500 flex-shrink-0" />
              <span class="text-sm text-stone-400">+39 06 1234567</span>
            </div>
            <div class="flex items-center gap-3">
              <Mail :size="15" class="text-stone-500 flex-shrink-0" />
              <span class="text-sm text-stone-400">info@archivio-aperto.it</span>
            </div>
            <div class="flex items-start gap-3">
              <Clock :size="15" class="mt-0.5 text-stone-500 flex-shrink-0" />
              <span class="text-sm text-stone-400">Mar – Dom: 10:00 – 19:00</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Linea divisoria e copyright -->
      <div class="border-t border-stone-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-xs text-stone-600">
          © 2026 Archivio Aperto — Museo d'Arte. Tutti i diritti riservati.
        </p>
        <p class="text-xs text-stone-700 italic">
          Costruito con Vue 3 + Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>
