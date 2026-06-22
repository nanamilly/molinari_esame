<script setup>
/**
 * About.vue
 * Pagina istituzionale: missione, team, contatti, orari e mappa simulata
 */
import { MapPin, Phone, Mail, Clock } from 'lucide-vue-next'

// Dati del team curatoriale
const team = [
  {
    nome: 'Prof.ssa Elena Marchetti',
    ruolo: 'Direttrice',
    bio: "Storica dell'arte con oltre trent'anni di carriera tra Milano, Parigi e New York. Specialista in arte moderna e contemporanea al femminile.",
    foto: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop&auto=format&q=80',
  },
  {
    nome: 'Dott. Luca Bianchi',
    ruolo: 'Curatore Senior',
    bio: "Esperto di Vedutismo veneziano e paesaggismo europeo del XVIII secolo. Autore di numerose monografie e cataloghi d'arte.",
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format&q=80',
  },
  {
    nome: 'Prof.ssa Maria Rossi',
    ruolo: 'Curatrice – Arte Barocca',
    bio: 'Docente universitaria e curatrice indipendente. Ha coordinato mostre internazionali dedicate al naturalismo caravaggesco.',
    foto: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=200&h=200&fit=crop&auto=format&q=80',
  },
  {
    nome: 'Dr. François Dubois',
    ruolo: 'Curatore – Impressionismo',
    bio: "Specialista francese del movimento impressionista, collabora con i maggiori musei europei per la ricerca e la valorizzazione del patrimonio pittorico dell'Ottocento.",
    foto: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&auto=format&q=80',
  },
]

// Orari di apertura
const orari = [
  { giorno: 'Lunedì',             ore: 'Chiuso' },
  { giorno: 'Martedì – Venerdì', ore: '10:00 – 19:00' },
  { giorno: 'Sabato',             ore: '10:00 – 21:00' },
  { giorno: 'Domenica',           ore: '10:00 – 18:00' },
]
</script>

