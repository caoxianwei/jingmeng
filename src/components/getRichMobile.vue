<template>
  <div class="content">
    <div class="processBox">
      <h2 class="process_title" >成为代理4步曲</h2>
      <div class="itemBox">
        <div class="num">1</div>
        <div class="num">2</div>
        <div class="num">3</div>
        <div class="num">4</div>
        <img class="item" src="./../assets/getrich/item_1.png">
        <img class="item" src="./../assets/getrich/item_2.png">
        <img class="item" src="./../assets/getrich/item_3.png">
        <img class="item" src="./../assets/getrich/item_4.png">
      </div>
      <div class="text">
        <div>介绍新玩家来玩，每日可得到分红，足不出户 即可日收入过万</div>
        <div>全网最高分成比例，让你轻松成为百万富翁！</div>
        <div>改变命运的时候到了，抓住机会吧！</div>
      </div>
      <img width="60%" @click="downloadpack" class="confirm" src="./../assets/getrich/item_5.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'getRichMobile',
    data () {
      return {
      }
    },
    methods: {
      downloadpack(){
        if(this.$store.state.device === 'iphone') {
          window.location.href = 'https://origin.859fc.com/ios_xinpj_offline/xinpj.html?channel_id=jm_ios_website'
        } else {
          window.location.href = 'https://apk.qsh168.com/Play_black_jm_bdreamjm.apk'
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
  .content {
    width: 100%;
    padding-top: 65px;
    background-image: url("./../assets/getrich/m_poster.png");
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    .processBox {
      width: 95%;
      margin: 0 auto;
      text-align: center;
      padding-top: 70%;
      padding-bottom: 40%;
      .process_title {
        text-align: left;
      }
      .itemBox {
        width: 100%;
        .num {
          width: 25%;
          float: left;
          color: rgba(223, 178, 26, 1);
          margin-bottom: 3%;
          text-align: center;
          font-size: 24px;
        }
        img {
          width: 23%;
        }
      }
      .text {
        width: 100%;
        font-size: 12px;
        margin: 5% auto;
        div {
          margin: 1% auto;
          text-align: center;
        }
      }
    }
  }
</style>
