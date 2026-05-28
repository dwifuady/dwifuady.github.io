<script setup>
import { useI18n } from '../composables/useI18n.js'
const { $t } = useI18n()
</script>

<template>
  <footer class="py-8 px-6 border-t border-zinc-200/60 bg-zinc-50">
    <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-sm text-zinc-400">
        {{ $t('footer.copyright') }}
      </p>
      <p class="text-xs text-zinc-300">
        {{ $t('footer.tagline') }}
      </p>
    </div>
  </footer>
</template>
