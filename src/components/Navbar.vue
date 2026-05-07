<script setup>
import { useI18n } from '../composables/useI18n.js'

const { $t, locale, setLocale } = useI18n()

const navItems = ['home', 'about', 'experience', 'projects', 'contact']

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function toggleLocale() {
  setLocale(locale.value === 'en' ? 'id' : 'en')
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
    <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#" class="text-lg font-semibold tracking-tight" @click.prevent="scrollTo('hero')">
        SDF
      </a>
      <div class="flex items-center gap-1 sm:gap-2">
        <button
          v-for="item in navItems"
          :key="item"
          class="px-2 sm:px-3 py-2 text-sm font-medium text-gray-600 hover:text-black transition-colors rounded-lg hover:bg-gray-100"
          @click="scrollTo(item)"
        >
          {{ $t(`nav.${item}`) }}
        </button>
        <button
          class="ml-2 px-3 py-2 text-xs font-semibold uppercase tracking-wider border border-gray-300 rounded-lg hover:bg-black hover:text-white transition-colors"
          @click="toggleLocale"
        >
          {{ locale === 'en' ? 'ID' : 'EN' }}
        </button>
      </div>
    </div>
  </nav>
</template>
