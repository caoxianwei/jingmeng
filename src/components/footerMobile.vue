<template>
  <footer>
      <div class="topBox">
        <div class="leftBox">
          <router-link class="logo" to='/' tag='div'>
            <img src="@/assets/footer/footer_logo.png"/>
          </router-link>
          <div class="text">
            <h5 style="margin: 2% auto; cursor:pointer"><span @click="toDownload">游戏下载</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span @click="toActivity">活动中心</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span @click="toContact">联系我们</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span @click="toGetrich">致富之路</span></h5>
            <p>我们将竭尽全力给您提供最优质的游戏体验</p>
            <p>COPYRIGHT&nbsp;©&nbsp;2018&nbsp;-&nbsp;2020&nbsp;JingMengQiPai.</p>
            <p>ALL&nbsp;RIGHTS&nbsp;RESERVED</p>
          </div>
        </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'jmFooter',
    data () {
      return {
      }
    },
    methods: {
      toDownload (){
        this.$router.push({ path: '../download' })
      },
      toActivity (){
        this.$router.push({ path: '../activity' })
      },
      toContact (){
        this.$router.push({ path: '../contact' })
      },
      toGetrich (){
        this.$router.push({ path: '../getRich' })
      }
    }
  }
</script>

<style lang='scss' scoped>
  footer {
    width: 100%;
    height: 100px;
    position: fixed;
    bottom: 0;
    background: rgba(42, 23, 27, 1);
    overflow: hidden;
    z-index: 999;
  }
  .logo {
    width: 23%;
    float: left;
    padding-top: 3%;
    img {
      width: 70%;
    }
  }
  .text {
    width: 77%;
    float: right;
    color: white;
    text-align: left;
    p {
      margin: 0 auto;
      text-align: left;
      font-size: 12px;
    }
  }
</style>

