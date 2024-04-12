<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer>
    <div class="main_container1">
      <div class="logo_social">
        <a href="/">
          <img src="/images/common/logo_footer.svg" alt="" />
        </a>
        <div class="social_links">
          <a href="#"><img src="/images/common/logo-facebook.svg" alt="" /></a>
          <a href="#"><img src="/images/common/logo-twitter.svg" alt="" /></a>
          <a href="#"><img src="/images/common/logo-instagram.svg" alt="" /></a>
          <a href="#"><img src="/images/common/logo-youtube.svg" alt="" /></a>
        </div>
        <p class="copyright">Copyright © 2023 grabook All rights reserved.</p>
      </div>
      <div class="footer_links">
        <ul class="one">
          <li>
            <!-- <RouterLink :to="{ name: 'about' }"><span>grabook</span>って？</RouterLink> -->
            <a href="/about"><span>grabook</span>って？</a>
          </li>
          <li>
            <RouterLink :to="{ name: 'about' }"
              ><span>grabook</span>を検索する</RouterLink
            >
          </li>
        </ul>
        <ul class="one">
          <li>
            <RouterLink :to="{ name: 'top' }">新規登録</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'top' }">ログイン / マイページ</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'top' }">お知らせ</RouterLink>
          </li>
          <li>
            <!-- <RouterLink :to="{ name: 'faq' }">よくあるご質問</RouterLink> -->
            <a href="/faq">よくあるご質問</a>
          </li>
          <li>
            <!-- <RouterLink :to="{ name: 'contact' }">お問い合わせ</RouterLink> -->
            <a href="/contact">お問い合わせ</a>
          </li>
          <li>
            <RouterLink :to="{ name: 'top' }">アーティスト会員募集</RouterLink>
          </li>
        </ul>
        <ul class="one">
          <li>
            <RouterLink :to="{ name: 'terms' }">サイト利用規約</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'about-company' }">会社概要</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'order-contract' }"
              >特定商取引法に基づく表記</RouterLink
            >
          </li>
          <li>
            <RouterLink :to="{ name: 'policy' }"
              >プライバシーポリシー</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import '@/assets/css/custom/general/_footer.scss';
</style>
