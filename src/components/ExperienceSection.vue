<script setup>
import { useI18n } from '../composables/useI18n.js'
const { $t } = useI18n()

const timeline = $t('experience.timeline')
const skillList = $t('experience.skillList')
</script>

<template>
  <section id="experience" class="py-32 px-6 bg-white border-y border-zinc-100">
    <div class="max-w-4xl mx-auto">
      <!-- Section label -->
      <div class="reveal text-center mb-16">
        <span class="text-xs font-semibold tracking-widest uppercase text-zinc-400 bg-zinc-100 px-4 py-1.5 rounded-full">
          {{ $t('experience.heading') }}
        </span>
      </div>

      <!-- Timeline -->
      <div class="space-y-1 reveal reveal-delay-1">
        <div
          v-for="(item, i) in timeline"
          :key="i"
          class="relative pl-10 pb-12 last:pb-0 border-l-2 border-zinc-200 group"
        >
          <!-- Animated dot -->
          <div class="absolute left-[-6px] top-1.5 timeline-dot">
            <div class="w-2.5 h-2.5 rounded-full bg-zinc-900 ring-4 ring-white transition-all duration-300 group-hover:bg-amber-500 group-hover:ring-amber-100" />
          </div>

          <!-- Year badge -->
          <span class="inline-block text-xs font-semibold text-zinc-400 tracking-wider mb-2 px-2 py-0.5 rounded-md bg-zinc-50 border border-zinc-100">
            {{ item.year }}
          </span>

          <!-- Role -->
          <h3 class="text-lg sm:text-xl font-semibold text-zinc-900 mt-1">
            {{ item.role }}
          </h3>

          <!-- Company -->
          <p class="text-sm text-zinc-500 font-medium mb-3">
            {{ item.company }}
          </p>

          <!-- Description -->
          <p class="text-zinc-600 leading-relaxed max-w-2xl">
            {{ item.desc }}
          </p>
        </div>
      </div>

      <!-- Skills -->
      <div class="mt-20 reveal reveal-delay-2">
        <h3 class="text-sm font-semibold text-zinc-400 tracking-widest uppercase mb-6">
          {{ $t('experience.skills') }}
        </h3>
        <div class="flex flex-wrap gap-2.5">
          <span
            v-for="(skill, i) in skillList"
            :key="i"
            class="px-4 py-2 text-sm font-medium text-zinc-600 bg-zinc-50 border border-zinc-200 rounded-full hover:border-zinc-900 hover:bg-white hover:text-zinc-900 hover:shadow-sm transition-all duration-300 cursor-default"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
