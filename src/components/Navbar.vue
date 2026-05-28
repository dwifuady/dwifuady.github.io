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
  <nav class="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-zinc-200/50">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <a
        href="#"
        class="text-lg font-bold tracking-tight text-zinc-900 hover:text-zinc-600 transition-colors"
        @click.prevent="scrollTo('home')"
      >
        SDF<span class="text-zinc-400">.</span>
      </a>

      <!-- Desktop Nav -->
      <div class="hidden sm:flex items-center gap-1">
        <button
          v-for="item in navItems"
          :key="item"
          class="relative px-3 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors rounded-lg hover:bg-zinc-100/70 group"
          @click="scrollTo(item)"
        >
          {{ $t(`nav.${item}`) }}
          <span class="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-zinc-900 rounded-full transition-all duration-300 group-hover:w-1/2" />
        </button>

        <!-- Locale Toggle -->
        <button
          class="ml-2 px-3 py-1.5 text-xs font-semibold tracking-wider rounded-full border border-zinc-300 text-zinc-500 hover:text-zinc-900 hover:border-zinc-900 transition-all duration-300"
          @click="toggleLocale"
        >
          {{ locale === 'en' ? 'ID' : 'EN' }}
        </button>
      </div>

      <!-- Mobile: locale only (hamburger simplified) -->
      <div class="flex sm:hidden items-center gap-2">
        <button
          v-for="item in navItems"
          :key="item"
          class="px-1.5 py-2 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
          @click="scrollTo(item)"
        >
          {{ $t(`nav.${item}`).slice(0, 4) }}
        </button>
        <button
          class="ml-1 px-2 py-1 text-xs font-semibold tracking-wider rounded-full border border-zinc-300 text-zinc-500 hover:text-zinc-900 hover:border-zinc-900 transition-all duration-300"
          @click="toggleLocale"
        >
          {{ locale === 'en' ? 'ID' : 'EN' }}
        </button>
      </div>
    </div>
  </nav>
</template>
