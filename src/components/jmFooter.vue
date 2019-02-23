<template>
  <footer>
    <div class="w-1200 content">
      <div class="topBox">
        <div class="leftBox">
          <div class="logo">
            <img src="@/assets/footer/footer_logo.png"/>
          </div>
          <div class="text">
            <h5 style="margin-bottom: 5px; cursor:pointer"><span @click="toDownload">游戏下载</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span @click="toActivity">活动中心</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span @click="toContact">联系我们</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span @click="toGetrich">致富之路</span></h5>
            <p style="margin: 0; font-size: 12px; font-weight: 200">我们将竭尽全力给您提供最优质的游戏体验</p>
            <p style="margin: 0; font-size: 12px; font-weight: 200">COPYRIGHT&nbsp;©&nbsp;2018&nbsp;-&nbsp;2020&nbsp;JingMengQiPai.&nbsp;ALL&nbsp;RIGHTS&nbsp;RESERVED</p>
          </div>
        </div>
        <div class="icon">
          <img style="margin-right: 2%" src="@/assets/footer/customer_service.png" >
          <img style="margin-right: 2%" src="@/assets/footer/pointer.png" >
          <img style="margin-right: 2%" src="@/assets/footer/home.png" >
        </div>
      </div>
      <div class="payment">
        <img style="width: 8%" src="@/assets/footer/kexin.png">
        <img style="width: 10%" src="@/assets/footer/china_unionpay.png">
        <img style="width: 10%" src="@/assets/footer/alipay.png">
        <img style="width: 10%" src="@/assets/footer/visa.png">
        <img style="width: 6%" src="@/assets/footer/master_card.png">
        <img style="width: 10%" src="@/assets/footer/wechat.png">
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
    height: 270px;
    background: #210f14;
    padding-bottom: 4%;
  }
  .content {
    color: white;
  }
  .topBox {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    .leftBox {
      width: 70%;
      float: left;
      .logo{
        width: 0;
        margin: 10% 0 0 9%;
        float: left;
      }
      .text {
        width: 70%;
        text-align: left;
        margin: 6% 10% 0 0;
        float: right;
      }
    }
    .icon {
      width: 30%;
      text-align: right;
      margin: -4% 7% 0 0;
      float: right;
    }
  }
  .payment {
    width: 100%;
    margin-top: 5%;
  }
  .payment img {
    margin: 0 3%;
  }

</style>
