<script setup>
import { useI18n } from '../composables/useI18n.js'
const { $t } = useI18n()
</script>

<template>
  <section id="about" class="py-32 px-6">
    <div class="max-w-5xl mx-auto">
      <!-- Section label -->
      <div class="reveal text-center mb-16">
        <span class="text-xs font-semibold tracking-widest uppercase text-zinc-400 bg-zinc-100 px-4 py-1.5 rounded-full">
          {{ $t('about.heading') }}
        </span>
      </div>

      <!-- Two column layout -->
      <div class="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
        <!-- Left: Avatar / decorative -->
        <div class="md:col-span-2 flex justify-center reveal reveal-delay-1">
          <div class="relative">
            <!-- Decorative avatar placeholder -->
            <div class="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 border border-zinc-200/50 flex items-center justify-center shadow-sm">
              <span class="text-5xl sm:text-6xl font-bold text-zinc-300 select-none">SDF</span>
            </div>
            <!-- Decorative accent -->
            <div class="absolute -bottom-3 -right-3 w-16 h-16 rounded-xl bg-gradient-to-br from-amber-200 to-amber-300 opacity-60 -z-10" />
            <div class="absolute -top-3 -left-3 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-200 to-indigo-300 opacity-60 -z-10" />
          </div>
        </div>

        <!-- Right: Bio -->
        <div class="md:col-span-3 space-y-6 reveal reveal-delay-2">
          <p class="text-lg sm:text-xl text-zinc-700 leading-relaxed">
            {{ $t('about.bio') }}
          </p>

          <!-- Highlights -->
          <div class="grid grid-cols-2 gap-3 pt-4">
            <div
              v-for="(highlight, i) in $t('about.highlights')"
              :key="i"
              class="flex items-center gap-2 text-sm text-zinc-600"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-zinc-400 flex-shrink-0" />
              {{ highlight }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
