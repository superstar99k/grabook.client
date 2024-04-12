<script setup>
import GeneralLayout from '@/views/layouts/GeneralLayout.vue'
import SectionTitle from '@/components/atoms/titles/SectionTitle.vue'
import PaymentForm from '@/components/organisms/forms/PaymentForm.vue'
import LoadableButton from '@/components/molecules/buttons/LoadableButton.vue'
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter, RouterLink } from 'vue-router'

const store = useStore()
const route = useRoute()
const router = useRouter()

const pending = computed(() => store.getters['fetchState/pending'])

const showPage = ref(true)

onMounted(() => {
  if (!route.query.verification_code) {
    router.push({ name: 'user-auth-register' })
  } else {
    showPage.value = true
  }
})
</script>

<template>
  <GeneralLayout :show-footer="false">
    <div v-if="showPage" class="page-content">
      <div class="container mw-sm px-sm-0 mt-4">
        <SectionTitle class="main"> 決済入力画面 </SectionTitle>
        <div class="price mt-5">
          <p class="mx-3">有料会員</p>
          <p class="mx-3">500円/毎月</p>
        </div>
        <div class="mt-5">
          <PaymentForm />
          <div class="d-sm-flex justify-content-center mt-5">
            <RouterLink
              class="btn-cancel mx-auto mx-sm-3 mb-2 mb-sm-0"
              :to="{ name: 'user-auth-register' }"
            >
              キャンセル
            </RouterLink>
            <LoadableButton
              class="btn-submit mx-auto mx-sm-3"
              type="submit"
              :loading="pending"
              >保存</LoadableButton
            >
          </div>
        </div>
      </div>
    </div>
  </GeneralLayout>
</template>

<style lang="scss">
.page-content {
  margin-bottom: 200px;
}
.price {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;
  background: transparent;
  border: 3px solid #e5267e;
  border-radius: 10px;
  font-size: 2rem;
  font-weight: bold;
  color: #e5267e;
}
</style>
