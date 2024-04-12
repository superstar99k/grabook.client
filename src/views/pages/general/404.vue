<script setup>
import GeneralLayout from '@/views/layouts/GeneralLayout.vue'
</script>

<template>
  <GeneralLayout>
    <div class="other_page">
      <div class="error_part">
        <img src="/images/general/404.png" alt="" />
        <p>
          申し訳ございません。お探しのページが削除されているか、URLが変更されている可能性があります。<br />
          URLをご確認の上もう一度お試しください。
        </p>
        <button class="arrow_btn gradient">
          <a href="/"><p>TOPに戻る</p></a>
        </button>
      </div>
    </div>
  </GeneralLayout>
</template>

<style lang="scss">
@import '@/assets/css/custom/_other.scss';
</style>
