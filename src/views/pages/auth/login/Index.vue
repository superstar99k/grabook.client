<script setup>
import AuthLayout from '@/views/layouts/AuthLayout.vue'
import VLogo from '@/components/atoms/logos/VLogo.vue'
import TextField from '@/components/molecules/formFields/TextField.vue'
import LoadableButton from '@/components/molecules/buttons/LoadableButton.vue'
import AlertList from '@/components/organisms/alerts/AlertList.vue'
import { useForm } from 'vee-validate'
import { RouterLink, onBeforeRouteLeave } from 'vue-router'
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import api from '@/api'
import { extractFormErrors } from '@/errors/utils'

const store = useStore()
const route = useRoute()
const router = useRouter()

const { role } = route.meta

const inputs = reactive({
  email: '',
  password: '',
})

const { handleSubmit, setErrors } = useForm({
  validationSchema: {
    email: 'email|required',
    password: 'required',
  },
})

const pending = computed(() => store.getters['fetchState/pending'])

const handleLogin = handleSubmit(async () => {
  try {
    const params = { ...inputs }

    store.commit('alert/clear', { type: 'error' })
    store.commit('fetchState/pending', true)

    await api.auth.initializeCsrfCookie()
    await store.dispatch('auth/passwordLogin', { params })
    await store.dispatch('loggedIn')

    router.push({ name: 'admin-dashboard' })
  } catch (error) {
    console.error(error)
    const { message, errors } = extractFormErrors(error)
    setErrors(errors)
    store.commit('alert/putError', [message])
  } finally {
    store.commit('fetchState/pending', false)
  }
})

onBeforeRouteLeave(() => {
  store.commit('alert/clearAll')
})
</script>

<template>
  <AuthLayout :role="role" route="auth-login">
    <div class="container mw-xs">
      <div class="mb-5">
        <VLogo :white="true" />
      </div>
      <AlertList class="mb-4" />
      <form @submit="handleLogin" @keydown.enter.prevent="">
        <div class="mb-3">
          <TextField
            id="email"
            v-model="inputs.email"
            name="email"
            label="メールアドレス"
            placeholder="メールアドレス"
            error-class="text-orange"
          />
        </div>
        <div class="mb-4">
          <TextField
            id="password"
            v-model="inputs.password"
            name="password"
            label="パスワード"
            type="password"
            autocomplete="current-password"
            placeholder="パスワード"
            error-class="text-orange"
          />
        </div>
        <div class="mb-5 d-flex justify-content-center align-items-center">
          <div style="width: 30px" class="me-2">
            <img src="/images/common/checkbox.svg" alt="checkbox" />
          </div>
          <p class="text-white">ログインしたままにする</p>
        </div>
        <div class="mb-4 px-4">
          <LoadableButton
            class="btn-auth-arrow"
            type="submit"
            :loading="pending"
            >ログイン</LoadableButton
          >
        </div>
        <p class="text-white text-center fs-7 mb-5">
          パスワードを忘れた方は
          <RouterLink
            :to="{ name: `${role}-auth-forgot_password` }"
            class="fw-bold btn-link"
            >こちら</RouterLink
          >
        </p>
        <div class="mb-2 px-4">
          <RouterLink
            :to="{ name: `${role}-auth-register` }"
            class="btn-auth-arrow"
            >新規会員登録</RouterLink
          >
        </div>
      </form>
    </div>
  </AuthLayout>
</template>

<style lang="scss">
@import '@/assets/css/variables';

.btn-auth-arrow {
  display: block;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  border-radius: 30px;
  color: black;
  text-align: center;
  background-color: $color-orange;
  box-shadow: 2px 3px 0px #45392f;
  filter: drop-shadow(2px 3px 0px #45392f);
  transition: 0.1s all;

  &:hover {
    background-color: $color-orange;
    filter: drop-shadow(1px 1px 0px #45392f);
    color: #45392f;
  }

  &::after {
    content: '';
    display: block;
    width: 10px;
    height: 16px;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background-image: url(/images/common/arrow-right.svg);
    background-size: cover;
  }
}
</style>
