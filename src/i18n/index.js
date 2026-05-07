import { reactive } from 'vue'
import id from './id.js'
import en from './en.js'

const messages = { id, en }

const state = reactive({
  locale: 'en',
  messages: { ...messages },
})

function t(key) {
  const keys = key.split('.')
  let result = state.messages[state.locale]
  for (const k of keys) {
    if (result == null) return key
    result = result[k]
  }
  return result ?? key
}

function setLocale(locale) {
  if (messages[locale]) {
    state.locale = locale
  }
}

export function createI18n() {
  return {
    state,
    t,
    setLocale,
    install(app) {
      app.provide('i18n', { state, t, setLocale })
    },
  }
}
