<script setup>
import GeneralLayout from '@/views/layouts/GeneralLayout.vue'
import OtherSectionTitle from '@/components/atoms/titles/OtherSectionTitle.vue'
</script>

<template>
  <GeneralLayout>
    <div class="other_page">
      <OtherSectionTitle class="main other">
        <template #japanese>特定商取引法に基づく表記</template>
        <template #english
          >NOTATION BASED ON THE ACT ON SPECIFIED COMMERCIAL
          TRANSACTIONS</template
        >
      </OtherSectionTitle>
    </div>
  </GeneralLayout>
</template>

<style lang="scss">
@import '@/assets/css/custom/_other.scss';
</style>
