<script setup>
import GeneralLayout from '@/views/layouts/GeneralLayout.vue'
// import SectionTitle from '@/components/atoms/titles/SectionTitle.vue'
import OtherSectionTitle from '@/components/atoms/titles/OtherSectionTitle.vue'
import RegisterSection from '@/components/organisms/RegisterSection.vue'
</script>

<script>
import 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js'
import '@/assets/js/slide.js'
</script>

<template>
  <div class="about_bg">
    <img src="/images/about/about_bg_path1.png" class="about_bg_path1" alt="" />
    <img src="/images/about/about_bg_path2.png" class="about_bg_path2" alt="" />
    <img src="/images/about/about_bg_path4.png" class="about_bg_path4" alt="" />
    <img src="/images/about/about_bg_path3.png" class="about_bg_path3" alt="" />
    <img src="/images/about/about_bg_path5.png" class="about_bg_path5" alt="" />
    <img src="/images/general/bg_dot5.png" class="about_bg_dot1" alt="" />
    <img src="/images/general/bg_dot5.png" class="about_bg_dot2" alt="" />
    <img src="/images/general/bg_dot5_big.png" class="about_bg_dot3" alt="" />
  </div>
  <GeneralLayout>
    <div class="about_page">
      <section class="definition_part">
        <div class="main_container1">
          <div class="content">
            <p class="txt1">Instagramのつながりから溢れ出す</p>
            <p class="txt2">新しい時代のマネタイズを</p>
            <p class="txt3">すべてのひとへ</p>
            <p class="txt4">
              これからは一人ひとりがアーティスト！<br />
              grabookとは、日々投稿していた自分のコンテンツを集約して、<br />
              気軽にSNSデータを使って、出版が楽しめるウェブサービスです。
            </p>
            <p class="txt4">
              デジタルコンテンツと、身近な本（book）を融合して、<br />
              今まで一歩踏み出せなかった、新しい自分を展開してみる。<br />
              そしてそこから、誰もが夢を手に入れる(grab)サポートをさせて頂く。
            </p>
            <p class="txt5">それが、”<span>grabook</span>”の存在理由です。</p>
          </div>
          <div class="img">
            <img src="/images/about/phone.png" alt="" />
          </div>
        </div>
      </section>

      <section class="feature_part">
        <img
          src="/images/general/curve_bg_orange.png"
          alt=""
          class="curve_bg"
        />
        <img src="/images/about/feature_bg.png" alt="" />
        <OtherSectionTitle class="main other">
          <template #japanese>の特徴</template>
          <template #english>FEATURE</template>
        </OtherSectionTitle>
        <div class="content">
          <p class="txt1">
            grabookは、どのユーザーでも、フォローしているユーザーや、<br />
            お気に入りのユーザーの本が、自分で作成可能です！<br />
            また、自分のコンテンツを売ることもできるので、<br />
            したい方向性に合わせて、<br />
            いろんなコンテンツを展開することができます。<br />
            レシピ本に、風景集に、写真集に、アートブックに・・・など、<br />
            幅広い用途で”本”にできるので、
          </p>
          <p class="txt2">是非一度お試し下さい！</p>
        </div>
      </section>

      <RegisterSection></RegisterSection>

      <section class="three_point_part">
        <img src="/images/general/curve_bg_gray.png" alt="" class="curve_bg" />
        <OtherSectionTitle class="main other">
          <template #japanese>３つのポイント</template>
          <template #english>THREE POINT</template>
        </OtherSectionTitle>
        <div class="main_container1">
          <div class="one">
            <img src="/images/about/three_points1.png" alt="" />
            <div class="content">
              <p class="txt1">既存のコンテンツを活用</p>
              <p class="txt2">
                instagramの投稿を利用して、オリジナルbookを作成できます。<br />
                これまで、埋もれるばかりだったコンテンツが、いつまでも手元に残る、あなただけの１冊になります。
              </p>
            </div>
          </div>
          <div class="one">
            <img src="/images/about/three_points2.png" alt="" />
            <div class="content">
              <p class="txt1">レイアウトをお手軽作成</p>
              <p class="txt2">
                本を出版する時に悩むのが、レイアウト。<br />
                そのレイアウトを自動で出力するので、お手軽に本が作成可能です。<br />
                気に入った投稿だけをピックアップして、本にすることもできます！
              </p>
            </div>
          </div>
          <div class="one">
            <img src="/images/about/three_points3.png" alt="" />
            <div class="content">
              <p class="txt1">自動で手元に届きます</p>
              <p class="txt2">
                面倒な印刷の手間は全て、grabookがシステム化しています。<br />
                grabookを作成して、購入したら、後は届くのを待つだけ。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="price_part">
        <OtherSectionTitle class="main other">
          <template #japanese>利用料金</template>
          <template #english>PRICE</template>
        </OtherSectionTitle>
        <div class="main_container1">
          <div class="one member">
            <p class="txt1">有料会員</p>
            <p class="txt2">月間</p>
            <p class="txt3">300<span>円</span></p>
            <p class="txt4">
              更に、grabook販売による<br />
              手数料収益が手に入ります
            </p>
            <button>
              <a href="#">早速登録</a>
            </button>
          </div>
          <div class="one grabook">
            <p class="txt1"><span>grabook</span>作成</p>
            <p class="txt2">1部</p>
            <p class="txt3">2000<span>円〜</span></p>
            <p class="txt4">
              grabookに登録しているユーザーなら、<br />
              誰でもgrabookが作成可能
            </p>
            <button>
              <a href="#">無料で始める</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  </GeneralLayout>
</template>

<style lang="scss">
@import 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.9/slick-theme.min.css';
@import '@/assets/css/custom/about.scss';
header {
  position: fixed;
}
</style>
