<script setup>
/**
 * Prenotazioni.vue
 * Sistema di prenotazione visite (simulato, nessun backend reale):
 * l'utente sceglie mostra, data, fascia orario e numero di visitatori,
 * compila i propri dati e ottiene un codice di prenotazione fittizio.
 */
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Calendar, Users, Clock, Ticket, Check, ArrowLeft, X } from 'lucide-vue-next'
import { mostre } from '../data/mockData.js'

const fasceOrarie = ['10:00', '12:00', '14:00', '16:00', '18:00']

const form = ref({
  mostraId: '',
  data: '',
  orario: '',
  visitatori: 2,
  nome: '',
  email: '',
})

const inviato = ref(false)
const invio = ref(false)
const codicePrenotazione = ref('')

// Data minima selezionabile: oggi
const oggi = new Date().toISOString().split('T')[0]

const mostraScelta = computed(() =>
  mostre.find((m) => m.id === Number(form.value.mostraId))
)

const formValido = computed(() =>
  form.value.data &&
  form.value.orario &&
  form.value.visitatori >= 1 &&
  form.value.nome.trim() &&
  /.+@.+\..+/.test(form.value.email)
)

function generaCodice() {
  const lettere = 'AA'
  const numero = Math.floor(10000 + Math.random() * 89999)
  return `${lettere}-${numero}`
}

function confermaPrenotazione() {
  if (!formValido.value) return
  invio.value = true
  // Simula una breve elaborazione lato server
  setTimeout(() => {
    codicePrenotazione.value = generaCodice()
    invio.value = false
    inviato.value = true
  }, 900)
}

function nuovaPrenotazione() {
  form.value = { mostraId: '', data: '', orario: '', visitatori: 2, nome: '', email: '' }
  inviato.value = false
}

function chiudiPopup() {
  inviato.value = false
}

function suEscape(e) {
  if (e.key === 'Escape' && inviato.value) chiudiPopup()
}

onMounted(() => window.addEventListener('keydown', suEscape))
onUnmounted(() => window.removeEventListener('keydown', suEscape))
</script>

