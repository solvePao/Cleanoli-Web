<script setup lang="ts">
import cleanupAsset from '../../assets/cleanoli-cleanup.png'
import appIconAsset from '../../assets/4A035189-C821-4892-B2C4-FE461C30127B.png'

const appIcon = appIconAsset.src
</script>

<template>
  <section class="hero" id="download">
    <div class="hero-copy">
      <img class="hero-app-icon" :src="appIcon" alt="" width="104" height="104" />
      <h1>Clean your disk.<br /><span class="text-accent-light">Understand your storage.</span></h1>
      <p class="lede">
        Cleanoli is a disk cleaner and storage manager for macOS. Find caches, logs, and large files, understand what uses your space, and review every item before it moves to Trash.
      </p>
      <div class="actions">
        <a
          class="button button-primary"
          href="#download-options"
        >
          Release availability
          <span aria-hidden="true">→</span>
        </a>
        <a class="button button-outline" href="#download-options">Install options</a>
      </div>
      <p class="hero-note">Cleanoli downloads are being prepared</p>
    </div>

    <div class="product-hero-art">
      <img
        :src="cleanupAsset.src"
        alt="Cleanoli Smart Cleanup ready to scan"
        width="2560"
        height="1600"
      />
    </div>

    <ul class="trust-strip" aria-label="Cleanoli trust signals">
      <li>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7.5 12 3 3 6-7"/><path d="M12 3 4.5 6v5.3c0 4.5 3.2 8.2 7.5 9.7 4.3-1.5 7.5-5.2 7.5-9.7V6L12 3Z"/></svg>
        <span><strong>Notarized by Apple</strong><small>Verified for macOS</small></span>
      </li>
      <li>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8v4l2.5 2.5"/><circle cx="12" cy="12" r="9"/></svg>
        <span><strong>5+ years</strong><small>of Mac expertise</small></span>
      </li>
      <li>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M7 12h10M9 17h6"/></svg>
        <span><strong>Review-first cleaning</strong><small>You make the final choice</small></span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.product-hero-art {
  width: min(980px, 100%);
  padding: 12px;
  background: #fff;
  overflow: hidden;
  border: 1px solid var(--cleanoli-border);
  border-radius: 34px;
  box-shadow: 0 38px 100px rgba(15, 15, 15, 0.14);
}

.product-hero-art img {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: center;
  border-radius: 24px;
}

.hero-app-icon {
  width: 104px;
  height: 104px;
  margin-bottom: 24px;
  border-radius: 25px;
  box-shadow: 0 18px 42px rgba(15, 15, 15, 0.14);
}

.hero-note { margin: 18px 0 0; color: var(--cleanoli-text-muted); font-size: 12px; }

.trust-strip {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: min(940px, 100%);
  margin: 4px 0 0;
  padding: 0;
  list-style: none;
}

.trust-strip li {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 86px;
  padding: 18px 24px;
  border-right: 1px solid var(--cleanoli-border);
  text-align: left;
}

.trust-strip li:last-child { border-right: 0; }
.trust-strip svg { width: 27px; height: 27px; fill: none; stroke: currentColor; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
.trust-strip span, .trust-strip strong, .trust-strip small { display: block; }
.trust-strip strong { font-size: 13px; letter-spacing: -0.015em; }
.trust-strip small { margin-top: 2px; color: var(--cleanoli-text-muted); font-size: 11px; }

@media (max-width: 960px) {
  .product-hero-art { width: min(100%, 760px); margin-inline: auto; }
}

@media (max-width: 680px) {
  .trust-strip { grid-template-columns: 1fr; }
  .trust-strip li { justify-content: flex-start; min-height: 0; padding: 15px 20px; border-right: 0; border-bottom: 1px solid var(--cleanoli-border); }
  .trust-strip li:last-child { border-bottom: 0; }
}
</style>
