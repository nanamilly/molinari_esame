<script setup>
/**
 * DettaglioArtista.vue
 * Pagina profilo artista: biografia, portfolio opere e mostre partecipate
 */
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft, Calendar, MapPin, Palette, ChevronRight } from 'lucide-vue-next'
import { getArtistaById, getMostreByArtista, statoLabels } from '../data/mockData.js'
import MostraCard from '../components/MostraCard.vue'

const route  = useRoute()
const router = useRouter()

const artista = computed(() => getArtistaById(Number(route.params.id)))

// Reindirizza se l'artista non esiste
if (!artista.value) {
  router.replace('/artisti')
}

// Mostre a cui ha partecipato l'artista
const mostreArtista = computed(() =>
  getMostreByArtista(artista.value?.id)
)
</script>

<template>
  <div v-if="artista" class="min-h-screen bg-stone-50">

    <!-- ═══ HERO con immagine di copertina ════════════════════════════════════ -->
    <section class="relative h-56 sm:h-72 lg:h-80 overflow-hidden bg-stone-800">
      <img
        :src="artista.copertina"
        :alt="`Copertina ${artista.nome}`"
        class="w-full h-full object-cover opacity-60"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-stone-900/60 to-stone-900/20" />

      <!-- Breadcrumb -->
      <div class="absolute bottom-6 left-6 lg:left-10 right-6">
        <div class="max-w-7xl mx-auto">
          <div class="flex items-center gap-2 text-xs text-stone-400">
            <RouterLink to="/" class="hover:text-white transition-colors">Home</RouterLink>
            <ChevronRight :size="12" />
            <RouterLink to="/artisti" class="hover:text-white transition-colors">Artisti</RouterLink>
            <ChevronRight :size="12" />
            <span class="text-stone-300">{{ artista.nome }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ PROFILO ARTISTA ════════════════════════════════════════════════════ -->
    <div class="max-w-7xl mx-auto px-6 lg:px-10">

      <!-- Card profilo sovrapposta all'hero -->
      <div class="relative -mt-8 sm:-mt-12 bg-white border border-stone-200 rounded-2xl p-5 sm:p-6 lg:p-8 shadow-md shadow-stone-200/60 mb-12 sm:mb-16">
        <div class="flex flex-col sm:flex-row gap-6 items-start">

          <!-- Foto artista -->
          <div class="w-28 h-36 sm:w-32 sm:h-40 flex-shrink-0 overflow-hidden rounded-xl border-4 border-white shadow-md bg-stone-200">
            <img
              :src="artista.foto"
              :alt="artista.nome"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Info rapide -->
          <div class="flex-1">
            <p class="text-xs uppercase tracking-[0.2em] text-stone-400 mb-2">
              {{ artista.correnteArtistica }}
            </p>
            <h1 class="font-display text-3xl md:text-4xl text-stone-900 mb-4">
              {{ artista.nome }}
            </h1>
            <div class="flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-500">
              <div class="flex items-center gap-1.5">
                <Calendar :size="13" />
                <span>{{ artista.dataNascita }}</span>
                <span v-if="artista.dataMorte"> — {{ artista.dataMorte }}</span>
                <span v-else class="text-emerald-600"> (vivente)</span>
              </div>
              <div class="flex items-center gap-1.5">
                <MapPin :size="13" />
                <span>{{ artista.luogoNascita }}</span>
              </div>
              <div class="flex items-center gap-1.5">
                <Palette :size="13" />
                <span>{{ artista.nazionalita }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══ CORPO PAGINA ═════════════════════════════════════════════════════ -->
      <div class="grid lg:grid-cols-3 gap-12 pb-20">

        <!-- Colonna sinistra: biografia + opere -->
        <div class="lg:col-span-2 space-y-16">

          <!-- Biografia -->
          <div>
            <h2 class="font-display text-2xl text-stone-900 mb-5 flex items-center gap-3">
              Biografia
              <span class="flex-1 h-px bg-stone-200" />
            </h2>
            <p class="text-stone-600 leading-relaxed text-base">
              {{ artista.biografia }}
            </p>
          </div>

          <!-- Portfolio opere -->
          <div>
            <h2 class="font-display text-2xl text-stone-900 mb-5 flex items-center gap-3">
              Opere selezionate
              <span class="flex-1 h-px bg-stone-200" />
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div
                v-for="opera in artista.opere"
                :key="opera.id"
                class="group bg-white border border-stone-200 hover:border-stone-300 rounded-xl hover:shadow-lg hover:shadow-stone-300/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <!-- Immagine opera -->
                <div class="aspect-square overflow-hidden bg-stone-100">
                  <img
                    :src="opera.immagine"
                    :alt="opera.titolo"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <!-- Info opera -->
                <div class="p-3">
                  <h4 class="font-display text-sm text-stone-900 mb-1 leading-snug">
                    {{ opera.titolo }}
                  </h4>
                  <p class="text-xs text-stone-400">{{ opera.anno }}</p>
                  <p class="text-xs text-stone-400 italic mt-0.5 truncate">{{ opera.tecnica }}</p>
                  <p class="text-xs text-stone-300 mt-0.5">{{ opera.dimensioni }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Mostre partecipate -->
          <div v-if="mostreArtista.length > 0">
            <h2 class="font-display text-2xl text-stone-900 mb-5 flex items-center gap-3">
              Mostre Partecipate
              <span class="flex-1 h-px bg-stone-200" />
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <MostraCard
                v-for="mostra in mostreArtista"
                :key="mostra.id"
                :mostra="mostra"
              />
            </div>
          </div>
        </div>

        <!-- Sidebar destra -->
        <aside>
          <div class="bg-white border border-stone-200 rounded-2xl p-6 sticky top-24 shadow-sm shadow-stone-200/50">
            <h3 class="text-xs uppercase tracking-[0.2em] text-stone-400 mb-5">Scheda Artista</h3>

            <dl class="space-y-4">
              <div>
                <dt class="text-xs text-stone-400 mb-1">Nazionalità</dt>
                <dd class="text-sm font-medium text-stone-700">{{ artista.nazionalita }}</dd>
              </div>
              <div class="border-t border-stone-100 pt-4">
                <dt class="text-xs text-stone-400 mb-1">Corrente artistica</dt>
                <dd class="text-sm font-medium text-stone-700">{{ artista.correnteArtistica }}</dd>
              </div>
              <div class="border-t border-stone-100 pt-4">
                <dt class="text-xs text-stone-400 mb-1">Luogo di nascita</dt>
                <dd class="text-sm font-medium text-stone-700">{{ artista.luogoNascita }}</dd>
              </div>
              <div class="border-t border-stone-100 pt-4">
                <dt class="text-xs text-stone-400 mb-1">Nato il</dt>
                <dd class="text-sm font-medium text-stone-700">{{ artista.dataNascita }}</dd>
              </div>
              <div v-if="artista.dataMorte" class="border-t border-stone-100 pt-4">
                <dt class="text-xs text-stone-400 mb-1">Deceduto il</dt>
                <dd class="text-sm font-medium text-stone-700">{{ artista.dataMorte }}</dd>
              </div>
              <div class="border-t border-stone-100 pt-4">
                <dt class="text-xs text-stone-400 mb-1">Opere in archivio</dt>
                <dd class="text-sm font-medium text-stone-700">{{ artista.opere.length }}</dd>
              </div>
              <div class="border-t border-stone-100 pt-4">
                <dt class="text-xs text-stone-400 mb-1">Mostre</dt>
                <dd class="text-sm font-medium text-stone-700">{{ mostreArtista.length }}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </div>

    <!-- Torna indietro -->
    <div class="max-w-7xl mx-auto px-6 lg:px-10 pb-8">
      <RouterLink
        to="/artisti"
        class="flex items-center gap-2 text-xs text-stone-500 hover:text-stone-900 transition-colors uppercase tracking-[0.15em]"
      >
        <ArrowLeft :size="12" /> Torna agli artisti
      </RouterLink>
    </div>

  </div>
</template>
