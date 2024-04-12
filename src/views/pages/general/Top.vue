<script setup>
import GeneralLayout from '@/views/layouts/GeneralLayout.vue'
import SectionTitle from '@/components/atoms/titles/SectionTitle.vue'
import RegisterSection from '@/components/organisms/RegisterSection.vue'
</script>

<script>
import 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js'
import '@/assets/js/slide.js'
$(document).ready(function () {
  var $CurrentNumber = $('.pagingInfo .current_number')
  var $TotalNnumber = $('.pagingInfo .total_number')
  var $slickElement = $('.top_slider')

  $slickElement.on(
    'init reInit afterChange',
    function (event, slick, currentSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1
      $CurrentNumber.text('0' + i)
      $TotalNnumber.text('0' + slick.slideCount)
    }
  )
})
</script>

<template>
  <div class="top_bg">
    <img src="/images/top/top_bg_path1.png" class="Top_bg_path1" alt="" />
    <img src="/images/top/top_bg_path2.png" class="Top_bg_path2" alt="" />
    <img src="/images/top/top_bg_path3.png" class="Top_bg_path3" alt="" />
    <img src="/images/top/top_bg_path4.png" class="Top_bg_path4" alt="" />
    <img src="/images/top/top_bg_path5.png" class="Top_bg_path5" alt="" />
    <img src="/images/general/bg_dot7.png" class="Top_bg_dot1" alt="" />
    <img src="/images/general/bg_dot5.png" class="Top_bg_dot2" alt="" />
    <img src="/images/general/bg_dot7.png" class="Top_bg_dot3" alt="" />
    <img src="/images/general/bg_dot5.png" class="Top_bg_dot4" alt="" />
  </div>
  <GeneralLayout>
    <div class="top_page">
      <div class="top_slide">
        <p>
          あなたの”いいね”を<br />
          世界に一冊だけの<span>grabook</span>にして<br />
          現実世界に持ち出そう<br />
        </p>
        <div class="slider_part">
          <img src="/images/top/top_slide_bg.png" class="top_slide_bg" alt="" />
          <div class="top_slider">
            <div class="slide">
              <img src="/images/top/top_slide1.png" alt="" />
            </div>
            <div class="slide">
              <img src="/images/top/top_slide2.png" alt="" />
            </div>
            <div class="slide">
              <img src="/images/top/top_slide1.png" alt="" />
            </div>
            <div class="slide">
              <img src="/images/top/top_slide2.png" alt="" />
            </div>
            <div class="slide">
              <img src="/images/top/top_slide1.png" alt="" />
            </div>
          </div>
          <button class="prev-btn">
            <svg
              id="left-circle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 37.633 60.321"
            >
              <g id="bx-chevron-left-circle">
                <path
                  id="Path_136"
                  data-name="Path 136"
                  d="M55.448,20.977,25.287,51.138,55.448,81.3l7.472-7.472L40.232,51.138,62.92,28.449Z"
                  transform="translate(-25.287 -20.977)"
                />
              </g>
            </svg>
          </button>
          <button class="next-btn">
            <svg
              id="right-circle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 37.633 60.321"
            >
              <g id="bx-chevron-right-circle">
                <path
                  id="Path_134"
                  data-name="Path 134"
                  d="M30.977,28.449,53.665,51.138,30.977,73.826,38.449,81.3,68.61,51.138,38.449,20.977Z"
                  transform="translate(-30.977 -20.977)"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>

      <section class="new_services">
        <div class="pagingInfo">
          <p class="current_number">01</p>
          <p class="total_number">05</p>
        </div>
        <!-- <img src="/images/general/curve_bg.png" alt="" class="curve_bg" /> -->
        <img src="/images/general/curve_bg_main.png" alt="" class="curve_bg" />
        <SectionTitle>NEW SERVICES</SectionTitle>
        <div class="main main_container">
          <div class="bg_img">
            <img
              src="/images/top/new_services_1.png"
              class="New_services_1"
              alt=""
            />
            <img
              src="/images/top/new_services_2.png"
              class="New_services_2"
              alt=""
            />
            <img
              src="/images/top/new_services_3.png"
              class="New_services_3"
              alt=""
            />
            <img
              src="/images/top/new_services_4.png"
              class="New_services_4"
              alt=""
            />
            <img
              src="/images/top/new_services_5.png"
              class="New_services_5"
              alt=""
            />
            <img
              src="/images/top/new_services_6.png"
              class="New_services_6"
              alt=""
            />
            <img
              src="/images/top/new_services_7.png"
              class="New_services_7"
              alt=""
            />
            <img
              src="/images/top/new_services_8.png"
              class="New_services_8"
              alt=""
            />
          </div>
          <div class="Logo_other2">
            <img src="/images/common/logo_other2.svg" alt="" />
          </div>
          <p class="title_txt">全く新しくSNSを楽しむ</p>
          <p class="main_txt">
            これからは一人ひとりがアーティスト！<br />
            気軽に、手軽にSNSデータを使って出版を楽しもう。
          </p>
          <button class="arrow_btn gradient">
            <a href="#"><p>grabookって？</p></a>
          </button>
        </div>
      </section>

      <section class="new_users">
        <SectionTitle class="main">新着ユーザー</SectionTitle>
        <div class="slider_part main_container">
          <div class="main_container1">
            <div class="new_users_slide">
              <div class="slide new">
                <img src="/images/top/new_user.png" alt="" />
                <div class="content">
                  <div class="title_favorite">
                    <p>モデルテストっ子</p>
                    <button class="active">
                      <svg
                        id="Icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="23.219"
                        height="20.251"
                        viewBox="0 0 23.219 20.251"
                      >
                        <path
                          id="Path"
                          d="M22.719,4.289a6.11,6.11,0,0,0-8.643,0L12.9,5.466,11.722,4.289A6.111,6.111,0,0,0,3.08,12.93l1.178,1.177L12.9,22.75l8.641-8.643,1.178-1.177A6.108,6.108,0,0,0,22.719,4.289Z"
                          transform="translate(-1.29 -2.499)"
                        />
                      </svg>
                    </button>
                  </div>
                  <p class="txt">
                    ファッションのことならお任せ♡タイプ別参考コーデをcheck！
                  </p>
                  <div class="cat_more">
                    <div class="cat_list">
                      <p>ジャンル名</p>
                      <p>ジャンル名</p>
                    </div>
                    <button>
                      <img src="/images/common/slide_more.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div class="slide new">
                <img src="/images/top/new_user.png" alt="" />
                <div class="content">
                  <div class="title_favorite">
                    <p>モデルテストっ子</p>
                    <button>
                      <svg
                        id="Icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="23.219"
                        height="20.251"
                        viewBox="0 0 23.219 20.251"
                      >
                        <path
                          id="Path"
                          d="M22.719,4.289a6.11,6.11,0,0,0-8.643,0L12.9,5.466,11.722,4.289A6.111,6.111,0,0,0,3.08,12.93l1.178,1.177L12.9,22.75l8.641-8.643,1.178-1.177A6.108,6.108,0,0,0,22.719,4.289Z"
                          transform="translate(-1.29 -2.499)"
                        />
                      </svg>
                    </button>
                  </div>
                  <p class="txt">
                    ファッションのことならお任せ♡タイプ別参考コーデをcheck！
                  </p>
                  <div class="cat_more">
                    <div class="cat_list">
                      <p>ジャンル名</p>
                      <p>ジャンル名</p>
                    </div>
                    <button>
                      <img src="/images/common/slide_more.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div class="slide new">
                <img src="/images/top/new_user.png" alt="" />
                <div class="content">
                  <div class="title_favorite">
                    <p>モデルテストっ子</p>
                    <button class="active">
                      <svg
                        id="Icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="23.219"
                        height="20.251"
                        viewBox="0 0 23.219 20.251"
                      >
                        <path
                          id="Path"
                          d="M22.719,4.289a6.11,6.11,0,0,0-8.643,0L12.9,5.466,11.722,4.289A6.111,6.111,0,0,0,3.08,12.93l1.178,1.177L12.9,22.75l8.641-8.643,1.178-1.177A6.108,6.108,0,0,0,22.719,4.289Z"
                          transform="translate(-1.29 -2.499)"
                        />
                      </svg>
                    </button>
                  </div>
                  <p class="txt">
                    ファッションのことならお任せ♡タイプ別参考コーデをcheck！
                  </p>
                  <div class="cat_more">
                    <div class="cat_list">
                      <p>ジャンル名</p>
                      <p>ジャンル名</p>
                    </div>
                    <button>
                      <img src="/images/common/slide_more.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div class="slide new">
                <img src="/images/top/new_user.png" alt="" />
                <div class="content">
                  <div class="title_favorite">
                    <p>モデルテストっ子</p>
                    <button>
                      <svg
                        id="Icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="23.219"
                        height="20.251"
                        viewBox="0 0 23.219 20.251"
                      >
                        <path
                          id="Path"
                          d="M22.719,4.289a6.11,6.11,0,0,0-8.643,0L12.9,5.466,11.722,4.289A6.111,6.111,0,0,0,3.08,12.93l1.178,1.177L12.9,22.75l8.641-8.643,1.178-1.177A6.108,6.108,0,0,0,22.719,4.289Z"
                          transform="translate(-1.29 -2.499)"
                        />
                      </svg>
                    </button>
                  </div>
                  <p class="txt">
                    ファッションのことならお任せ♡タイプ別参考コーデをcheck！
                  </p>
                  <div class="cat_more">
                    <div class="cat_list">
                      <p>ジャンル名</p>
                      <p>ジャンル名</p>
                    </div>
                    <button>
                      <img src="/images/common/slide_more.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="prev-btn">
            <svg
              id="left-circle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 37.633 60.321"
            >
              <g id="bx-chevron-left-circle">
                <path
                  id="Path_136"
                  data-name="Path 136"
                  d="M55.448,20.977,25.287,51.138,55.448,81.3l7.472-7.472L40.232,51.138,62.92,28.449Z"
                  transform="translate(-25.287 -20.977)"
                />
              </g>
            </svg>
          </button>
          <button class="next-btn">
            <svg
              id="right-circle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 37.633 60.321"
            >
              <g id="bx-chevron-right-circle">
                <path
                  id="Path_134"
                  data-name="Path 134"
                  d="M30.977,28.449,53.665,51.138,30.977,73.826,38.449,81.3,68.61,51.138,38.449,20.977Z"
                  transform="translate(-30.977 -20.977)"
                />
              </g>
            </svg>
          </button>
        </div>
        <button class="more_btn">
          <a href="#">
            <p>もっと見る</p>
          </a>
        </button>
      </section>

      <section class="new_grabooks">
        <SectionTitle class="main">新着<span>grabook</span></SectionTitle>
        <div class="slider_part main_container">
          <div class="main_slider main_container1">
            <div class="new_grabooks_slide">
              <div class="slide new">
                <div class="image">
                  <img src="/images/top/new_grabook.png" alt="" />
                </div>
                <div class="content">
                  <p class="txt">
                    話題の秋トレンドコーデはコレ使いまわし最強アイテム10選♡
                  </p>
                  <p class="price">800<span>円</span></p>
                  <button>
                    <p>購入する</p>
                  </button>
                </div>
              </div>
              <div class="slide new">
                <div class="image">
                  <img src="/images/top/new_grabook.png" alt="" />
                </div>
                <div class="content">
                  <p class="txt">
                    話題の秋トレンドコーデはコレ使いまわし最強アイテム10選♡
                  </p>
                  <p class="price">800<span>円</span></p>
                  <button>
                    <p>購入する</p>
                  </button>
                </div>
              </div>
              <div class="slide new">
                <div class="image">
                  <img src="/images/top/new_grabook.png" alt="" />
                </div>
                <div class="content">
                  <p class="txt">
                    話題の秋トレンドコーデはコレ使いまわし最強アイテム10選♡
                  </p>
                  <p class="price">800<span>円</span></p>
                  <button>
                    <p>購入する</p>
                  </button>
                </div>
              </div>
              <div class="slide new">
                <div class="image">
                  <img src="/images/top/new_grabook.png" alt="" />
                </div>
                <div class="content">
                  <p class="txt">
                    話題の秋トレンドコーデはコレ使いまわし最強アイテム10選♡
                  </p>
                  <p class="price">800<span>円</span></p>
                  <button>
                    <p>購入する</p>
                  </button>
                </div>
              </div>
              <div class="slide new">
                <div class="image">
                  <img src="/images/top/new_grabook.png" alt="" />
                </div>
                <div class="content">
                  <p class="txt">
                    話題の秋トレンドコーデはコレ使いまわし最強アイテム10選♡
                  </p>
                  <p class="price">800<span>円</span></p>
                  <button>
                    <p>購入する</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button class="prev-btn">
            <svg
              id="left-circle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 37.633 60.321"
            >
              <g id="bx-chevron-left-circle">
                <path
                  id="Path_136"
                  data-name="Path 136"
                  d="M55.448,20.977,25.287,51.138,55.448,81.3l7.472-7.472L40.232,51.138,62.92,28.449Z"
                  transform="translate(-25.287 -20.977)"
                />
              </g>
            </svg>
          </button>
          <button class="next-btn">
            <svg
              id="right-circle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 37.633 60.321"
            >
              <g id="bx-chevron-right-circle">
                <path
                  id="Path_134"
                  data-name="Path 134"
                  d="M30.977,28.449,53.665,51.138,30.977,73.826,38.449,81.3,68.61,51.138,38.449,20.977Z"
                  transform="translate(-30.977 -20.977)"
                />
              </g>
            </svg>
          </button>
        </div>
        <button class="more_btn">
          <a href="#">
            <p>もっと見る</p>
          </a>
        </button>
      </section>

      <RegisterSection></RegisterSection>

      <section class="category_part">
        <!-- <img src="/images/general/curve_bg.png" alt="" class="curve_bg" /> -->
        <img src="/images/general/curve_bg_main.png" alt="" class="curve_bg" />
        <SectionTitle class="main">カテゴリ</SectionTitle>
        <div class="main_container1">
          <div class="category_list">
            <div class="one">
              <a href="#">
                <img src="/images/top/top_category1.png" alt="" />
                <p>ファッション</p>
              </a>
            </div>
            <div class="one">
              <a href="#">
                <img src="/images/top/top_category2.png" alt="" />
                <p>旅行</p>
              </a>
            </div>
            <div class="one">
              <a href="#">
                <img src="/images/top/top_category3.png" alt="" />
                <p>景色</p>
              </a>
            </div>
            <div class="one">
              <a href="#">
                <img src="/images/top/top_category4.png" alt="" />
                <p>ジャンル</p>
              </a>
            </div>
            <div class="one">
              <a href="#">
                <img src="/images/top/top_category5.png" alt="" />
                <p>ジャンル</p>
              </a>
            </div>
            <div class="one">
              <a href="#">
                <img src="/images/top/top_category1.png" alt="" />
                <p>ファッション</p>
              </a>
            </div>
            <div class="one">
              <a href="#">
                <img src="/images/top/top_category2.png" alt="" />
                <p>旅行</p>
              </a>
            </div>
            <div class="one">
              <a href="#">
                <img src="/images/top/top_category3.png" alt="" />
                <p>景色</p>
              </a>
            </div>
            <div class="one">
              <a href="#">
                <img src="/images/top/top_category4.png" alt="" />
                <p>ジャンル</p>
              </a>
            </div>
            <div class="one">
              <a href="#">
                <img src="/images/top/top_category5.png" alt="" />
                <p>ジャンル</p>
              </a>
            </div>
          </div>
        </div>
        <button class="more_btn">
          <a href="#">
            <p>全てのカテゴリ</p>
          </a>
        </button>
      </section>

      <section class="cat_grabooks1">
        <SectionTitle class="main">ジャンルA</SectionTitle>
        <div class="slider_part main_container">
          <div class="main_slider main_container1">
            <div class="cat_grabooks_slide1">
              <div class="slide">
                <div class="image">
                  <img src="/images/top/new_grabook.png" alt="" />
                </div>
                <div class="content">
                  <p class="txt">
                    話題の秋トレンドコーデはコレ使いまわし最強アイテム10選♡
                  </p>
                  <p class="price">800<span>円</span></p>
                  <button>
                    <p>購入する</p>
                  </button>
                </div>
              </div>
              <div class="slide">
                <div class="image">
                  <img src="/images/top/new_grabook.png" alt="" />
                </div>
                <div class="content">
                  <p class="txt">
                    話題の秋トレンドコーデはコレ使いまわし最強アイテム10選♡
                  </p>
                  <p class="price">800<span>円</span></p>
                  <button>
                    <p>購入する</p>
                  </button>
                </div>
              </div>
              <div class="slide">
                <div class="image">
                  <img src="/images/top/new_grabook.png" alt="" />
                </div>
                <div class="content">
                  <p class="txt">
                    話題の秋トレンドコーデはコレ使いまわし最強アイテム10選♡
                  </p>
                  <p class="price">800<span>円</span></p>
                  <button>
                    <p>購入する</p>
                  </button>
                </div>
              </div>
              <div class="slide">
                <div class="image">
                  <img src="/images/top/new_grabook.png" alt="" />
                </div>
                <div class="content">
                  <p class="txt">
                    話題の秋トレンドコーデはコレ使いまわし最強アイテム10選♡
                  </p>
                  <p class="price">800<span>円</span></p>
                  <button>
                    <p>購入する</p>
                  </button>
                </div>
              </div>
              <div class="slide">
                <div class="image">
                  <img src="/images/top/new_grabook.png" alt="" />
                </div>
                <div class="content">
                  <p class="txt">
                    話題の秋トレンドコーデはコレ使いまわし最強アイテム10選♡
                  </p>
                  <p class="price">800<span>円</span></p>
                  <button>
                    <p>購入する</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button class="prev-btn">
            <svg
              id="left-circle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 37.633 60.321"
            >
              <g id="bx-chevron-left-circle">
                <path
                  id="Path_136"
                  data-name="Path 136"
                  d="M55.448,20.977,25.287,51.138,55.448,81.3l7.472-7.472L40.232,51.138,62.92,28.449Z"
                  transform="translate(-25.287 -20.977)"
                />
              </g>
            </svg>
          </button>
          <button class="next-btn">
            <svg
              id="right-circle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 37.633 60.321"
            >
              <g id="bx-chevron-right-circle">
                <path
                  id="Path_134"
                  data-name="Path 134"
                  d="M30.977,28.449,53.665,51.138,30.977,73.826,38.449,81.3,68.61,51.138,38.449,20.977Z"
                  transform="translate(-30.977 -20.977)"
                />
              </g>
            </svg>
          </button>
        </div>
        <button class="more_btn">
          <a href="#">
            <p>もっと見る</p>
          </a>
        </button>
      </section>

      <section class="cat_grabooks2">
        <SectionTitle class="main">ジャンルB</SectionTitle>
        <div class="slider_part main_container">
          <div class="main_slider main_container1">
            <div class="cat_grabooks_slide2">
              <div class="slide">
                <div class="image">
                  <img src="/images/top/new_grabook.png" alt="" />
                </div>
                <div class="content">
                  <p class="txt">
                    話題の秋トレンドコーデはコレ使いまわし最強アイテム10選♡
                  </p>
                  <p class="price">800<span>円</span></p>
                  <button>
                    <p>購入する</p>
                  </button>
                </div>
              </div>
              <div class="slide">
                <div class="image">
                  <img src="/images/top/new_grabook.png" alt="" />
                </div>
                <div class="content">
                  <p class="txt">
                    話題の秋トレンドコーデはコレ使いまわし最強アイテム10選♡
                  </p>
                  <p class="price">800<span>円</span></p>
                  <button>
                    <p>購入する</p>
                  </button>
                </div>
              </div>
              <div class="slide">
                <div class="image">
                  <img src="/images/top/new_grabook.png" alt="" />
                </div>
                <div class="content">
                  <p class="txt">
                    話題の秋トレンドコーデはコレ使いまわし最強アイテム10選♡
                  </p>
                  <p class="price">800<span>円</span></p>
                  <button>
                    <p>購入する</p>
                  </button>
                </div>
              </div>
              <div class="slide">
                <div class="image">
                  <img src="/images/top/new_grabook.png" alt="" />
                </div>
                <div class="content">
                  <p class="txt">
                    話題の秋トレンドコーデはコレ使いまわし最強アイテム10選♡
                  </p>
                  <p class="price">800<span>円</span></p>
                  <button>
                    <p>購入する</p>
                  </button>
                </div>
              </div>
              <div class="slide">
                <div class="image">
                  <img src="/images/top/new_grabook.png" alt="" />
                </div>
                <div class="content">
                  <p class="txt">
                    話題の秋トレンドコーデはコレ使いまわし最強アイテム10選♡
                  </p>
                  <p class="price">800<span>円</span></p>
                  <button>
                    <p>購入する</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button class="prev-btn">
            <svg
              id="left-circle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 37.633 60.321"
            >
              <g id="bx-chevron-left-circle">
                <path
                  id="Path_136"
                  data-name="Path 136"
                  d="M55.448,20.977,25.287,51.138,55.448,81.3l7.472-7.472L40.232,51.138,62.92,28.449Z"
                  transform="translate(-25.287 -20.977)"
                />
              </g>
            </svg>
          </button>
          <button class="next-btn">
            <svg
              id="right-circle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 37.633 60.321"
            >
              <g id="bx-chevron-right-circle">
                <path
                  id="Path_134"
                  data-name="Path 134"
                  d="M30.977,28.449,53.665,51.138,30.977,73.826,38.449,81.3,68.61,51.138,38.449,20.977Z"
                  transform="translate(-30.977 -20.977)"
                />
              </g>
            </svg>
          </button>
        </div>
        <button class="more_btn">
          <a href="#">
            <p>もっと見る</p>
          </a>
        </button>
      </section>

      <section class="cat_grabooks3">
        <SectionTitle class="main">ジャンルC</SectionTitle>
        <div class="slider_part main_container">
          <div class="main_slider main_container1">
            <div class="cat_grabooks_slide3">
              <div class="slide">
                <div class="image">
                  <img src="/images/top/new_grabook.png" alt="" />
                </div>
                <div class="content">
                  <p class="txt">
                    話題の秋トレンドコーデはコレ使いまわし最強アイテム10選♡
                  </p>
                  <p class="price">800<span>円</span></p>
                  <button>
                    <p>購入する</p>
                  </button>
                </div>
              </div>
              <div class="slide">
                <div class="image">
                  <img src="/images/top/new_grabook.png" alt="" />
                </div>
                <div class="content">
                  <p class="txt">
                    話題の秋トレンドコーデはコレ使いまわし最強アイテム10選♡
                  </p>
                  <p class="price">800<span>円</span></p>
                  <button>
                    <p>購入する</p>
                  </button>
                </div>
              </div>
              <div class="slide">
                <div class="image">
                  <img src="/images/top/new_grabook.png" alt="" />
                </div>
                <div class="content">
                  <p class="txt">
                    話題の秋トレンドコーデはコレ使いまわし最強アイテム10選♡
                  </p>
                  <p class="price">800<span>円</span></p>
                  <button>
                    <p>購入する</p>
                  </button>
                </div>
              </div>
              <div class="slide">
                <div class="image">
                  <img src="/images/top/new_grabook.png" alt="" />
                </div>
                <div class="content">
                  <p class="txt">
                    話題の秋トレンドコーデはコレ使いまわし最強アイテム10選♡
                  </p>
                  <p class="price">800<span>円</span></p>
                  <button>
                    <p>購入する</p>
                  </button>
                </div>
              </div>
              <div class="slide">
                <div class="image">
                  <img src="/images/top/new_grabook.png" alt="" />
                </div>
                <div class="content">
                  <p class="txt">
                    話題の秋トレンドコーデはコレ使いまわし最強アイテム10選♡
                  </p>
                  <p class="price">800<span>円</span></p>
                  <button>
                    <p>購入する</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button class="prev-btn">
            <svg
              id="left-circle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 37.633 60.321"
            >
              <g id="bx-chevron-left-circle">
                <path
                  id="Path_136"
                  data-name="Path 136"
                  d="M55.448,20.977,25.287,51.138,55.448,81.3l7.472-7.472L40.232,51.138,62.92,28.449Z"
                  transform="translate(-25.287 -20.977)"
                />
              </g>
            </svg>
          </button>
          <button class="next-btn">
            <svg
              id="right-circle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 37.633 60.321"
            >
              <g id="bx-chevron-right-circle">
                <path
                  id="Path_134"
                  data-name="Path 134"
                  d="M30.977,28.449,53.665,51.138,30.977,73.826,38.449,81.3,68.61,51.138,38.449,20.977Z"
                  transform="translate(-30.977 -20.977)"
                />
              </g>
            </svg>
          </button>
        </div>
        <button class="more_btn">
          <a href="#">
            <p>もっと見る</p>
          </a>
        </button>
      </section>

      <section class="news_part">
        <img src="/images/general/curve_bg_red.png" alt="" class="curve_bg" />
        <SectionTitle class="main">NEWS</SectionTitle>
        <div class="new_lists main_container1">
          <div class="one">
            <a href="">
              <img src="/images/top/news_one.png" alt="" />
              <div class="content">
                <p class="title">
                  タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                </p>
                <p class="date">2022.12.28</p>
              </div>
            </a>
          </div>
          <div class="one">
            <a href="">
              <img src="/images/top/news_one.png" alt="" />
              <div class="content">
                <p class="title">
                  タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                </p>
                <p class="date">2022.12.28</p>
              </div>
            </a>
          </div>
          <div class="one">
            <a href="">
              <img src="/images/top/news_one.png" alt="" />
              <div class="content">
                <p class="title">
                  タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                </p>
                <p class="date">2022.12.28</p>
              </div>
            </a>
          </div>
          <div class="one">
            <a href="">
              <img src="/images/top/news_one.png" alt="" />
              <div class="content">
                <p class="title">
                  タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                </p>
                <p class="date">2022.12.28</p>
              </div>
            </a>
          </div>
          <div class="one">
            <a href="">
              <img src="/images/top/news_one.png" alt="" />
              <div class="content">
                <p class="title">
                  タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                </p>
                <p class="date">2022.12.28</p>
              </div>
            </a>
          </div>
          <div class="one">
            <a href="">
              <img src="/images/top/news_one.png" alt="" />
              <div class="content">
                <p class="title">
                  タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                </p>
                <p class="date">2022.12.28</p>
              </div>
            </a>
          </div>
        </div>
        <button class="more_btn">
          <a href="#">
            <p>もっと見る</p>
          </a>
        </button>
      </section>
    </div>
  </GeneralLayout>
</template>

<style lang="scss">
@import '@/assets/css/custom/_top.scss';
@import 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.9/slick-theme.min.css';
</style>
