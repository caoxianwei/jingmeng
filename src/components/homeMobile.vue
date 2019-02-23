<template>
  <div class="homeMobile">
    <swiper class="bannerBox" :options="swiperOption">
      <swiper-slide class="banner_item" v-for="(item, index) in slides" :key="index"><img :src="item"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="download">
      <img class="l_download" src="./../assets/download/qr.png">
      <div class="r_download">
        <a @click="goIos">
          <img src="./../assets/download/m_ios.png">
        </a>
        <a @click="goAndroid">
          <img src="./../assets/download/m_android.png">
        </a>
      </div>
    </div>
    <div class="notice">
      <div class="l_notice">
        <img src="./../assets/home/board.png">
        <span>最新公告：</span>
      </div>
      <div class="r_notice">
        <MarqueeTips class="marquee" v-bind:speed="10"  content="在线客服7*24小时全程在线，极速帮您解决一切问题。" font="18px sans-serif"></MarqueeTips>
      </div>
    </div>
    <swiper class="bannerBox_2" :options="swiperOption_2">
      <swiper-slide class="banner_item_2" v-for="(item, index) in slides_2" :key="index"><img :src="item"></swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="loadmore">
      <div class="loadtext" @click="downloadpack">
        加&nbsp;载&nbsp;更&nbsp;多&nbsp;...
      </div>
    </div>

  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import MarqueeTips from 'vue-marquee-tips'

  import banner1 from './../assets/home/m_banner1.png'
  import banner2 from './../assets/home/m_banner2.png'
  import banner3 from './../assets/home/m_banner3.png'
  import banner4 from './../assets/home/m_banner4.png'

  import slide_1 from './../assets/home/game_item_1.png'
  import slide_2 from './../assets/home/game_item_2.png'
  import slide_3 from './../assets/home/game_item_3.png'
  import slide_4 from './../assets/home/game_item_4.png'
  import slide_5 from './../assets/home/game_item_5.png'
  import slide_6 from './../assets/home/game_item_6.png'
  import slide_7 from './../assets/home/game_item_7.png'
  import slide_8 from './../assets/home/game_item_8.png'
  import slide_9 from './../assets/home/game_item_9.png'
  import slide_10 from './../assets/home/game_item_10.png'

  export default {
    name: 'homeMobile',
    components: {
      swiper,
      swiperSlide,
      MarqueeTips
    },
    data() {
      return {
        slides: [
          banner1,
          banner2,
          banner3,
          banner4
        ],
        slides_2: [
          slide_1,
          slide_2,
          slide_3,
          slide_4,
          slide_5,
          slide_6,
          slide_7,
          slide_8,
          slide_9,
          slide_10,
        ],
        swiperOption: {
          autoplay: true, // 循环滚动
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            bulletElement: 'li',
            clickable: true
          }
        },
        swiperOption_2: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 2,
          loop: true,
          loopFillGroupWithBlank: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    created () {},
    methods: {
      downloadpack(){
        if(this.$store.state.device === 'iphone') {
          window.location.href = 'https://origin.859fc.com/ios_xinpj_offline/xinpj.html?channel_id=jm_ios_website'
        } else {
          window.location.href = 'https://apk.qsh168.com/Play_black_jm_bdreamjm.apk'
        }
      },
      goIos () {
        window.location.href = 'https://origin.859fc.com/ios_xinpj_offline/xinpj.html?channel_id=jm_ios_website'
      },
      goAndroid () {
        window.location.href = 'https://apk.qsh168.com/Play_black_jm_bdreamjm.apk'
      }

    }
  }
</script>

<style lang='scss' scoped>
  .homeMobile {
    width: 100%;
    max-width: 640px;
    padding: 0;
    margin: 0;
    list-style: none;

  }
  .bannerBox {
    width: 100%;
    padding-top: 65px;
    .banner_item {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  .download {
    width: 95%;
    margin: 5% auto;
    overflow: hidden;
    .l_download {
      width: 43.6%;
      float: left;
    }
    .r_download {
      width: 56.4%;
      float: right;
      img {
        width: 100%;
        display: block;
      }
    }
  }
  .notice {
    width: 95%;
    margin: 5% auto;
    overflow: hidden;
    .l_notice {
      width: 30%;
      float: left;
      img {
        width: 20%;
        float: left;
        display: block;
      }
      span {
        width: 78%;
        float: right;
        color: #db6a1c;
        font-size: 16px;
        font-weight: 500;
        text-align: left;
      }
    }
    .r_notice {
      width: 70%;
      float: right;
    }
  }

  .bannerBox_2 {
    width: 95%;
    margin: 0 auto;
    .banner_item_2 {
      img {
        width: 107%;
      }
    }
  }

  .loadmore {
    width: 95%;
    margin: 5% auto;
    padding-bottom: 120px;
    .loadtext {
      line-height: 40px;
      text-align: center;
      background: #db6a1c;
      color: white;
      font-weight: 500;
    }
  }

  .swiper-button-prev {
    outline:none;
    background-image: url("./../assets/home/btn_prev.png") !important;
  }
  .swiper-button-next {
    outline:none;
    background-image: url("./../assets/home/btn_next.png") !important;
  }

</style>
