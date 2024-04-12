<template>
  <section class="register_part">
    <div class="register_slider">
      <div class="slide">
        <img src="/images/top/register_slide1.png" alt="" />
      </div>
      <div class="slide">
        <img src="/images/top/register_slide2.png" alt="" />
      </div>
      <div class="slide">
        <img src="/images/top/register_slide3.png" alt="" />
      </div>
      <div class="slide">
        <img src="/images/top/register_slide4.png" alt="" />
      </div>
      <div class="slide">
        <img src="/images/top/register_slide5.png" alt="" />
      </div>
      <div class="slide">
        <img src="/images/top/register_slide6.png" alt="" />
      </div>
    </div>
    <div class="register_main main_container1">
      <div class="phone">
        <img src="/images/top/phone.png" alt="" />
      </div>
      <div class="main">
        <div class="main_img">
          <img src="/images/top/register_main.png" alt="" />
        </div>
        <div class="content">
          <h5>
            誰でも自由に<br />
            自分のアートを”紙媒体”にシェア
          </h5>
          <p class="txt">instagramのデータが、一生残る。手元に残る。</p>
          <button class="arrow_btn red">
            <a href="#">
              <p>アーティスト会員登録</p>
            </a>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.register_part {
  background: #703ee2;
  padding: 75px 0 300px;
  .register_slider {
    .slick-list {
      margin: 0 -5px;
      .slide {
        margin: 0 5px;
        img {
          opacity: 0.6;
        }
      }
    }
  }
  .register_main {
    position: absolute;
    top: 140px;
    left: 0;
    right: 0;
    .main {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .main_img {
        position: relative;
        img {
          width: max-content;
          position: relative;
          z-index: 1;
        }
        &::before {
          content: '';
          width: 898px;
          height: 75px;
          background: url('/images/top/register_main_bg.svg');
          position: absolute;
          left: -175px;
          bottom: -35px;
        }
      }
      .content {
        h5 {
          font-family: 'Noto Sans CJK JP';
          font-weight: 900;
          font-size: 36px;
          letter-spacing: 0.1em;
          line-height: 53px;
          color: #fff;
          text-shadow: 0px 3px 6px #45392f;
        }
        p.txt {
          font-family: 'Noto Sans CJK JP';
          font-weight: 500;
          font-size: 24px;
          letter-spacing: 0.1em;
          color: #fff;
          text-shadow: 0px 3px 6px #45392f;
          margin-top: 15px;
          margin-bottom: 45px;
        }
      }
    }
    .phone {
      position: absolute;
      top: 145px;
      left: 375px;
      z-index: 11;
      img {
        position: relative;
        max-width: max-content;
        z-index: 1;
      }
      &::before {
        content: '';
        width: 276px;
        height: 75px;
        background: url('/images/common/phone_bg.svg');
        position: absolute;
        left: -55px;
        bottom: -35px;
      }
    }
  }
}
</style>
