<script setup>
import GeneralLayout from '@/views/layouts/GeneralLayout.vue'
import SectionTitle from '@/components/atoms/titles/SectionTitle.vue'
import TextField from '@/components/molecules/formFields/TextField.vue'
import SelectField from '@/components/molecules/formFields/SelectField.vue'
import LoadableButton from '@/components/molecules/buttons/LoadableButton.vue'
import AlertList from '@/components/organisms/alerts/AlertList.vue'
import { useForm } from 'vee-validate'
import { onBeforeRouteLeave } from 'vue-router'
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { Core as YubinBangoCore } from 'yubinbango-core2'
import { extractFormErrors } from '@/errors/utils'
import { decamelizeKeys } from '@/utils/object'

const store = useStore()
const router = useRouter()

const inputs = reactive({
  name: '',
  postalCode: '',
  address: '',
  tel: '',
  email: '',
  emailConfirmation: '',
  password: '',
  plan: 'free',
})

const planOptions = [
  { name: '無料会員（購入のみ）', value: 'free' },
  { name: '有料会員', value: 'premium' },
]

const { handleSubmit, setErrors } = useForm({
  validationSchema: {
    name: 'required',
    postalCode: 'required|max:8',
    address: 'required',
    tel: 'numeric',
    email: 'email|required',
    emailConfirmation: 'email|required|confirmed:@email',
    password: 'required|password_char|min:8',
  },
})

const pending = computed(() => store.getters['fetchState/pending'])

const fetchAddress = () => {
  new YubinBangoCore(inputs.postalCode, (addr) => {
    // region=都道府県, locality=市区町村, street=町域
    const address = addr.region + addr.locality + addr.street
    inputs.address = address
  })
}

const handleRegister = handleSubmit(async () => {
  try {
    const params = { ...inputs }

    store.commit('alert/clear', { type: 'error' })
    store.commit('fetchState/pending', true)

    const res = await store.dispatch('auth/temporaryRegister', { params })

    if (inputs.plan === 'premium') {
      return router.push({
        name: 'user-auth-register-payment',
        query: decamelizeKeys(res),
      })
    }

    await store.dispatch('auth/register', { params: decamelizeKeys(res) })

    router.push({ name: 'user-auth-register-completed' })
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
  <GeneralLayout :show-footer="false">
    <div class="page-content">
      <div class="container mw-md">
        <SectionTitle class="main pt-4 mb-4">新規会員登録</SectionTitle>
        <AlertList class="mb-5" />
        <form @submit="handleRegister" @keydown.enter.prevent="">
          <div class="form-field">
            <label for="name">氏名</label>
            <TextField
              id="name"
              v-model="inputs.name"
              name="name"
              label="氏名"
              placeholder="必須"
              class="w-100"
            />
          </div>
          <div class="form-field mb-2">
            <label for="postalCode">郵便番号</label>
            <TextField
              id="postalCode"
              v-model="inputs.postalCode"
              name="postalCode"
              label="郵便番号"
              placeholder="必須"
              @blur="fetchAddress"
            />
          </div>
          <div class="form-field">
            <label for="address">住所</label>
            <TextField
              id="address"
              v-model="inputs.address"
              name="address"
              label="住所"
              placeholder="必須"
              class="w-100"
            />
          </div>
          <div class="form-field">
            <label for="tel">電話番号</label>
            <TextField
              id="tel"
              v-model="inputs.tel"
              name="tel"
              label="電話番号"
              class="w-100"
            />
          </div>
          <div class="form-field mb-2">
            <label for="email">メールアドレス</label>
            <TextField
              id="email"
              v-model="inputs.email"
              name="email"
              label="メールアドレス"
              class="w-100"
              placeholder="必須"
            />
          </div>
          <div class="form-field">
            <label for="emailConfirmation">メールアドレス（確認）</label>
            <TextField
              id="emailConfirmation"
              v-model="inputs.emailConfirmation"
              name="emailConfirmation"
              label="確認用メールアドレス"
              class="w-100"
              placeholder="必須"
            />
          </div>
          <div class="form-field">
            <label for="password">パスワード入力</label>
            <TextField
              id="password"
              v-model="inputs.password"
              name="password"
              label="パスワード"
              type="password"
              autocomplete="current-password"
              placeholder="必須"
              class="w-100"
            />
          </div>
          <div class="form-field mt-5">
            <label for="password">プラン選択</label>
            <SelectField
              id="plan"
              v-model:model-value="inputs.plan"
              :options="planOptions"
              name="plan"
              label="プラン選択"
              :show-unselected="false"
              class="w-100 mw-250"
            />
          </div>
          <div class="button-bar">
            <a href="/" class="btn-cancel mx-auto mx-sm-3 mb-2 mb-sm-0">
              キャンセル
            </a>
            <LoadableButton
              class="btn-submit mx-auto mx-sm-3"
              type="submit"
              :loading="pending"
              >保存</LoadableButton
            >
          </div>
        </form>
      </div>
    </div>
  </GeneralLayout>
</template>

<style lang="scss">
.page-content {
  margin-bottom: 200px;
}

.form-field {
  display: flex;
  margin-bottom: 30px;
  label {
    max-width: 200px;
    width: 100%;
    padding-top: 14px;
  }
}

.button-bar {
  display: flex;
  justify-content: center;
  margin-top: 80px;
  padding: 0 20px;
}

@media screen and (max-width: 576px) {
  .page-content {
    margin-bottom: 100px;
  }

  .form-field {
    display: block;
    margin-bottom: 20px !important;
    label {
      padding-top: 0;
      margin-bottom: 5px;
    }
  }

  .button-bar {
    margin-top: 40px;
    display: block;
  }

  .btn-cancel,
  .btn-submit {
    max-width: 100%;
  }

  .w-100.mw-250 {
    max-width: 100% !important;
  }
}
</style>