<template>
  <div class="min-h-screen bg-stone-50">

    <!-- ═══ INTESTAZIONE ═══════════════════════════════════════════════════════ -->
    <section class="bg-stone-900 pt-28 sm:pt-32 pb-12 sm:pb-16">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="w-8 h-px bg-amber-400 mb-6" />
        <h1 class="font-display text-3xl sm:text-4xl md:text-6xl text-white mb-4">Prenotazioni</h1>
        <p class="text-stone-400 text-base max-w-xl leading-relaxed">
          Prenota la tua visita in pochi passaggi: scegli la mostra, la data e la fascia
          orario che preferisci.
        </p>
      </div>
    </section>

    <!-- ═══ CONTENUTO ═══════════════════════════════════════════════════════════ -->
    <div class="max-w-3xl mx-auto px-6 lg:px-10 py-16">

        <!-- ─── Modulo di prenotazione ─── -->
        <form
          @submit.prevent="confermaPrenotazione"
          class="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm shadow-stone-200/50 space-y-8"
        >
          <!-- Mostra -->
          <div>
            <label class="block text-xs uppercase tracking-[0.2em] text-stone-400 mb-3">
              Cosa vuoi visitare?
            </label>
            <select
              v-model="form.mostraId"
              class="w-full px-4 py-3 text-sm bg-stone-50 border border-stone-300 rounded-xl text-stone-700 focus:outline-none focus:border-stone-600 focus:ring-2 focus:ring-stone-900/10 transition-all"
            >
              <option value="">Visita generale del museo</option>
              <option v-for="m in mostre" :key="m.id" :value="m.id">{{ m.titolo }}</option>
            </select>
          </div>

          <!-- Data e visitatori -->
          <div class="grid sm:grid-cols-2 gap-5">
            <div>
              <label class="flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-stone-400 mb-3">
                <Calendar :size="13" /> Data
              </label>
              <input
                v-model="form.data"
                type="date"
                :min="oggi"
                required
                class="w-full px-4 py-3 text-sm bg-stone-50 border border-stone-300 rounded-xl text-stone-700 focus:outline-none focus:border-stone-600 focus:ring-2 focus:ring-stone-900/10 transition-all"
              />
            </div>
            <div>
              <label class="flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-stone-400 mb-3">
                <Users :size="13" /> Visitatori
              </label>
              <input
                v-model.number="form.visitatori"
                type="number"
                min="1"
                max="10"
                required
                class="w-full px-4 py-3 text-sm bg-stone-50 border border-stone-300 rounded-xl text-stone-700 focus:outline-none focus:border-stone-600 focus:ring-2 focus:ring-stone-900/10 transition-all"
              />
            </div>
          </div>

          <!-- Fascia orario -->
          <div>
            <label class="flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-stone-400 mb-3">
              <Clock :size="13" /> Fascia orario
            </label>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="ora in fasceOrarie"
                :key="ora"
                type="button"
                @click="form.orario = ora"
                class="px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-200"
                :class="form.orario === ora
                  ? 'bg-stone-900 text-white border-stone-900'
                  : 'bg-white text-stone-600 border-stone-300 hover:border-stone-500'"
              >
                {{ ora }}
              </button>
            </div>
          </div>

          <!-- Dati personali -->
          <div class="grid sm:grid-cols-2 gap-5">
            <div>
              <label class="block text-xs uppercase tracking-[0.2em] text-stone-400 mb-3">Nome e cognome</label>
              <input
                v-model="form.nome"
                type="text"
                placeholder="Mario Rossi"
                required
                class="w-full px-4 py-3 text-sm bg-stone-50 border border-stone-300 rounded-xl text-stone-700 placeholder-stone-400 focus:outline-none focus:border-stone-600 focus:ring-2 focus:ring-stone-900/10 transition-all"
              />
            </div>
            <div>
              <label class="block text-xs uppercase tracking-[0.2em] text-stone-400 mb-3">Email</label>
              <input
                v-model="form.email"
                type="email"
                placeholder="mario.rossi@email.it"
                required
                class="w-full px-4 py-3 text-sm bg-stone-50 border border-stone-300 rounded-xl text-stone-700 placeholder-stone-400 focus:outline-none focus:border-stone-600 focus:ring-2 focus:ring-stone-900/10 transition-all"
              />
            </div>
          </div>

          <!-- Invio -->
          <button
            type="submit"
            :disabled="!formValido || invio"
            class="w-full inline-flex items-center justify-center gap-2 bg-stone-900 text-white text-xs uppercase tracking-[0.2em] font-medium px-7 py-4 rounded-full hover:bg-amber-300 hover:text-stone-900 hover:shadow-lg hover:shadow-amber-300/20 transition-all duration-300 disabled:opacity-40 disabled:hover:bg-stone-900 disabled:hover:text-white disabled:cursor-not-allowed"
          >
            <span v-if="!invio">Conferma prenotazione</span>
            <span v-else class="flex items-center gap-2">
              <span class="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              Conferma in corso…
            </span>
          </button>

          <p class="text-xs text-stone-400 text-center">
            * Sistema di prenotazione dimostrativo a scopo didattico: nessun dato viene inviato a un server reale.
          </p>
        </form>
    </div>

    <!-- ═══ POPUP DI CONFERMA ══════════════════════════════════════════════════ -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="inviato"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm"
        @click.self="chiudiPopup"
      >
        <Transition
          appear
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-4"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="inviato"
            class="relative bg-white rounded-2xl p-8 sm:p-10 text-center shadow-2xl shadow-stone-900/30 max-w-lg w-full max-h-[90vh] overflow-y-auto"
          >
            <!-- Chiudi -->
            <button
              @click="chiudiPopup"
              aria-label="Chiudi"
              class="absolute top-4 right-4 text-stone-400 hover:text-stone-900 hover:bg-stone-100 rounded-full p-1.5 transition-colors"
            >
              <X :size="18" />
            </button>

            <div class="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
              <Check :size="26" class="text-emerald-600" />
            </div>
            <p class="text-xs uppercase tracking-[0.2em] text-stone-400 mb-2">Prenotazione confermata</p>
            <h2 class="font-display text-2xl sm:text-3xl text-stone-900 mb-6">
              Ti aspettiamo all'Archivio Aperto
            </h2>

            <div class="inline-flex items-center gap-2 bg-stone-900 text-white px-5 py-2.5 rounded-full mb-8">
              <Ticket :size="15" class="text-amber-300" />
              <span class="text-sm font-medium tracking-wide">{{ codicePrenotazione }}</span>
            </div>

            <dl class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-8">
              <div class="border border-stone-200 rounded-xl p-4">
                <dt class="text-xs text-stone-400 uppercase tracking-widest mb-1">Mostra</dt>
                <dd class="text-sm font-medium text-stone-700">
                  {{ mostraScelta ? mostraScelta.titolo : 'Visita generale del museo' }}
                </dd>
              </div>
              <div class="border border-stone-200 rounded-xl p-4">
                <dt class="text-xs text-stone-400 uppercase tracking-widest mb-1">Data e ora</dt>
                <dd class="text-sm font-medium text-stone-700">{{ form.data }} · {{ form.orario }}</dd>
              </div>
              <div class="border border-stone-200 rounded-xl p-4">
                <dt class="text-xs text-stone-400 uppercase tracking-widest mb-1">Visitatori</dt>
                <dd class="text-sm font-medium text-stone-700">{{ form.visitatori }}</dd>
              </div>
              <div class="border border-stone-200 rounded-xl p-4">
                <dt class="text-xs text-stone-400 uppercase tracking-widest mb-1">A nome di</dt>
                <dd class="text-sm font-medium text-stone-700">{{ form.nome }}</dd>
              </div>
            </dl>

            <p class="text-xs text-stone-400 mb-8">
              * Sistema di prenotazione dimostrativo: nessuna email verrà realmente inviata.
            </p>

            <button
              @click="nuovaPrenotazione"
              class="inline-flex items-center gap-2 border border-stone-300 text-stone-700 text-xs uppercase tracking-[0.2em] font-medium px-7 py-3.5 rounded-full hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300"
            >
              <ArrowLeft :size="13" /> Nuova prenotazione
            </button>
          </div>
        </Transition>
      </div>
    </Transition>
  </div>
</template>
