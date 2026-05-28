<script setup>
import { useI18n } from '../composables/useI18n.js'
const { $t } = useI18n()

function scrollToContact() {
  const el = document.getElementById('contact')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden">
    <!-- Background orbs -->
    <div class="gradient-orb w-96 h-96 bg-amber-200 top-10 -left-20 animate-float" />
    <div class="gradient-orb w-72 h-72 bg-indigo-200 bottom-20 -right-16 animate-float" style="animation-delay: 3s;" />

    <div class="relative z-10 max-w-3xl mx-auto text-center">
      <!-- Greeting -->
      <p class="text-sm sm:text-base text-zinc-500 font-medium tracking-widest uppercase mb-6 animate-fade-in-up">
        {{ $t('hero.greeting') }}
      </p>

      <!-- Name -->
      <h1 class="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up animate-delay-100">
        {{ $t('hero.name') }}
      </h1>

      <!-- Title with subtle gradient underline -->
      <div class="inline-block mb-6 animate-fade-in-up animate-delay-200">
        <p class="text-xl sm:text-2xl lg:text-3xl text-zinc-600 font-light">
          {{ $t('hero.title') }}
        </p>
        <div class="mt-2 mx-auto w-12 h-0.5 bg-gradient-to-r from-amber-400 to-indigo-400 rounded-full" />
      </div>

      <!-- Tagline -->
      <p class="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed mb-10 animate-fade-in-up animate-delay-300">
        {{ $t('hero.tagline') }}
      </p>

      <!-- CTA -->
      <button
        class="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-50 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/20 animate-fade-in-up animate-delay-400 group"
        @click="scrollToContact"
      >
        {{ $t('hero.cta') }}
        <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
      </button>

      <!-- Scroll indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-up animate-delay-500 opacity-60">
        <div class="w-5 h-8 rounded-full border-2 border-zinc-300 flex justify-center pt-1.5">
          <div class="w-1 h-2 bg-zinc-400 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  </section>
</template>
