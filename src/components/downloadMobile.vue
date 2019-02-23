<template>
  <div class='content'>
    <div class="downloadBox">
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
      <img class="slogan" src="./../assets/download/b_title.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'downloadMobile',
    data () {
      return {
      }
    },
    methods: {
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
  .content {
    width: 100%;
    height: 100%;
    padding-top: 15%;
    padding-bottom: 25%;
    background: #335013;
  }
  .downloadBox {
    width: 100%;
    background: url('./../assets/download/bg_m_download.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 75% 0 30% 0;
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
  .slogan {
    width: 80%;
  }
</style>
