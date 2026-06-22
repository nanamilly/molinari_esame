<script setup>
/**
 * DettaglioMostra.vue
 * Pagina dettaglio di una singola mostra con galleria, artisti correlati e descrizione critica
 */
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Calendar, MapPin, User, ArrowLeft, ChevronRight } from 'lucide-vue-next'
import { getMostraById, getArtistaById, formatData, statoLabels } from '../data/mockData.js'
import ArtistaCard from '../components/ArtistaCard.vue'

const route  = useRoute()
const router = useRouter()

const mostra = computed(() => getMostraById(Number(route.params.id)))

// Reindirizza se la mostra non esiste
if (!mostra.value) {
  router.replace('/mostre')
}

// Artisti partecipanti alla mostra
const artistiMostra = computed(() =>
  mostra.value?.artistiIds.map((id) => getArtistaById(id)).filter(Boolean) ?? []
)

// Config badge stato
const badgeConfig = computed(() => {
  const cfg = {
    'in-corso':  { bg: 'bg-emerald-100', text: 'text-emerald-800', dot: 'bg-emerald-500' },
    'in-arrivo': { bg: 'bg-amber-100',   text: 'text-amber-800',   dot: 'bg-amber-500' },
    archiviata:  { bg: 'bg-stone-100',   text: 'text-stone-600',   dot: 'bg-stone-400' },
  }
  return cfg[mostra.value?.stato] || cfg.archiviata
})
</script>

<template>
  <div v-if="mostra" class="min-h-screen bg-stone-50">

    <!-- ═══ HERO ═══════════════════════════════════════════════════════════════ -->
    <section class="relative min-h-[60vh] flex items-end overflow-hidden bg-stone-900">
      <!-- Immagine di sfondo -->
      <img
        :src="mostra.cover"
        :alt="mostra.titolo"
        class="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />

      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-10 sm:pb-12 pt-24 sm:pt-32 w-full">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 text-xs text-stone-500 mb-6">
          <RouterLink to="/" class="hover:text-white transition-colors">Home</RouterLink>
          <ChevronRight :size="12" />
          <RouterLink to="/mostre" class="hover:text-white transition-colors">Mostre</RouterLink>
          <ChevronRight :size="12" />
          <span class="text-stone-400">{{ mostra.titolo }}</span>
        </div>

        <!-- Badge stato -->
        <span
          class="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full mb-4"
          :class="[badgeConfig.bg, badgeConfig.text]"
        >
          <span class="w-1.5 h-1.5 rounded-full" :class="badgeConfig.dot" />
          {{ statoLabels[mostra.stato] }}
        </span>

        <!-- Titolo -->
        <h1 class="font-display text-2xl sm:text-3xl md:text-5xl text-white leading-tight max-w-3xl">
          {{ mostra.titolo }}
        </h1>
      </div>
    </section>

    <!-- ═══ CONTENUTO PRINCIPALE ═══════════════════════════════════════════════ -->
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      <div class="grid lg:grid-cols-3 gap-12">

        <!-- Colonna principale: descrizione e galleria -->
        <div class="lg:col-span-2 space-y-12">

          <!-- Descrizione critica -->
          <div>
            <h2 class="font-display text-2xl text-stone-900 mb-5">Note Critiche</h2>
            <div class="text-stone-600 leading-relaxed space-y-4 text-base">
              <p v-for="(paragrafo, i) in mostra.descrizione.split('\n\n')" :key="i">
                {{ paragrafo }}
              </p>
            </div>
          </div>

          <!-- Galleria immagini -->
          <div>
            <h2 class="font-display text-2xl text-stone-900 mb-5">Galleria</h2>
            <div class="grid grid-cols-2 gap-3">
              <div
                v-for="(img, idx) in mostra.immaginiGalleria"
                :key="idx"
                class="overflow-hidden bg-stone-200 rounded-2xl"
                :class="idx === 0 ? 'col-span-2 aspect-video' : 'aspect-video'"
              >
                <img
                  :src="img"
                  :alt="`Galleria ${idx + 1}`"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <!-- Artisti partecipanti -->
          <div>
            <h2 class="font-display text-2xl text-stone-900 mb-5">Artisti Partecipanti</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <ArtistaCard
                v-for="artista in artistiMostra"
                :key="artista.id"
                :artista="artista"
              />
            </div>
          </div>
        </div>

        <!-- Sidebar: metadati -->
        <aside class="space-y-6">
          <div class="bg-white border border-stone-200 rounded-2xl p-6 sticky top-24 shadow-sm shadow-stone-200/50">
            <h3 class="text-xs uppercase tracking-[0.2em] text-stone-400 mb-5">
              Informazioni Mostra
            </h3>

            <!-- Date -->
            <div class="flex items-start gap-3 py-4 border-b border-stone-100">
              <Calendar :size="16" class="text-stone-400 mt-0.5 flex-shrink-0" />
              <div>
                <p class="text-xs text-stone-400 mb-1">Date</p>
                <p class="text-sm text-stone-700 font-medium">
                  {{ formatData(mostra.dataInizio) }}
                </p>
                <p class="text-xs text-stone-500">fino al {{ formatData(mostra.dataFine) }}</p>
              </div>
            </div>

            <!-- Luogo -->
            <div class="flex items-start gap-3 py-4 border-b border-stone-100">
              <MapPin :size="16" class="text-stone-400 mt-0.5 flex-shrink-0" />
              <div>
                <p class="text-xs text-stone-400 mb-1">Location</p>
                <p class="text-sm text-stone-700 font-medium">{{ mostra.luogo }}</p>
              </div>
            </div>

            <!-- Curatore -->
            <div class="flex items-start gap-3 py-4">
              <User :size="16" class="text-stone-400 mt-0.5 flex-shrink-0" />
              <div>
                <p class="text-xs text-stone-400 mb-1">Curatore</p>
                <p class="text-sm text-stone-700 font-medium">{{ mostra.curatore }}</p>
              </div>
            </div>

            <!-- Artisti (lista testuale) -->
            <div class="border-t border-stone-100 pt-4">
              <p class="text-xs text-stone-400 uppercase tracking-[0.15em] mb-3">Artisti</p>
              <div class="flex flex-col gap-2">
                <RouterLink
                  v-for="artista in artistiMostra"
                  :key="artista.id"
                  :to="`/artisti/${artista.id}`"
                  class="text-sm text-stone-600 hover:text-stone-900 transition-colors flex items-center gap-1"
                >
                  <span class="w-1 h-1 bg-stone-400 rounded-full flex-shrink-0" />
                  {{ artista.nome }}
                </RouterLink>
              </div>
            </div>
          </div>

          <!-- Pulsante torna indietro -->
          <RouterLink
            to="/mostre"
            class="flex items-center gap-2 text-xs text-stone-500 hover:text-stone-900 transition-colors uppercase tracking-[0.15em]"
          >
            <ArrowLeft :size="12" />
            Torna alle mostre
          </RouterLink>
        </aside>
      </div>
    </div>

  </div>
</template>
