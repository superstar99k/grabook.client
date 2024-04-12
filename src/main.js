import { createApp } from 'vue'
import naive from 'naive-ui'
import '@/bootstrap'
import App from '@/App.vue'
import router from '@/router'
import { store } from '@/store'
import '@/assets/css/main.scss'

const mount = async () => {
  try {
    await store.dispatch('auth/fetchMe')
    await store.dispatch('loggedIn')
  } finally {
    const app = createApp(App)
    app.use(store)
    app.use(router)
    app.use(naive)
    app.mount('#app')
  }
}

mount()
