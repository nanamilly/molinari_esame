<script setup>
/**
 * MostraCard.vue
 * Card riutilizzabile per la visualizzazione di una mostra.
 * Props:
 *   - mostra: oggetto mostra dal mockData
 *   - variante: 'default' | 'compatta' (layout ridotto)
 */
import { computed } from 'vue'
import { Calendar, MapPin, ArrowRight } from 'lucide-vue-next'
import { formatData, statoLabels } from '../data/mockData.js'

const props = defineProps({
  mostra: { type: Object, required: true },
  variante: { type: String, default: 'default' },
})

// Configurazione badge stato
const badgeConfig = computed(() => {
  const cfg = {
    'in-corso':  { bg: 'bg-emerald-100', text: 'text-emerald-800', dot: 'bg-emerald-500' },
    'in-arrivo': { bg: 'bg-amber-100',   text: 'text-amber-800',   dot: 'bg-amber-500' },
    archiviata:  { bg: 'bg-stone-100',   text: 'text-stone-600',   dot: 'bg-stone-400' },
  }
  return cfg[props.mostra.stato] || cfg.archiviata
})

const dataFormattataDa = computed(() => formatData(props.mostra.dataInizio))
const dataFormattataA  = computed(() => formatData(props.mostra.dataFine))
</script>

<template>
  <!-- Versione default -->
  <RouterLink
    :to="`/mostre/${mostra.id}`"
    class="group block bg-white border border-stone-200 hover:border-stone-300 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-stone-300/40 hover:-translate-y-1 overflow-hidden"
  >
    <!-- Immagine copertina -->
    <div class="relative overflow-hidden aspect-video bg-stone-100">
      <img
        :src="mostra.cover"
        :alt="mostra.titolo"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <!-- Badge stato -->
      <div class="absolute top-3 left-3">
        <span
          class="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
          :class="[badgeConfig.bg, badgeConfig.text]"
        >
          <span class="w-1.5 h-1.5 rounded-full" :class="badgeConfig.dot" />
          {{ statoLabels[mostra.stato] }}
        </span>
      </div>
    </div>

    <!-- Contenuto testuale -->
    <div class="p-5">
      <h3 class="font-display text-lg text-stone-900 mb-2 leading-snug group-hover:text-stone-700 transition-colors">
        {{ mostra.titolo }}
      </h3>
      <p class="text-sm text-stone-500 line-clamp-2 mb-4 leading-relaxed">
        {{ mostra.descrizioneBreve }}
      </p>

      <!-- Metadati -->
      <div class="flex flex-col gap-1.5 text-xs text-stone-400 mb-4">
        <div class="flex items-center gap-1.5">
          <Calendar :size="12" />
          <span>{{ dataFormattataDa }} — {{ dataFormattataA }}</span>
        </div>
        <div class="flex items-center gap-1.5">
          <MapPin :size="12" />
          <span>{{ mostra.luogo }}</span>
        </div>
      </div>

      <!-- CTA -->
      <div class="flex items-center gap-1 text-xs font-medium text-stone-700 group-hover:gap-2 transition-all duration-200">
        <span class="uppercase tracking-widest">Scopri di più</span>
        <ArrowRight :size="12" />
      </div>
    </div>
  </RouterLink>
</template>
