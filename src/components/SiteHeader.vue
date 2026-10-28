<script setup lang="ts">
import { ref } from 'vue'
import appIconAsset from '../../assets/4A035189-C821-4892-B2C4-FE461C30127B.png'

const menuOpen = ref(false)
const appIcon = appIconAsset.src
</script>

<template>
  <header class="site-header" :class="{ 'menu-open': menuOpen }">
    <a class="brand" href="/">
      <img :src="appIcon" alt="" width="28" height="28" class="brand-icon" />
      Cleanoli
    </a>
    <button
      class="menu-toggle"
      type="button"
      aria-label="Toggle menu"
      aria-controls="primary-navigation"
      :aria-expanded="menuOpen"
      @click="menuOpen = !menuOpen"
    >
      <svg v-if="!menuOpen" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
      <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
    <nav id="primary-navigation" aria-label="Primary navigation" :class="{ 'nav-visible': menuOpen }">
      <a href="/#download-options" @click="menuOpen = false">Install</a>
      <a href="/#features" @click="menuOpen = false">Features</a>
      <a href="/support" @click="menuOpen = false">Support</a>
      <a href="https://github.com/solvePao/Cleanoli-Web/releases" target="_blank" rel="noopener">Releases</a>
      <a href="https://github.com/solvePao/Cleanoli-Web" target="_blank" rel="noopener">GitHub</a>
    </nav>
    <a class="header-cta" href="/#download-options">Availability</a>
  </header>
</template>
