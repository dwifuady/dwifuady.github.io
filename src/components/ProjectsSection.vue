<script setup>
import { useI18n } from '../composables/useI18n.js'
const { $t } = useI18n()
</script>

<template>
  <section id="projects" class="relative py-32 sm:py-40 px-6 bg-white">
    <!-- Decorative lines -->
    <div class="absolute left-0 top-1/4 bottom-1/4 w-px bg-black/10 hidden lg:block"></div>
    <div class="absolute right-0 top-1/4 bottom-1/4 w-px bg-black/10 hidden lg:block"></div>

    <div class="max-w-4xl mx-auto text-center">
      <!-- Thin rule top -->
      <div class="w-16 h-px bg-black mx-auto mb-12"></div>

      <!-- Heading -->
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black">
        {{ $t('projects.heading') }}
      </h2>

      <!-- Empty state -->
      <div class="mt-16 sm:mt-20">
        <p class="text-xl sm:text-2xl font-light text-black/30 tracking-wide leading-relaxed max-w-xl mx-auto">
          {{ $t('projects.empty') }}
        </p>
      </div>

      <!-- Thin rule bottom -->
      <div class="w-full h-px bg-black/10 mt-20 sm:mt-24"></div>
    </div>
  </section>
</template>
