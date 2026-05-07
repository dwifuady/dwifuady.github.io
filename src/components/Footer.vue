<script setup>
import { useI18n } from '../composables/useI18n.js'
const { $t } = useI18n()
</script>

<template>
  <footer class="py-8 px-6 border-t border-gray-200">
    <div class="max-w-5xl mx-auto text-center text-sm text-gray-400">
      {{ $t('footer.copyright') }}
    </div>
  </footer>
</template>
