<template>
  <div class="content">
    <div class='downloadbox'>
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
      <img width="95%" style="margin: 5% auto" src="./../assets/download/m_banner.png" >
    </div>
  </div>

</template>

<script>
  export default {
    name: 'contactMobile',
    data() {
      return {}
    },
    methods: {
      goIos() {
        window.location.href = 'https://origin.859fc.com/ios_xinpj_offline/xinpj.html?channel_id=jm_ios_website'
      },
      goAndroid() {
        window.location.href = 'https://apk.qsh168.com/Play_black_jm_bdreamjm.apk'
      }
    }
  }
</script>

<style lang='scss' scoped>
  .content {
    width: 100%;
    padding-top: 10%;
    padding-bottom: 30%;
    background: #335013;
  }
  .downloadbox {
    width: 100%;
    background-image: url("./../assets/download/bg_m_download.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 80% 0 0 0;
  }
  .download {
    width: 95%;
    margin: 0 auto;
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

</style>
