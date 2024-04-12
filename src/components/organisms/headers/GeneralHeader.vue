<script setup>
import { useRoute } from 'vue-router'

const TOP_ROUTE = 'top'
const ABOUT_ROUTE = 'about'
const route = useRoute()

const extraClass =
  route.name === TOP_ROUTE || route.name === ABOUT_ROUTE ? 'main' : ''
</script>

<template>
  <!-- header section -->
  <header :class="`${extraClass}`">
    <div class="header">
      <div class="header_logo">
        <a href="/">
          <img
            v-if="extraClass === 'main'"
            src="/images/common/logo_top.svg"
            alt=""
          />
          <img v-else src="/images/common/logo_other1.svg" alt="" />
        </a>
      </div>
      <div class="header_menu">
        <ul class="main">
          <li>
            <a href="/about">
              <p>grabookとは</p>
              <span>ABOUT</span>
            </a>
          </li>
          <li>
            <a href="#">
              <p>カテゴリ</p>
              <span>CATEGORY</span>
            </a>
          </li>
          <li>
            <a href="#">
              <p>ブック検索</p>
              <span>SEARCH</span>
            </a>
          </li>
        </ul>
        <ul class="login_register">
          <li class="login">
            <a href="/auth/login"><p>ログイン</p></a>
          </li>
          <li class="register">
            <a href="/auth/register"><p>会員登録</p></a>
          </li>
        </ul>
      </div>
      <div class="sp_menu sp">
        <div class="">
          <div id="btn07" class="btn-trigger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- header section end -->
</template>

<style lang="scss">
@import '@/assets/css/custom/general/_header.scss';
</style>
