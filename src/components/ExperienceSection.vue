<script setup>
import { useI18n } from '../composables/useI18n.js'
const { $t } = useI18n()

const timeline = $t('experience.timeline')
const skillList = $t('experience.skillList')
</script>

<template>
  <section id="experience" class="py-32 px-6 bg-gray-50">
    <div class="max-w-3xl mx-auto space-y-16">
      <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
        {{ $t('experience.heading') }}
      </h2>

      <div class="space-y-12">
        <div
          v-for="(item, i) in timeline"
          :key="i"
          class="relative pl-8 border-l-2 border-gray-300"
        >
          <div class="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-black" />
          <span class="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            {{ item.year }}
          </span>
          <h3 class="text-xl font-semibold mt-1">{{ item.role }}</h3>
          <p class="text-gray-500 text-sm mb-2">{{ item.company }}</p>
          <p class="text-gray-600 leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold">{{ $t('experience.skills') }}</h3>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="(skill, i) in skillList"
            :key="i"
            class="px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-full hover:border-black hover:bg-black hover:text-white transition-colors cursor-default"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
