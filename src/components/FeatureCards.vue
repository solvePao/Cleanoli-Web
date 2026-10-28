<script setup lang="ts">
const features = [
  {
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cleanoli-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',
    title: 'Find the clutter',
    desc: 'Scan caches, logs, and large files from one focused place, without hunting through Finder.',
  },
  {
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cleanoli-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
    title: 'Review every choice',
    desc: 'See what takes up space and choose what should go. Cleanoli never makes the final call for you.',
  },
  {
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cleanoli-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2Z"/><path d="M16 4.1A10 10 0 0 1 19.9 8H16V4.1Z"/></svg>',
    title: 'Understand storage',
    desc: 'See used, available, and reclaimable space clearly so you can manage your Mac with confidence.',
  },
]
</script>

<template>
  <section class="features" id="features" aria-label="Download options">
    <div class="features-header">
      <p class="eyebrow">Thoughtful by design</p>
      <h2>One place to clean disks<br /><span class="text-accent-light">and manage storage.</span></h2>
    </div>
    <div class="features-grid">
      <article class="feature-card" v-for="f in features" :key="f.title">
        <span class="feature-icon" aria-hidden="true" v-html="f.icon"></span>
        <h3>{{ f.title }}</h3>
        <p>{{ f.desc }}</p>
      </article>
    </div>
  </section>
</template>
