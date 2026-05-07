import { inject, computed } from 'vue'

export function useI18n() {
  const i18n = inject('i18n')
  if (!i18n) {
    throw new Error('useI18n() must be used within an app with i18n plugin installed')
  }

  const $t = (key) => i18n.t(key)

  const locale = computed(() => i18n.state.locale)

  const setLocale = (locale) => i18n.setLocale(locale)

  return { $t, locale, setLocale }
}
