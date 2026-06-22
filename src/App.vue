<script setup>
/**
 * App.vue
 * Componente radice: include Navbar e Footer globali, con RouterView al centro
 */
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-stone-50">
    <!-- Navbar fissa in cima -->
    <Navbar />

    <!-- Contenuto principale (spinge il footer in fondo) -->
    <main class="flex-1">
      <RouterView v-slot="{ Component, route }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>
