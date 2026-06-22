<script setup>
/**
 * Artisti.vue
 * Griglia degli artisti con ricerca per nome e filtro per nazionalità/corrente artistica
 */
import { ref, computed } from 'vue'
import { artisti } from '../data/mockData.js'
import ArtistaCard from '../components/ArtistaCard.vue'
import { Search, X } from 'lucide-vue-next'

// Stato dei filtri
const query         = ref('')
const filtroNaz     = ref('Tutte')
const filtroCorrente = ref('Tutte')

// Ricava i valori unici per i select dai dati
const nazionalita = computed(() => [
  'Tutte',
  ...new Set(artisti.map((a) => a.nazionalita).sort()),
])

const correntiArtistiche = computed(() => [
  'Tutte',
  ...new Set(artisti.map((a) => a.correnteArtistica).sort()),
])

// Lista artisti filtrata
const artistiFiltrati = computed(() => {
  return artisti.filter((a) => {
    const matchQuery =
      !query.value ||
      a.nome.toLowerCase().includes(query.value.toLowerCase()) ||
      a.correnteArtistica.toLowerCase().includes(query.value.toLowerCase())
    const matchNaz =
      filtroNaz.value === 'Tutte' || a.nazionalita === filtroNaz.value
    const matchCorrente =
      filtroCorrente.value === 'Tutte' || a.correnteArtistica === filtroCorrente.value
    return matchQuery && matchNaz && matchCorrente
  })
})

// Resetta tutti i filtri
function resettaFiltri() {
  query.value = ''
  filtroNaz.value = 'Tutte'
  filtroCorrente.value = 'Tutte'
}

const filtriAttivi = computed(
  () => query.value || filtroNaz.value !== 'Tutte' || filtroCorrente.value !== 'Tutte'
)
</script>

<template>
  <div class="min-h-screen bg-stone-50">

    <!-- ═══ INTESTAZIONE ═══════════════════════════════════════════════════════ -->
    <section class="bg-stone-900 pt-28 sm:pt-32 pb-12 sm:pb-16">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="w-8 h-px bg-amber-400 mb-6" />
        <h1 class="font-display text-3xl sm:text-4xl md:text-6xl text-white mb-4">Artisti</h1>
        <p class="text-stone-400 text-base max-w-xl leading-relaxed">
          Esplora le biografie, i portfolio e le storie dei maestri presenti nel nostro archivio,
          dal Rinascimento all'arte contemporanea.
        </p>
      </div>
    </section>

    <!-- ═══ BARRA RICERCA + FILTRI ════════════════════════════════════════════ -->
    <div class="sticky top-16 z-40 bg-stone-50/80 backdrop-blur-xl border-b border-stone-200/60">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 py-4">
        <div class="flex flex-col sm:flex-row gap-3">

          <!-- Campo di ricerca -->
          <div class="relative flex-1">
            <Search :size="15" class="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              v-model="query"
              type="text"
              placeholder="Cerca per nome o corrente artistica..."
              class="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-stone-300 rounded-full text-stone-700 placeholder-stone-400 focus:outline-none focus:border-stone-600 focus:ring-2 focus:ring-stone-900/10 transition-all"
            />
            <button
              v-if="query"
              @click="query = ''"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
            >
              <X :size="13" />
            </button>
          </div>

          <!-- Filtro nazionalità -->
          <select
            v-model="filtroNaz"
            class="px-4 py-2.5 text-xs uppercase tracking-widest bg-white border border-stone-300 rounded-full text-stone-600 focus:outline-none focus:border-stone-600 focus:ring-2 focus:ring-stone-900/10 transition-all cursor-pointer"
          >
            <option v-for="naz in nazionalita" :key="naz" :value="naz">
              {{ naz === 'Tutte' ? 'Tutte le nazionalità' : naz }}
            </option>
          </select>

          <!-- Filtro corrente -->
          <select
            v-model="filtroCorrente"
            class="px-4 py-2.5 text-xs uppercase tracking-widest bg-white border border-stone-300 rounded-full text-stone-600 focus:outline-none focus:border-stone-600 focus:ring-2 focus:ring-stone-900/10 transition-all cursor-pointer"
          >
            <option v-for="corrente in correntiArtistiche" :key="corrente" :value="corrente">
              {{ corrente === 'Tutte' ? 'Tutte le correnti' : corrente }}
            </option>
          </select>

          <!-- Reset filtri (visibile solo se attivi) -->
          <button
            v-if="filtriAttivi"
            @click="resettaFiltri"
            class="flex items-center gap-1.5 px-4 py-2.5 text-xs text-stone-500 hover:text-stone-900 border border-stone-300 rounded-full bg-white hover:bg-stone-50 transition-colors"
          >
            <X :size="12" /> Reset
          </button>
        </div>
      </div>
    </div>

    <!-- ═══ GRIGLIA ARTISTI ════════════════════════════════════════════════════ -->
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-16">

      <!-- Contatore risultati -->
      <p class="text-xs text-stone-400 uppercase tracking-widest mb-8">
        {{ artistiFiltrati.length }}
        {{ artistiFiltrati.length === 1 ? 'artista trovato' : 'artisti trovati' }}
      </p>

      <!-- Stato vuoto -->
      <div
        v-if="artistiFiltrati.length === 0"
        class="text-center py-20"
      >
        <p class="text-stone-400 text-sm mb-4">Nessun artista corrisponde ai criteri di ricerca.</p>
        <button
          @click="resettaFiltri"
          class="text-xs uppercase tracking-widest text-stone-600 hover:text-stone-900 underline underline-offset-4 transition-colors"
        >
          Mostra tutti gli artisti
        </button>
      </div>

      <!-- Griglia -->
      <div
        v-else
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
      >
        <ArtistaCard
          v-for="artista in artistiFiltrati"
          :key="artista.id"
          :artista="artista"
        />
      </div>
    </div>

  </div>
</template>
