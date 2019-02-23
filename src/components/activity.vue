<template>
	<div class='activity'>
    <div class='content'>
      <img class="title" src="./../assets/activity/title.png">
      <div class="gameBox">
        <img @click="downloadpack" src="./../assets/activity/itme_1.png">
        <img @click="downloadpack" src="./../assets/activity/itme_2.png">
        <img @click="downloadpack" src="./../assets/activity/itme_3.png">
        <img @click="downloadpack" src="./../assets/activity/itme_4.png">
        <img @click="downloadpack" src="./../assets/activity/itme_5.png">
        <img @click="downloadpack" src="./../assets/activity/itme_6.png">
        <img @click="downloadpack" src="./../assets/activity/itme_7.png">
      </div>
    </div>
	</div>
</template>
<script>
	export default {
		name: 'activity',
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
  .activity {
    width: 100%;
    height: 100%;
    background: #000a2d;
    .content {
      width: 100%;
      background: url('./../assets/activity/bg_activity.png');
      background-size: 100%;
      background-repeat: no-repeat;
    }
  }

  .gameBox {
    margin-bottom: 5%;
    img {
      width: 60%;
      margin: 2% auto;
    }
  }
  .title {
    width: 20%;
    margin-top: 10%;
  }
</style>
