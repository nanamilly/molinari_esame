<script setup>
/**
 * ArtistaCard.vue
 * Card riutilizzabile per la visualizzazione di un artista.
 * Props:
 *   - artista: oggetto artista dal mockData
 */
import { ArrowRight } from 'lucide-vue-next'

const props = defineProps({
  artista: { type: Object, required: true },
})
</script>

<template>
  <RouterLink
    :to="`/artisti/${artista.id}`"
    class="group block bg-white border border-stone-200 hover:border-stone-300 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-stone-300/40 hover:-translate-y-1 overflow-hidden"
  >
    <!-- Foto artista -->
    <div class="relative overflow-hidden bg-stone-100" style="aspect-ratio: 3/4;">
      <img
        :src="artista.foto"
        :alt="artista.nome"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <!-- Overlay sfumato in basso -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <!-- Badge corrente artistica -->
      <div class="absolute bottom-3 left-3">
        <span class="text-xs font-medium text-white/90 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full tracking-wide">
          {{ artista.correnteArtistica }}
        </span>
      </div>
    </div>

    <!-- Info artista -->
    <div class="p-4">
      <p class="text-xs uppercase tracking-[0.15em] text-stone-400 mb-1">{{ artista.nazionalita }}</p>
      <h3 class="font-display text-base text-stone-900 mb-1 leading-snug group-hover:text-stone-700 transition-colors">
        {{ artista.nome }}
      </h3>
      <p class="text-xs text-stone-400 mb-3">
        {{ artista.dataNascita }} — {{ artista.dataMorte ?? 'presente' }}
      </p>

      <!-- CTA -->
      <div class="flex items-center gap-1 text-xs font-medium text-stone-600 group-hover:gap-2 transition-all duration-200">
        <span class="uppercase tracking-widest">Biografia</span>
        <ArrowRight :size="11" />
      </div>
    </div>
  </RouterLink>
</template>
