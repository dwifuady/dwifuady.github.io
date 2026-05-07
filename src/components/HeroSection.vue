<script setup>
import { useI18n } from '../composables/useI18n.js'
const { $t } = useI18n()
</script>

<template>
  <section id="home" class="min-h-screen flex items-center justify-center px-6 pt-16">
    <div class="max-w-3xl mx-auto text-center space-y-6">
      <h1 class="text-5xl sm:text-7xl font-bold tracking-tight">
        {{ $t('hero.name') }}
      </h1>
      <p class="text-xl sm:text-2xl text-gray-500 font-light">
        {{ $t('hero.title') }}
      </p>
      <p class="text-base sm:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
        {{ $t('hero.tagline') }}
      </p>
    </div>
  </section>
</template>
