<script setup>
import GeneralLayout from '@/views/layouts/GeneralLayout.vue'
import OtherSectionTitle from '@/components/atoms/titles/OtherSectionTitle.vue'
</script>

<template>
  <GeneralLayout>
    <div class="other_page">
      <OtherSectionTitle class="main other">
        <template #japanese>利用規約</template>
        <template #english>TERMS OF SERVICE</template>
      </OtherSectionTitle>
    </div>
  </GeneralLayout>
</template>

<style lang="scss">
@import '@/assets/css/custom/_other.scss';
</style>
