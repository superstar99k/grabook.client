<script setup>
import GeneralLayout from '@/views/layouts/GeneralLayout.vue'
import VLogo from '@/components/atoms/logos/VLogo.vue'
import OtherSectionTitle from '@/components/atoms/titles/OtherSectionTitle.vue'
</script>

<template>
  <GeneralLayout :show-footer="false">
    <div class="page-content">
      <div class="container mw-md">
        <VLogo />
        <div class="mt-5">
          <OtherSectionTitle class="other">
            <template #japanese>会員登録ありがとうございます</template>
            <template #english>THANK YOU</template>
          </OtherSectionTitle>
        </div>
        <p class="intro mt-4">
          ご入力いただきましたメールアドレス宛に控えメールを自動返信いたしました。
          この控えメールが届かない場合は、ご入力いただいたメールアドレスに誤りがあるか、
          インターネット上のなんらかのトラブルの可能性もありますので、
          お手数ですが、再度お問い合わせいただくようお願い申し上げます。
        </p>
        <div class="mt-7">
          <button class="arrow_btn gradient">
            <a href="/"><p>TOPに戻る</p></a>
          </button>
        </div>
      </div>
    </div>
  </GeneralLayout>
</template>

<style lang="scss">
.page-content {
  margin-bottom: 200px;
}

.intro {
  font-family: 'Noto Sans CJK JP';
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.05em;
  line-height: 40px;
  text-align: center;
  color: #212121;
}
</style>