<template>
  <div class="min-h-screen bg-stone-50">

    <!-- ═══ INTESTAZIONE ═══════════════════════════════════════════════════════ -->
    <section class="bg-stone-900 pt-28 sm:pt-32 pb-12 sm:pb-16">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="w-8 h-px bg-amber-400 mb-6" />
        <h1 class="font-display text-3xl sm:text-4xl md:text-6xl text-white mb-4">About</h1>
        <p class="text-stone-400 text-base max-w-xl leading-relaxed">
          Chi siamo, cosa facciamo e perché crediamo nel potere dell'arte come strumento
          di conoscenza e trasformazione.
        </p>
      </div>
    </section>

    <!-- ═══ MISSIONE ══════════════════════════════════════════════════════════ -->
    <section class="py-16 sm:py-24 bg-stone-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div>
            <p class="text-xs text-stone-400 uppercase tracking-[0.3em] mb-4">La nostra missione</p>
            <h2 class="font-display text-3xl md:text-4xl text-stone-900 mb-6 leading-snug">
              Custodire la memoria.<br/>
              <em class="not-italic text-amber-700">Condividere la bellezza.</em>
            </h2>
            <div class="space-y-4 text-stone-600 leading-relaxed text-base">
              <p>
                Archivio Aperto nasce nel 1987 come progetto di catalogazione del patrimonio
                artistico privato italiano. In quasi quattro decenni si è trasformato in uno dei
                poli museali più innovativi del centro Europa, combinando rigore scientifico e
                accessibilità culturale.
              </p>
              <p>
                La nostra collezione permanente conta oltre 2.400 opere che spaziano dal
                Rinascimento all'arte digitale contemporanea. Le esposizioni temporanee —
                ogni anno tra le sei e le otto — portano a Roma alcune delle opere più
                significative dei musei internazionali.
              </p>
              <p>
                Crediamo che l'arte non sia un privilegio di pochi: per questo i nostri
                programmi educativi raggiungono ogni anno oltre 15.000 studenti, e l'ingresso
                è gratuito ogni prima domenica del mese.
              </p>
            </div>
          </div>
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&h=500&fit=crop&auto=format&q=80"
              alt="Il museo"
              class="w-full object-cover rounded-2xl shadow-xl shadow-stone-300/40"
            />
            <div class="absolute -bottom-6 -left-6 bg-stone-900 text-white p-6 rounded-2xl shadow-lg hidden md:block">
              <p class="font-display text-4xl text-amber-300">1987</p>
              <p class="text-xs text-stone-400 uppercase tracking-widest mt-1">Anno di fondazione</p>
            </div>
            <div class="md:hidden mt-4 bg-stone-900 text-white p-5 rounded-2xl inline-block">
              <p class="font-display text-3xl text-amber-300">1987</p>
              <p class="text-xs text-stone-400 uppercase tracking-widest mt-1">Anno di fondazione</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ NUMERI ════════════════════════════════════════════════════════════ -->
    <section class="py-12 sm:py-16 bg-stone-900">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="(stat, i) in [
              { valore: '2.400+', etichetta: 'Opere in collezione' },
              { valore: '38',     etichetta: 'Anni di storia' },
              { valore: '150K+',  etichetta: 'Visitatori l\'anno' },
              { valore: '6–8',    etichetta: 'Mostre temporanee/anno' },
            ]"
            :key="i"
            class="text-center"
          >
            <p class="font-display text-4xl text-amber-300 mb-2">{{ stat.valore }}</p>
            <p class="text-xs text-stone-500 uppercase tracking-[0.15em]">{{ stat.etichetta }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ TEAM ═══════════════════════════════════════════════════════════════ -->
    <section class="py-16 sm:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <p class="text-xs text-stone-400 uppercase tracking-[0.3em] mb-3">Le persone</p>
        <h2 class="font-display text-3xl md:text-4xl text-stone-900 mb-8 sm:mb-12">Il Team Curatoriale</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="membro in team" :key="membro.nome" class="group">
            <div class="overflow-hidden mb-4 bg-stone-100 rounded-2xl" style="aspect-ratio: 1;">
              <img
                :src="membro.foto"
                :alt="membro.nome"
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </div>
            <p class="text-xs text-amber-700 uppercase tracking-[0.15em] mb-1">{{ membro.ruolo }}</p>
            <h3 class="font-display text-lg text-stone-900 mb-2">{{ membro.nome }}</h3>
            <p class="text-xs text-stone-500 leading-relaxed">{{ membro.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ CONTATTI + ORARI + MAPPA ══════════════════════════════════════════ -->
    <section class="py-16 sm:py-24 bg-stone-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="grid md:grid-cols-3 gap-10 sm:gap-12">

          <!-- Contatti -->
          <div>
            <h3 class="font-display text-2xl text-stone-900 mb-6">Contatti</h3>
            <div class="space-y-5">
              <div class="flex items-start gap-3">
                <MapPin :size="16" class="text-stone-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p class="text-sm text-stone-700 font-medium">Indirizzo</p>
                  <p class="text-sm text-stone-500">Via dell'Arte 14<br/>00186 Roma, Italia</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <Phone :size="16" class="text-stone-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p class="text-sm text-stone-700 font-medium">Telefono</p>
                  <p class="text-sm text-stone-500">+39 06 1234567</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <Mail :size="16" class="text-stone-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p class="text-sm text-stone-700 font-medium">Email</p>
                  <p class="text-sm text-stone-500">info@archivio-aperto.it</p>
                  <p class="text-sm text-stone-500">press@archivio-aperto.it</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Orari -->
          <div>
            <h3 class="font-display text-2xl text-stone-900 mb-6 flex items-center gap-2">
              <Clock :size="20" class="text-stone-400" />
              Orari di Apertura
            </h3>
            <div class="space-y-3">
              <div
                v-for="(slot, i) in orari"
                :key="i"
                class="flex justify-between items-center py-2 border-b border-stone-200"
                :class="slot.ore === 'Chiuso' ? 'opacity-50' : ''"
              >
                <span class="text-sm text-stone-600">{{ slot.giorno }}</span>
                <span
                  class="text-sm font-medium"
                  :class="slot.ore === 'Chiuso' ? 'text-stone-400' : 'text-stone-900'"
                >
                  {{ slot.ore }}
                </span>
              </div>
            </div>
            <p class="text-xs text-stone-400 mt-4 italic">
              * Ingresso gratuito ogni prima domenica del mese.
            </p>
          </div>

          <!-- Mappa simulata -->
          <div>
            <h3 class="font-display text-2xl text-stone-900 mb-6">Come Raggiungerci</h3>
            <div class="relative bg-stone-200 overflow-hidden border border-stone-300 rounded-2xl" style="aspect-ratio: 4/3;">
              <img
                src="https://images.unsplash.com/photo-1494522358652-f30e61a60313?w=600&h=450&fit=crop&auto=format&q=80"
                alt="Mappa simulata"
                class="w-full h-full object-cover opacity-60"
              />
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="flex flex-col items-center">
                  <div class="w-8 h-8 bg-stone-900 rounded-full flex items-center justify-center shadow-lg">
                    <MapPin :size="16" class="text-amber-300" />
                  </div>
                  <div class="w-0.5 h-4 bg-stone-900" />
                  <div class="w-2 h-2 bg-stone-900 rounded-full" />
                </div>
              </div>
              <div class="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm p-2 text-xs text-stone-700 text-center">
                Via dell'Arte 14 · Roma
              </div>
            </div>
            <p class="text-xs text-stone-400 mt-3">
              Metro A – Fermata Spagna (5 min a piedi) · Autobus 40, 62, 116
            </p>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>
