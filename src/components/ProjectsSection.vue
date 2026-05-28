<script setup>
import { useI18n } from '../composables/useI18n.js'
const { $t } = useI18n()

const projects = $t('projects.items') || []
</script>

<template>
  <section id="projects" class="py-32 px-6 bg-zinc-50">
    <div class="max-w-5xl mx-auto">
      <!-- Section label -->
      <div class="reveal text-center mb-16">
        <span class="text-xs font-semibold tracking-widest uppercase text-zinc-400 bg-zinc-200/60 px-4 py-1.5 rounded-full">
          {{ $t('projects.heading') }}
        </span>
      </div>

      <!-- Project Cards Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="(project, i) in projects"
          :key="i"
          class="reveal card-hover bg-white rounded-2xl border border-zinc-200/60 p-6 flex flex-col"
          :class="`reveal-delay-${(i % 3) + 1}`"
        >
          <!-- Icon placeholder -->
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br mb-4 flex items-center justify-center text-white text-lg font-bold"
            :class="[
              i === 0 ? 'from-indigo-400 to-indigo-500' :
              i === 1 ? 'from-amber-400 to-amber-500' :
              'from-emerald-400 to-emerald-500'
            ]"
          >
            {{ project.title.charAt(0) }}
          </div>

          <!-- Title -->
          <h3 class="text-lg font-semibold text-zinc-900 mb-2">
            {{ project.title }}
          </h3>

          <!-- Description -->
          <p class="text-sm text-zinc-500 leading-relaxed flex-grow mb-5">
            {{ project.desc }}
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="px-2.5 py-0.5 text-xs font-medium text-zinc-500 bg-zinc-100 rounded-md"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- Empty state if no projects -->
      <div v-if="!projects.length" class="reveal text-center py-16">
        <p class="text-xl text-zinc-300 font-light">
          {{ $t('projects.empty') }}
        </p>
      </div>
    </div>
  </section>
</template>
