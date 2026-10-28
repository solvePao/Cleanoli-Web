import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import FaqSection from '../src/components/FaqSection.vue'
import DownloadOptions from '../src/components/DownloadOptions.vue'
import Hero from '../src/components/Hero.vue'
import SiteHeader from '../src/components/SiteHeader.vue'

afterEach(() => {
  vi.useRealTimers()
  document.documentElement.removeAttribute('data-theme')
  vi.unstubAllGlobals()
})

describe('primary navigation', () => {
  it('exposes and toggles the mobile menu state accessibly', async () => {
    const wrapper = mount(SiteHeader)
    const toggle = wrapper.get('button[aria-controls="primary-navigation"]')
    const navigation = wrapper.get('#primary-navigation')

    expect(toggle.attributes('aria-expanded')).toBe('false')
    expect(navigation.classes()).not.toContain('nav-visible')

    await toggle.trigger('click')

    expect(toggle.attributes('aria-expanded')).toBe('true')
    expect(navigation.classes()).toContain('nav-visible')
  })

  it('links releases directly while the API-backed feed is absent', () => {
    const wrapper = mount(SiteHeader)
    const releases = wrapper.get('a[href="https://github.com/solvePao/Cleanoli-Web/releases"]')

    expect(releases.text()).toBe('Releases')
  })

  it('links to the support page', () => {
    const wrapper = mount(SiteHeader)
    const support = wrapper.get('a[href="/support"]')

    expect(support.text()).toBe('Support')
  })

  it('keeps the interface permanently light', () => {
    const wrapper = mount(SiteHeader)
    expect(wrapper.find('.theme-toggle').exists()).toBe(false)
  })
})

describe('download actions', () => {
  it('directs visitors to release availability in the hero', () => {
    const wrapper = mount(Hero)
    const download = wrapper.get(
      'a[href="#download-options"]',
    )

    expect(download.text()).toContain('Release availability')
  })

  it('does not offer unavailable DMG or Homebrew downloads', () => {
    const wrapper = mount(DownloadOptions)

    expect(wrapper.text()).toContain('DMG · Coming soon')
    expect(wrapper.text()).toContain('Homebrew · Coming soon')
    expect(wrapper.find('a[href*="Cleanoli.dmg"]').exists()).toBe(false)
    expect(wrapper.text()).not.toContain('brew install --cask cleanoli')
  })

  it('marks the Mac App Store option as coming soon without a destination link', () => {
    const wrapper = mount(DownloadOptions)
    const appStoreCard = wrapper.get('.download-card-soon')

    expect(appStoreCard.text()).toContain('Mac App Store')
    expect(appStoreCard.text()).toContain('Coming soon')
    expect(appStoreCard.find('a').exists()).toBe(false)
  })

})

describe('FAQ', () => {
  it('opens one answer and exposes the relationship to assistive technology', async () => {
    const wrapper = mount(FaqSection)
    const buttons = wrapper.findAll('.faq-btn')
    const first = buttons[0]

    expect(first.attributes('aria-expanded')).toBe('false')
    expect(first.attributes('aria-controls')).toBe('faq-answer-0')

    await first.trigger('click')

    expect(first.attributes('aria-expanded')).toBe('true')
    expect(wrapper.get('#faq-answer-0').isVisible()).toBe(true)
  })
})
