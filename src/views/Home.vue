<script setup>
/**
 * Home.vue
 * Landing page principale: hero, mostre in evidenza, accesso rapido artisti
 */
import { computed } from 'vue'
import { ArrowRight, Sparkles } from 'lucide-vue-next'
import { mostre, artisti, statoLabels, formatData } from '../data/mockData.js'
import MostraCard from '../components/MostraCard.vue'
import ArtistaCard from '../components/ArtistaCard.vue'

// Mostra in evidenza: quella in corso o, in mancanza, la prima
const mostraInEvidenza = computed(
  () => mostre.find((m) => m.stato === 'in-corso') || mostre[0]
)

// Le 3 mostre più recenti esclusa quella in evidenza
const mostreRecenti = computed(() =>
  mostre.filter((m) => m.id !== mostraInEvidenza.value.id).slice(0, 3)
)

// Primi 4 artisti
const artistiInEvidenza = computed(() => artisti.slice(0, 4))
</script>

<template>
  <div class="min-h-screen">

    <!-- ═══ HERO ═══════════════════════════════════════════════════════════════ -->
    <section class="relative min-h-screen flex items-center overflow-hidden bg-stone-900">
      <!-- Immagine di sfondo con overlay -->
      <div class="absolute inset-0">
        <img
          :src="mostraInEvidenza.cover"
          alt="Hero background"
          class="w-full h-full object-cover opacity-40"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/50 to-transparent" />
      </div>

      <!-- Contenuto hero -->
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20 sm:py-28 md:py-32 w-full">
        <div class="max-w-2xl">
          <!-- Eyebrow -->
          <div class="flex items-center gap-2 mb-6 sm:mb-8">
            <div class="w-8 h-px bg-amber-400" />
            <span class="text-xs text-amber-400 uppercase tracking-[0.3em] font-medium">
              Archivio Aperto · Museo d'Arte
            </span>
          </div>

          <!-- Titolo principale -->
          <h1 class="font-display text-4xl sm:text-5xl md:text-7xl text-white leading-tight mb-6">
            L'Arte<br />
            <em class="not-italic text-amber-300">racconta.</em><br />
            Noi<br />conserviamo.
          </h1>

          <!-- Sottotitolo -->
          <p class="text-stone-300 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-lg">
            Un archivio digitale dedicato ai grandi maestri dell'arte, dalle
            origini del Rinascimento all'avanguardia contemporanea.
          </p>

          <!-- CTA buttons -->
          <div class="flex flex-wrap gap-3 sm:gap-4">
            <RouterLink
              to="/mostre"
              class="inline-flex items-center gap-2 bg-white text-stone-900 text-xs uppercase tracking-[0.2em] font-medium px-6 sm:px-7 py-3.5 sm:py-4 rounded-full hover:bg-amber-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-300/20 transition-all duration-300"
            >
              Esplora le Mostre
              <ArrowRight :size="14" />
            </RouterLink>
            <RouterLink
              to="/artisti"
              class="inline-flex items-center gap-2 border border-white/40 text-white text-xs uppercase tracking-[0.2em] font-medium px-6 sm:px-7 py-3.5 sm:py-4 rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/70 transition-all duration-300"
            >
              Scopri gli Artisti
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Indicatore scroll -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span class="text-xs uppercase tracking-[0.2em]">Scorri</span>
        <div class="w-px h-10 bg-white/20 relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-1/2 bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>

    <!-- ═══ MOSTRA IN EVIDENZA ══════════════════════════════════════════════════ -->
    <section class="py-16 sm:py-24 bg-stone-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">

        <!-- Header sezione -->
        <div class="flex flex-wrap items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <p class="text-xs text-stone-400 uppercase tracking-[0.3em] mb-2">In questo momento</p>
            <h2 class="font-display text-3xl md:text-4xl text-stone-900">Mostra in Evidenza</h2>
          </div>
          <RouterLink
            to="/mostre"
            class="hidden sm:flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-500 hover:text-stone-900 transition-colors"
          >
            Tutte le mostre <ArrowRight :size="12" />
          </RouterLink>
        </div>

        <!-- Featured card orizzontale -->
        <RouterLink :to="`/mostre/${mostraInEvidenza.id}`" class="group block">
          <div class="grid md:grid-cols-2 bg-white border border-stone-200 hover:border-stone-300 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-stone-300/40 overflow-hidden">
            <!-- Immagine -->
            <div class="relative overflow-hidden aspect-video md:aspect-auto">
              <img
                :src="mostraInEvidenza.cover"
                :alt="mostraInEvidenza.titolo"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
            </div>

            <!-- Testo -->
            <div class="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
              <span class="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full w-fit mb-5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {{ statoLabels[mostraInEvidenza.stato] }}
              </span>

              <h3 class="font-display text-2xl lg:text-3xl text-stone-900 mb-4 leading-snug">
                {{ mostraInEvidenza.titolo }}
              </h3>
              <p class="text-stone-500 leading-relaxed mb-6 text-sm">
                {{ mostraInEvidenza.descrizioneBreve }}
              </p>

              <div class="text-xs text-stone-400 mb-6 space-y-1">
                <p>{{ formatData(mostraInEvidenza.dataInizio) }} — {{ formatData(mostraInEvidenza.dataFine) }}</p>
                <p>{{ mostraInEvidenza.luogo }}</p>
              </div>

              <div class="flex items-center gap-2 text-xs font-medium text-stone-700 group-hover:gap-3 transition-all duration-200 uppercase tracking-widest">
                Visita la mostra <ArrowRight :size="12" />
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- ═══ ALTRE MOSTRE ════════════════════════════════════════════════════════ -->
    <section class="py-16 sm:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="flex flex-wrap items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <p class="text-xs text-stone-400 uppercase tracking-[0.3em] mb-2">Dall'archivio</p>
            <h2 class="font-display text-3xl md:text-4xl text-stone-900">Altre Mostre</h2>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <MostraCard v-for="mostra in mostreRecenti" :key="mostra.id" :mostra="mostra" />
        </div>

        <div class="mt-10 text-center">
          <RouterLink
            to="/mostre"
            class="inline-flex items-center gap-2 border border-stone-300 text-stone-700 text-xs uppercase tracking-[0.2em] font-medium px-8 py-4 rounded-full hover:bg-stone-900 hover:text-white hover:border-stone-900 hover:shadow-lg hover:shadow-stone-300/50 transition-all duration-300"
          >
            Archivio completo delle mostre <ArrowRight :size="13" />
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ═══ ARTISTI IN EVIDENZA ════════════════════════════════════════════════ -->
    <section class="py-16 sm:py-24 bg-stone-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="flex flex-wrap items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <p class="text-xs text-stone-400 uppercase tracking-[0.3em] mb-2">I protagonisti</p>
            <h2 class="font-display text-3xl md:text-4xl text-stone-900">Artisti in Archivio</h2>
          </div>
          <RouterLink
            to="/artisti"
            class="hidden sm:flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-500 hover:text-stone-900 transition-colors"
          >
            Tutti gli artisti <ArrowRight :size="12" />
          </RouterLink>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
          <ArtistaCard v-for="artista in artistiInEvidenza" :key="artista.id" :artista="artista" />
        </div>
      </div>
    </section>

    <!-- ═══ CITAZIONE ══════════════════════════════════════════════════════════ -->
    <section class="py-16 sm:py-24 bg-stone-900 text-white">
      <div class="max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <div class="w-12 h-px bg-amber-400 mx-auto mb-10" />
        <blockquote class="font-display text-2xl md:text-3xl text-stone-200 leading-relaxed italic mb-6">
          "L'arte non è ciò che vedi, ma ciò che fai vedere agli altri."
        </blockquote>
        <p class="text-sm text-stone-500 uppercase tracking-[0.2em]">— Edgar Degas</p>
        <div class="w-12 h-px bg-amber-400 mx-auto mt-10" />
      </div>
    </section>

  </div>
</template>
