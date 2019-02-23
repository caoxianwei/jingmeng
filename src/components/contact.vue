<template>
  <div class='content'>
    <div class='downloadBox'>
      <img src="./../assets/download/qr.png">
      <a @click="goIos">
        <img src="./../assets/download/ios.png">
      </a>
      <a @click="goAndroid">
        <img src="./../assets/download/android.png">
      </a>
    </div>
    <img class="banner" src="./../assets/download/banner.png">
  </div>
</template>
<script>
  export default {
    name: 'shareContent',
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
  .downloadBox {
    width: 100%;
    padding: 9% 0 3% 0;
    background: url('./../assets/download/bg_download.png');
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .downloadBox img {
    width: 15%;
    display: block;
    margin-left: 70%;
  }
  .banner {
    width: 100%;
    display: block;
  }
</style>
