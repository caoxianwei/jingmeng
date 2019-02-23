<template>
	<div class='content'>
    <img class="poster" src="./../assets/getrich/poster.jpg">
    <div class="processBox">
      <div class="process w-1200">
        <h2 class="process_title" >成为代理4步曲</h2>
        <div class="itemBox">
          <img class="item" src="./../assets/getrich/item_1.png">
          <img class="arrow" src="./../assets/getrich/arrow.png">
          <img class="item" src="./../assets/getrich/item_2.png">
          <img class="arrow" src="./../assets/getrich/arrow.png">
          <img class="item" src="./../assets/getrich/item_3.png">
          <img class="arrow" src="./../assets/getrich/arrow.png">
          <img class="item" src="./../assets/getrich/item_4.png">
        </div>
        <div class="text">
          <p>介绍新玩家来玩，每日可得到分红，足不出户 即可日收入过万</p>
          <p>全网最高分成比例，让你轻松成为百万富翁！</p>
          <p>改变命运的时候到了，抓住机会吧！</p>
        </div>
        <img @click="downloadpack" class="confirm" src="./../assets/getrich/item_5.png">
      </div>
    </div>
	</div>
</template>
<script>
	export default {
		name: 'getRich',
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
  .poster {
    width: 100%;
    display: block;
  }
  .processBox {
    width: 100%;
    color: white;
    background: url('./../assets/getrich/bg.png');
    background-position: center center;
    background-repeat: no-repeat;
  }
  .process {
    padding: 2% 0;
    margin: 0 auto;
  }
  .process_title {
    margin-left: 7%;
    text-align: left;
  }
  .itemBox {
    margin: 0 auto;
  }
  .item {
    width: 15%;
  }
  .arrow {
    width: 2%;
    margin: 2% 3%;
  }
  .confirm {
    width: 20%;
    margin: 2% auto;
  }
</style>
