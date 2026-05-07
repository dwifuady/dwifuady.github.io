<script setup>
import { useI18n } from '../composables/useI18n.js'
const { $t } = useI18n()
</script>

<template>
  <footer class="py-10 px-6 border-t border-black/10 bg-white">
    <div class="max-w-4xl mx-auto text-center">
      <p class="text-sm text-black/40 tracking-wide">
        {{ $t('footer.copyright') }}
      </p>
    </div>
  </footer>
</template>
