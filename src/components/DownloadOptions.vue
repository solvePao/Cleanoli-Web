<script setup lang="ts">
const latestDmgUrl = 'https://github.com/solvePao/Cleanoli-Web/releases/latest/download/Cleanoli.dmg'
const releasesUrl = 'https://github.com/solvePao/Cleanoli-Web/releases'
const homebrewUrl = 'https://github.com/solvePao/homebrew-tap'
</script>

<template>
  <section class="download-options" id="download-options" aria-labelledby="download-options-title">
    <div class="download-heading">
      <p class="eyebrow">Available now</p>
      <h2 id="download-options-title">Choose how you install<br /><span class="text-accent-light">Cleanoli.</span></h2>
      <p>DMG and Homebrew installations activate through Vending Machine. App Store purchases and updates stay with Apple.</p>
    </div>

    <div class="download-grid">
      <article class="download-card download-card-primary">
        <div class="download-card-top">
          <span class="download-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M12 3v12m0 0 5-5m-5 5-5-5"/><path d="M5 19h14"/></svg>
          </span>
          <span class="availability">Latest release</span>
        </div>
        <div>
          <h3>Download the DMG</h3>
          <p>Download the signed, notarized Cleanoli disk image. Activate with Vending Machine; install updates through the app’s signed update feed.</p>
        </div>
        <div class="download-actions">
          <a class="button button-primary" :href="latestDmgUrl">Download latest DMG <span aria-hidden="true">→</span></a>
          <a class="text-link" :href="releasesUrl" target="_blank" rel="noopener">View all releases</a>
        </div>
      </article>

      <article class="download-card">
        <div class="download-card-top">
          <span class="download-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M7 3h10l-1 6H8L7 3Z"/><path d="M8 9v3a4 4 0 0 0 8 0V9M12 16v5m-3 0h6"/></svg>
          </span>
          <span class="availability">Homebrew</span>
        </div>
        <div>
          <h3>Install from the tap</h3>
          <p>Use the public SolvePao tap for a terminal-friendly installation and simple upgrades.</p>
          <div class="brew-command" aria-label="Homebrew installation commands">
            <code>brew tap solvePao/tap</code>
            <code>brew install --cask cleanoli</code>
          </div>
        </div>
        <a class="text-link" :href="homebrewUrl" target="_blank" rel="noopener">Open the Homebrew tap <span aria-hidden="true">→</span></a>
      </article>

      <article class="download-card download-card-soon">
        <div class="download-card-top">
          <span class="download-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M8.5 17.5 5 21m10.5-3.5L19 21M9 3l3 5 3-5M7 15h10M8 15l4-7 4 7"/></svg>
          </span>
          <span class="availability">Coming soon</span>
        </div>
        <div>
          <h3>Mac App Store</h3>
          <p>Cleanoli is coming to the Mac App Store. Until then, use the latest DMG or Homebrew.</p>
        </div>
        <span class="soon-label" aria-label="Mac App Store availability: coming soon">App Store · Coming soon</span>
      </article>
    </div>
  </section>
</template>

<style scoped>
.download-options { padding: 96px 0 42px; }
.download-heading { max-width: 790px; margin-bottom: 42px; }
.download-heading > p:last-child { max-width: 650px; margin: 22px 0 0; color: var(--cleanoli-text-muted); font-size: 16px; }
.download-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
.download-card {
  display: flex;
  min-height: 390px;
  padding: 26px;
  background: #fff;
  border: 1px solid var(--cleanoli-border);
  border-radius: 26px;
  box-shadow: 0 16px 46px rgba(15, 15, 15, 0.06);
  flex-direction: column;
}
.download-card-primary { background: #fafaf8; }
.download-card-soon { box-shadow: none; }
.download-card-top { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 42px; }
.download-icon { display: grid; place-items: center; width: 48px; height: 48px; background: var(--cleanoli-bg-subtle); border-radius: 15px; }
.download-icon svg { width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
.availability { padding: 7px 10px; background: #fff; border: 1px solid var(--cleanoli-border); border-radius: 999px; color: var(--cleanoli-text-muted); font-size: 10px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; }
.download-card h3 { margin: 0; font-size: 25px; letter-spacing: -0.04em; }
.download-card p { margin: 10px 0 0; color: var(--cleanoli-text-muted); font-size: 14px; line-height: 1.7; }
.download-actions { display: flex; align-items: flex-start; gap: 16px; margin-top: auto; flex-direction: column; }
.download-actions .button { width: 100%; }
.text-link { margin-top: auto; color: var(--cleanoli-text); font-size: 13px; font-weight: 750; text-decoration: none; }
.text-link:hover { text-decoration: underline; text-underline-offset: 4px; }
.brew-command { display: grid; gap: 7px; margin-top: 18px; padding: 15px; overflow-x: auto; background: #111; border-radius: 14px; }
.brew-command code { color: #fff; font-size: 11px; white-space: nowrap; }
.soon-label { display: inline-flex; align-items: center; width: fit-content; min-height: 48px; margin-top: auto; padding: 0 17px; background: var(--cleanoli-bg-subtle); border-radius: 999px; color: var(--cleanoli-text-muted); font-size: 12px; font-weight: 750; }

@media (max-width: 960px) {
  .download-grid { grid-template-columns: 1fr 1fr; }
  .download-card-soon { grid-column: 1 / -1; min-height: 280px; }
}

@media (max-width: 680px) {
  .download-options { padding: 72px 0 24px; }
  .download-heading { margin-bottom: 30px; }
  .download-heading > p:last-child { font-size: 14px; }
  .download-grid { grid-template-columns: 1fr; }
  .download-card, .download-card-soon { grid-column: auto; min-height: 350px; padding: 22px; border-radius: 22px; }
  .download-card-top { margin-bottom: 30px; }
}
</style>
