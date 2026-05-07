<script setup>
import { useI18n } from '../composables/useI18n.js'
const { $t } = useI18n()
</script>

<template>
  <section id="projects" class="py-32 px-6">
    <div class="max-w-3xl mx-auto space-y-8">
      <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
        {{ $t('projects.heading') }}
      </h2>
      <div class="border-2 border-dashed border-gray-300 rounded-2xl p-16 text-center">
        <p class="text-xl text-gray-400 font-light">
          {{ $t('projects.empty') }}
        </p>
      </div>
    </div>
  </section>
</template>
