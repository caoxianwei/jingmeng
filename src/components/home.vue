<template>
  <div style="padding-bottom: 5%">
    <div class="swipe">
      <div class="w-1200">
        <div class="wapper-sliber">
          <div class="banner_l">
            <!--<img src="./../assets/home/banner1.png"/>-->
            <swiper :options="swiperOption">
              <swiper-slide v-for="(item, index) in slides" :key="index"><img :src="item"></swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
          <div class="download_r">
            <img width="100%" src="./../assets/download/qr.png">
            <a @click="goIos">
              <img src="./../assets/download/ios.png">
            </a>
            <a @click="goAndroid">
              <img src="./../assets/download/android.png">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="product">
      <div class="w-1200">
        <div class="productinfo">
          <img src="./../assets/home/proj_sever.png"/>
        </div>
      </div>
      <div class="notice w-1200">
        <div style="float: left; width: 14%;">
          <img src="./../assets/home/board.png">
          <span>最新公告：</span>
        </div>
        <div style="float: left; width: 86%; padding: 0.5% 0">
          <MarqueeTips class="marquee" v-bind:speed="10"  content="在线客服7*24小时全程在线，极速帮您解决一切问题。" font="18px sans-serif"></MarqueeTips>
        </div>
      </div>
      <div class="game_banner">
        <div class="w-1200" style="overflow: hidden" >
          <swiper :options="swiperOption_2">
            <div class="swiper-button-prev" slot="button-prev"></div>
            <swiper-slide v-for="(item, index) in slides_2" :key="index"><img :src="item"></swiper-slide>
            <div class="swiper-pagination-2" slot="pagination"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </div>
      <div class="loadmore">
        <div class="w-1200">
          <div class="loadtext" @click="downloadpack">
            加&nbsp;载&nbsp;更&nbsp;多&nbsp;...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import MarqueeTips from 'vue-marquee-tips'
  import banner1 from './../assets/home/banner1.png'
  import banner2 from './../assets/home/banner2.png'
  import banner3 from './../assets/home/banner3.png'
  import banner4 from './../assets/home/banner4.png'
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
    name: 'swipe',
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
          autoplay: true, // 循环滚动
          loop: true,
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          pagination: {
            el: '.swiper-pagination-2',
            type: 'bullets',
            bulletElement: 'li',
            clickable: true
          },

          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: true
          },
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

<style  lang='scss' scoped>
  .swipe {
    width: 100%;
    height: 900px;
    position: relative;
    background: url('./../assets/home/swiper.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    .wapper-sliber{
      position: absolute;
      margin-top: 500px;
      width: 1200px;
      height: 352px;
      .banner_l{
        float: left;
        width: 934px;
      }
      .download_r{
        float: left;
        width: 266px;
        height: 100%;
      }
    }
  }
  .download_r img {
    display: block;
  }
  .product{
    width: 100%;
    height: 980px;
    background: #fff;
    .productinfo{
      padding: 30px 0;
    }
  }
  .notice{
    text-align: left;
    overflow: hidden;
  }
  .notice img {
    width: 15%;
  }
  .notice span {
    font-size: 24px;
    color: #db6a1c;
  }
  .loadtext{
    font-size: 24px;
    font-weight: 400;
    cursor: pointer;
    color: #f1f1f1;
    height: 60px;
    line-height: 60px;
    background: #de6b1a;
  }
  .game_banner{
    margin: 3% auto;
    .swiper-slide {
      width: 340px;
      height: 508px;
      background: #ff9800;
      border: 3px solid #ff9800;
    }
  }
  .swiper-pagination-2 {
    margin: 2% auto;
  }
  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    opacity: 0.6;
  }
  .swiper-pagination-bullet-active {
    background: #ff9800;
    opacity: 1;
  }
  .swiper-button-prev {
    background-image: url("./../assets/home/btn_prev.png");
  }
  .swiper-button-next {
    background-image: url("./../assets/home/btn_next.png");
  }

</style>
