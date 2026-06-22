<script setup>
/**
 * Mostre.vue
 * Archivio mostre con filtri per stato (in corso / in arrivo / archiviate)
 */
import { ref, computed } from 'vue'
import { mostre, statoLabels } from '../data/mockData.js'
import MostraCard from '../components/MostraCard.vue'

// Filtro attivo ('tutte' | 'in-corso' | 'in-arrivo' | 'archiviata')
const filtroAttivo = ref('tutte')

// Opzioni del filtro con contatori
const filtri = computed(() => [
  { value: 'tutte',    label: 'Tutte',      count: mostre.length },
  { value: 'in-corso', label: 'In corso',   count: mostre.filter(m => m.stato === 'in-corso').length },
  { value: 'in-arrivo', label: 'In arrivo', count: mostre.filter(m => m.stato === 'in-arrivo').length },
  { value: 'archiviata', label: 'Archiviate', count: mostre.filter(m => m.stato === 'archiviata').length },
])

// Mostre filtrate in base alla selezione attiva
const mostreFiltrate = computed(() => {
  if (filtroAttivo.value === 'tutte') return mostre
  return mostre.filter((m) => m.stato === filtroAttivo.value)
})
</script>

<template>
  <div class="min-h-screen bg-stone-50">

    <!-- ═══ INTESTAZIONE PAGINA ════════════════════════════════════════════════ -->
    <section class="bg-stone-900 pt-28 sm:pt-32 pb-12 sm:pb-16">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="w-8 h-px bg-amber-400 mb-6" />
        <h1 class="font-display text-3xl sm:text-4xl md:text-6xl text-white mb-4">Mostre</h1>
        <p class="text-stone-400 text-base max-w-xl leading-relaxed">
          Sfoglia l'archivio completo delle esposizioni: quelle attualmente in corso,
          le prossime inaugurazioni e le mostre passate.
        </p>
      </div>
    </section>

    <!-- ═══ FILTRI ══════════════════════════════════════════════════════════════ -->
    <div class="sticky top-16 z-40 bg-stone-50/80 backdrop-blur-xl border-b border-stone-200/60">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="flex gap-2 overflow-x-auto py-3">
          <button
            v-for="filtro in filtri"
            :key="filtro.value"
            @click="filtroAttivo = filtro.value"
            class="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-medium whitespace-nowrap transition-all duration-300"
            :class="filtroAttivo === filtro.value
              ? 'bg-stone-900 text-white shadow-sm'
              : 'text-stone-500 hover:text-stone-900 hover:bg-stone-900/5'"
          >
            {{ filtro.label }}
            <span
              class="text-xs font-normal rounded-full w-5 h-5 flex items-center justify-center"
              :class="filtroAttivo === filtro.value
                ? 'bg-stone-900 text-white'
                : 'bg-stone-200 text-stone-500'"
            >
              {{ filtro.count }}
            </span>
          </button>
        </div>
      </div>
    </div>

    <!-- ═══ GRIGLIA MOSTRE ══════════════════════════════════════════════════════ -->
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-16">

      <!-- Messaggio vuoto -->
      <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
      >
        <p
          v-if="mostreFiltrate.length === 0"
          class="text-center text-stone-400 py-20 text-sm"
        >
          Nessuna mostra in questa categoria.
        </p>
      </Transition>

      <!-- Griglia -->
      <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
      >
        <div
          v-if="mostreFiltrate.length > 0"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <MostraCard
            v-for="mostra in mostreFiltrate"
            :key="mostra.id"
            :mostra="mostra"
          />
        </div>
      </Transition>
    </div>
  </div>
</template>
