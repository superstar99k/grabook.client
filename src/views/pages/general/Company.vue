<script setup>
import GeneralLayout from '@/views/layouts/GeneralLayout.vue'
import OtherSectionTitle from '@/components/atoms/titles/OtherSectionTitle.vue'
</script>

<template>
  <GeneralLayout>
    <div class="other_page">
      <OtherSectionTitle class="main other">
        <template #japanese>よくあるご質問</template>
        <template #english>Questions & Answers</template>
      </OtherSectionTitle>
      <p class="page_description">
        よくあるご質問をまとめました。<br />
        お問合せの前に是非一度ご確認下さいませ。
      </p>
    </div>
  </GeneralLayout>
</template>

<style lang="scss">
@import '@/assets/css/custom/_other.scss';
</style>
