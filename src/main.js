import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './style.css'
import { createI18n } from './i18n/index.js'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [],
})

const i18n = createI18n()

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
