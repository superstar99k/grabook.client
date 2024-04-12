<script setup>
import GeneralLayout from '@/views/layouts/GeneralLayout.vue'
import OtherSectionTitle from '@/components/atoms/titles/OtherSectionTitle.vue'
</script>

<script>
import '@/assets/js/faq.js'

function openCategory(CategoryName) {
  var i
  var x = document.getElementsByClassName('faq_one')
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none'
  }

  document.getElementById(CategoryName).style.display = 'block'
}
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
      <div class="faq_part main_container1">
        <div class="faq_cat_list">
          <button @click="openCategory('category1')">カテゴリ1</button>
          <button @click="openCategory('category2')">カテゴリ2</button>
          <button @click="openCategory('category3')">カテゴリ3</button>
          <button @click="openCategory('category4')">カテゴリ4</button>
          <button @click="openCategory('category5')">カテゴリ5</button>
        </div>
        <div class="faq_main">
          <div id="category1" class="faq_one">
            <div class="qus">
              <p class="mark">Q</p>
              <p class="title">質問内容が入ります。この文章はダミーです。111</p>
            </div>
            <div class="ans hide">
              <div class="ans_main">
                <p class="mark">A</p>
                <p class="content">
                  こたえこたえこたえこたえこたえこたえこたえこたえ
                </p>
              </div>
            </div>
          </div>
          <div id="category2" class="faq_one">
            <div class="qus">
              <p class="mark">Q</p>
              <p class="title">質問内容が入ります。この文章はダミーです。222</p>
            </div>
            <div class="ans hide">
              <div class="ans_main">
                <p class="mark">A</p>
                <p class="content">
                  こたえこたえこたえこたえこたえこたえこたえこたえ
                </p>
              </div>
            </div>
          </div>
          <div id="category3" class="faq_one">
            <div class="qus">
              <p class="mark">Q</p>
              <p class="title">質問内容が入ります。この文章はダミーです。333</p>
            </div>
            <div class="ans hide">
              <div class="ans_main">
                <p class="mark">A</p>
                <p class="content">
                  こたえこたえこたえこたえこたえこたえこたえこたえ
                </p>
              </div>
            </div>
          </div>
          <div id="category4" class="faq_one">
            <div class="qus">
              <p class="mark">Q</p>
              <p class="title">質問内容が入ります。この文章はダミーです。444</p>
            </div>
            <div class="ans hide">
              <div class="ans_main">
                <p class="mark">A</p>
                <p class="content">
                  こたえこたえこたえこたえこたえこたえこたえこたえ
                </p>
              </div>
            </div>
          </div>
          <div id="category5" class="faq_one">
            <div class="qus">
              <p class="mark">Q</p>
              <p class="title">質問内容が入ります。この文章はダミーです。555</p>
            </div>
            <div class="ans hide">
              <div class="ans_main">
                <p class="mark">A</p>
                <p class="content">
                  こたえこたえこたえこたえこたえこたえこたえこたえ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </GeneralLayout>
</template>

<style lang="scss">
@import '@/assets/css/custom/other.scss';
</style>
