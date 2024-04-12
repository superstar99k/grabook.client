<script setup>
import GeneralHeader from '@/components/organisms/headers/GeneralHeader.vue'
import Footer from '@/components/organisms/footers/Footer.vue'
import PageTop from '@/components/atoms/PageTop.vue'

const props = defineProps({
  showFooter: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <GeneralHeader />
  <main>
    <slot></slot>
  </main>
  <PageTop />
  <Footer v-if="props.showFooter" />
</template>
