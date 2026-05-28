<script setup>
import { useI18n } from '../composables/useI18n.js'
const { $t } = useI18n()
</script>

<template>
  <section id="contact" class="relative py-32 px-6 overflow-hidden">
    <!-- Dark gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800" />

    <!-- Subtle decorative gradient orbs -->
    <div class="gradient-orb w-80 h-80 bg-indigo-500/20 top-0 -right-20" />
    <div class="gradient-orb w-64 h-64 bg-amber-500/10 bottom-0 -left-16" style="animation-delay: 2s" />

    <div class="relative z-10 max-w-3xl mx-auto text-center">
      <!-- Label -->
      <div class="reveal mb-10">
        <span class="text-xs font-semibold tracking-widest uppercase text-zinc-500 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
          {{ $t('contact.title') }}
        </span>
      </div>

      <!-- Heading -->
      <h2 class="reveal reveal-delay-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
        {{ $t('contact.title') }}
      </h2>

      <!-- Subtitle -->
      <p class="reveal reveal-delay-2 text-lg sm:text-xl text-zinc-400 font-light mb-14 max-w-lg mx-auto">
        {{ $t('contact.subtitle') }}
      </p>

      <!-- Social Links -->
      <div class="reveal reveal-delay-3 flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="https://linkedin.com/in/septiandwifuady"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-black/20"
        >
          <!-- LinkedIn icon (simple SVG) -->
          <svg class="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span class="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
            {{ $t('contact.linkedin') }}
          </span>
          <span class="text-zinc-600 group-hover:text-zinc-400 transition-all duration-300 group-hover:translate-x-1">&rarr;</span>
        </a>

        <a
          href="https://github.com/dwifuady"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-black/20"
        >
          <!-- GitHub icon (simple SVG) -->
          <svg class="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          <span class="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
            {{ $t('contact.github') }}
          </span>
          <span class="text-zinc-600 group-hover:text-zinc-400 transition-all duration-300 group-hover:translate-x-1">&rarr;</span>
        </a>
      </div>

      <!-- Email hint -->
      <p class="reveal reveal-delay-3 mt-10 text-sm text-zinc-600">
        <span class="text-zinc-500">{{ $t('contact.email') }}:</span>
        <a href="mailto:septian@dwifuady.com" class="text-zinc-400 hover:text-white transition-colors ml-1 underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-400">
          septian@dwifuady.com
        </a>
      </p>
    </div>
  </section>
</template>
