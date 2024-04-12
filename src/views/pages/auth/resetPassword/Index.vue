<script setup>
import AuthLayout from '@/views/layouts/AuthLayout.vue'
import VLogo from '@/components/atoms/logos/VLogo.vue'
import PageTitle from '@/components/atoms/titles/PageTitle.vue'
import TextField from '@/components/molecules/formFields/TextField.vue'
import LoadableButton from '@/components/molecules/buttons/LoadableButton.vue'
import AlertList from '@/components/organisms/alerts/AlertList.vue'
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { useForm } from 'vee-validate'
import { extractFormErrors } from '@/errors/utils'

const store = useStore()
const route = useRoute()
const router = useRouter()

const { role } = route.meta

const inputs = reactive({
  password: '',
  passwordConfirmation: '',
  verificationCode: route.query.verification_code,
})

const { handleSubmit, setErrors } = useForm({
  validationSchema: {
    password: 'required|password_char|min:8',
    passwordConfirmation: 'required|password_char|min:8|confirmed:@password',
  },
})

const pending = computed(() => store.getters['fetchState/pending'])

const handleReset = handleSubmit(async () => {
  try {
    const params = { ...inputs }

    store.commit('alert/clear', { type: 'error' })
    store.commit('fetchState/pending', true)

    await store.dispatch('auth/resetPassword', { params })

    store.commit('alert/putSuccess', ['パスワードリセット完了しました。'])
    router.push({ name: 'auth-login' })
  } catch (error) {
    console.error(error)
    const { message, errors } = extractFormErrors(error)
    setErrors(errors)
    store.commit('alert/putError', [message])
  } finally {
    store.commit('fetchState/pending', false)
  }
})
</script>

<template>
  <AuthLayout :role="role">
    <div class="container mw-800">
      <div class="rounded-card">
        <VLogo />
        <div class="container mw-sm">
          <div class="mb-4">
            <PageTitle class="mb-5 mt-5 fs-2 text-center"
              >パスワード再設定</PageTitle
            >
            <AlertList />
          </div>
          <form @submit="handleReset" @keydown.enter.prevent="">
            <div class="mb-3">
              <TextField
                id="password"
                v-model="inputs.password"
                name="password"
                type="password"
                label="パスワード"
                placeholder="新しいパスワードを入力"
              />
            </div>
            <div>
              <TextField
                id="password_confirmation"
                v-model="inputs.passwordConfirmation"
                name="passwordConfirmation"
                type="password"
                label="確認用パスワード"
                placeholder="再入力"
              />
            </div>
            <div class="mw-200 mx-auto mt-5">
              <LoadableButton
                class="btn-submit"
                type="submit"
                :loading="pending"
                >設定</LoadableButton
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </AuthLayout>
</template>

<style lang="scss">
.rounded-card {
  background-color: white;
  border-radius: 20px;
  padding-top: 70px;
  padding-bottom: 90px;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.3);
}
</style>
