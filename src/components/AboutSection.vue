<script setup>
import { useI18n } from '../composables/useI18n.js'
const { $t } = useI18n()
</script>

<template>
  <section id="about" class="py-32 px-6">
    <div class="max-w-3xl mx-auto space-y-8">
      <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
        {{ $t('about.heading') }}
      </h2>
      <p class="text-lg text-gray-600 leading-relaxed">
        {{ $t('about.bio') }}
      </p>
    </div>
  </section>
</template>
