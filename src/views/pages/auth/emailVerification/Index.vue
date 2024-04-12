<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import api from '@/api'
import { extractFormErrors } from '@/errors/utils'

const store = useStore()
const route = useRoute()
const router = useRouter()

const { role } = route.meta

const verify = async () => {
  try {
    await api.auth.verify(route.query)

    store.commit('alert/putSuccess', ['メールアドレスの有効化が完了しました。'])

    return router.push({ name: `${role}-auth-login` })
  } catch (error) {
    console.error(error)
    const { message } = extractFormErrors(error)
    store.commit('alert/putError', [message])
    router.push({ name: `${role}-auth-login` })
  }
}

verify()
</script>

<template>
  <div></div>
</template>
