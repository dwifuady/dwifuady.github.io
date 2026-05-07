<script setup>
import { useI18n } from '../composables/useI18n.js'
const { $t } = useI18n()
</script>

<template>
  <section id="contact" class="py-32 px-6 bg-black text-white">
    <div class="max-w-3xl mx-auto space-y-8 text-center">
      <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
        {{ $t('contact.heading') }}
      </h2>
      <div class="flex justify-center gap-6">
        <a
          href="https://linkedin.com/in/septiandwifuady"
          target="_blank"
          rel="noopener noreferrer"
          class="px-6 py-3 border border-white/30 rounded-lg hover:bg-white hover:text-black transition-colors font-medium"
        >
          {{ $t('contact.linkedin') }}
        </a>
        <a
          href="https://github.com/dwifuady"
          target="_blank"
          rel="noopener noreferrer"
          class="px-6 py-3 border border-white/30 rounded-lg hover:bg-white hover:text-black transition-colors font-medium"
        >
          {{ $t('contact.github') }}
        </a>
      </div>
    </div>
  </section>
</template>
