<script setup lang="ts">
import { ref } from 'vue'

const faqs = [
  {
    q: 'How do activation and updates work?',
    a: 'App Store installations use Apple purchases and App Store updates; TestFlight uses sandbox purchases and beta updates. DMG and Homebrew installations require Vending Machine access. DMG updates use the app’s signed update feed, while Homebrew updates use brew upgrade --cask cleanoli. Purchases do not transfer between Apple and direct distribution.',
  },
  {
    q: 'What does Cleanoli help me clean?',
    a: 'Cleanoli helps you find caches, logs, large files, and other disk clutter, then shows it for review before anything moves to Trash.',
  },
  {
    q: 'Will it delete files automatically?',
    a: 'No. Cleanoli is review-first: you inspect and select items before cleaning, and selected files move to Trash.',
  },
  {
    q: 'Is Cleanoli notarized by Apple?',
    a: 'Yes. Direct-download releases are signed with Developer ID, notarized by Apple, and stapled for macOS verification.',
  },
  {
    q: 'Where does the download come from?',
    a: 'Download buttons point directly to the latest Cleanoli.dmg published in the project’s GitHub Releases.',
  },
]

const openIndex = ref<number | null>(null)

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <section class="faq" aria-labelledby="faq-title">
    <div class="faq-header">
      <p class="eyebrow">FAQ</p>
      <h2 id="faq-title">Wait, <span class="text-accent">what about…</span></h2>
    </div>
    <div class="faq-list">
      <div
        class="faq-item"
        v-for="(f, i) in faqs"
        :key="i"
        :class="{ 'faq-open': openIndex === i }"
      >
        <button
          class="faq-btn"
          type="button"
          @click="toggle(i)"
          :aria-expanded="openIndex === i"
          :aria-controls="`faq-answer-${i}`"
        >
          <span class="faq-question">{{ f.q }}</span>
          <svg
            class="faq-chevron"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        <div
          class="faq-answer"
          :id="`faq-answer-${i}`"
          v-show="openIndex === i"
        >
          <p>{{ f.a }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
