<script setup>
import AuthLayout from '@/views/layouts/AuthLayout.vue'
import VLogo from '@/components/atoms/logos/VLogo.vue'
import PageTitle from '@/components/atoms/titles/PageTitle.vue'
import TextField from '@/components/molecules/formFields/TextField.vue'
import LoadableButton from '@/components/molecules/buttons/LoadableButton.vue'
import AlertList from '@/components/organisms/alerts/AlertList.vue'
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useForm } from 'vee-validate'
import { extractFormErrors } from '@/errors/utils'

const store = useStore()
const route = useRoute()

const { role } = route.meta

const inputs = reactive({
  email: '',
})

const { handleSubmit, setErrors } = useForm({
  validationSchema: {
    email: 'email|required',
  },
})

const status = reactive({
  sentLink: false,
})

const pending = computed(() => store.getters['fetchState/pending'])

const sendResetPasswordEmail = handleSubmit(async () => {
  try {
    const params = { ...inputs }

    store.commit('alert/clear', { type: 'error' })
    store.commit('fetchState/pending', true)

    status.sentLink = false

    await store.dispatch('auth/sendResetPasswordEmail', { params })

    status.sentLink = true
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
              >パスワードリセット</PageTitle
            >
            <AlertList />
          </div>
          <form @submit="sendResetPasswordEmail" @keydown.enter.prevent="">
            <div class="mb-3">
              <TextField
                id="email"
                v-model="inputs.email"
                name="email"
                label="メールアドレス"
                placeholder="メールアドレス入力"
              />
            </div>
            <div v-if="status.sentLink">
              <p class="text-danger fs-7 text-center">
                再発行用のURLを送付しました
              </p>
            </div>
            <div class="mw-200 mx-auto mt-5">
              <LoadableButton
                class="btn-submit"
                type="submit"
                :loading="pending"
                >送信</LoadableButton
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
  padding-top: 90px;
  padding-bottom: 90px;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.3);
}
</style>
