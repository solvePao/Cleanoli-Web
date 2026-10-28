<script setup lang="ts">
import overviewAsset from '../../assets/cleanoli-overview.png'
import explorerAsset from '../../assets/cleanoli-space-explorer.png'
import analyzerAsset from '../../assets/cleanoli-disk-analyzer.png'

const visuals = [
  {
    src: overviewAsset.src,
    alt: 'Cleanoli storage overview',
    title: 'See storage clearly',
    description: 'Get a calm visual overview of used, available, and purgeable space on your Mac.',
  },
  {
    src: analyzerAsset.src,
    alt: 'Cleanoli disk analyzer',
    title: 'Understand reclaimable space',
    description: 'Know what macOS can free automatically and what you can review yourself.',
  },
  {
    src: explorerAsset.src,
    alt: 'Cleanoli Space Explorer',
    title: 'Stay in control',
    description: 'Preview, select, and clean with confidence—nothing is removed automatically.',
  },
]
</script>

<template>
  <section class="product-gallery" aria-labelledby="gallery-title">
    <div class="gallery-heading">
      <p class="eyebrow">Your storage, explained</p>
      <h2 id="gallery-title">See what fills your disk.<br /><span class="text-accent-light">Decide what stays.</span></h2>
    </div>
    <div class="gallery-list">
      <article
        v-for="(visual, index) in visuals"
        :key="visual.title"
        class="gallery-card"
        :class="{ 'gallery-card-reversed': index % 2 === 1 }"
      >
        <div class="gallery-media">
          <img :src="visual.src" :alt="visual.alt" width="2560" height="1600" loading="lazy" />
        </div>
        <div class="gallery-copy">
          <span class="gallery-index">0{{ index + 1 }}</span>
          <h3>{{ visual.title }}</h3>
          <p>{{ visual.description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.product-gallery { padding: 92px 0 96px; }
.gallery-heading { max-width: 720px; margin-bottom: 42px; }
.gallery-list { display: grid; gap: 18px; }
.gallery-card {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(250px, 0.65fr);
  align-items: center;
  gap: clamp(22px, 4vw, 56px);
  padding: clamp(16px, 2vw, 24px);
  background: linear-gradient(135deg, var(--cleanoli-surface), color-mix(in srgb, var(--cleanoli-bg-subtle) 28%, var(--cleanoli-surface)));
  border: 1px solid var(--cleanoli-border);
  border-radius: 24px;
  box-shadow: var(--cleanoli-shadow);
}
.gallery-card:nth-child(even) { background: linear-gradient(225deg, var(--cleanoli-surface), color-mix(in srgb, var(--cleanoli-success-wash) 42%, var(--cleanoli-surface))); }
.gallery-card-reversed .gallery-media { order: 2; }
.gallery-media {
  overflow: hidden;
  background: var(--cleanoli-bg);
  border: 1px solid var(--cleanoli-border);
  border-radius: 16px;
  box-shadow: 0 14px 32px color-mix(in srgb, var(--cleanoli-ink) 10%, transparent);
}
.gallery-media img { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; object-position: center; }
.gallery-copy { max-width: 390px; padding: 10px 4px; }
.gallery-index { display: block; margin-bottom: 14px; color: var(--cleanoli-accent); font-size: 11px; font-weight: 850; letter-spacing: 0.14em; }
.gallery-copy h3 { margin: 0; font-size: 21px; letter-spacing: -0.03em; }
.gallery-copy p { margin: 8px 0 0; color: var(--cleanoli-text-muted); font-size: 14px; line-height: 1.7; }

@media (max-width: 760px) {
  .product-gallery { padding: 72px 0; }
  .gallery-list { gap: 18px; }
  .gallery-card { grid-template-columns: 1fr; gap: 18px; padding: 14px; border-radius: 20px; }
  .gallery-card-reversed .gallery-media { order: initial; }
  .gallery-copy { max-width: none; padding: 4px 6px 8px; }
  .gallery-index { margin-bottom: 8px; }
}
</style>
