<script setup>
import TextField from '@/components/molecules/formFields/TextField.vue'
import { reactive } from 'vue'

const inputs = reactive({
  name: '',
  email: '',
  cardNumber: '',
  expiredAt: '',
  cvv: '',
})

const handlePay = () => {
  console.log('pay')
}
</script>

<template>
  <form @submit="handlePay" @keydown.enter.prevent="">
    <div class="mb-4">
      <TextField
        id="email"
        v-model="inputs.email"
        name="email"
        label="メールアドレス"
        placeholder="メールアドレス"
        input-class="p-4"
      />
    </div>
    <div class="mb-3">
      <TextField
        id="cardNumber"
        v-model="inputs.cardNumber"
        name="cardNumber"
        label="カード番号"
        placeholder="カード番号の入力"
        input-class="p-4"
      />
    </div>
    <div class="d-flex justify-content-between mb-4">
      <div class="w-50 pe-2">
        <TextField
          id="expiredAt"
          v-model="inputs.expiredAt"
          name="expiredAt"
          label="MM / YY"
          placeholder="MM / YY"
          input-class="p-4"
        />
      </div>
      <div class="w-50 ps-2">
        <TextField
          id="cvv"
          v-model="inputs.cvv"
          name="cvv"
          label="CVV"
          placeholder="CVV"
          input-class="p-4"
        />
      </div>
    </div>
    <div class="mb-4">
      <TextField
        id="name"
        v-model="inputs.name"
        name="name"
        label="名義"
        placeholder="名義"
        input-class="p-4"
      />
    </div>
  </form>
</template>

<style lang="scss"></style>
