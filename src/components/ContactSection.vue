<script setup>
import { useI18n } from '../composables/useI18n.js'
const { $t } = useI18n()
</script>

<template>
  <section id="contact" class="relative py-32 sm:py-40 px-6 bg-black text-white">
    <!-- Decorative line left -->
    <div class="absolute left-0 top-1/4 bottom-1/4 w-px bg-white/10 hidden lg:block"></div>
    <div class="absolute right-0 top-1/4 bottom-1/4 w-px bg-white/10 hidden lg:block"></div>

    <div class="max-w-4xl mx-auto text-center">
      <!-- Thin rule top -->
      <div class="w-16 h-px bg-white/30 mx-auto mb-12"></div>

      <!-- Heading -->
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
        {{ $t('contact.title') }}
      </h2>

      <!-- Subtitle -->
      <p class="mt-4 text-xl sm:text-2xl font-light tracking-wide text-white/40">
        {{ $t('contact.subtitle') }}
      </p>

      <!-- Links -->
      <div class="mt-16 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
        <a
          href="https://linkedin.com/in/septiandwifuady"
          target="_blank"
          rel="noopener noreferrer"
          class="px-10 py-4 border border-white/30 hover:bg-white hover:text-black transition-colors font-medium tracking-wide text-lg"
        >
          {{ $t('contact.linkedin') }}
        </a>
        <a
          href="https://github.com/dwifuady"
          target="_blank"
          rel="noopener noreferrer"
          class="px-10 py-4 border border-white/30 hover:bg-white hover:text-black transition-colors font-medium tracking-wide text-lg"
        >
          {{ $t('contact.github') }}
        </a>
      </div>

      <!-- Thin rule bottom -->
      <div class="w-full h-px bg-white/10 mt-20 sm:mt-24"></div>
    </div>
  </section>
</template>
