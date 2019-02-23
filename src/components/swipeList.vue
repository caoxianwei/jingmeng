<template>
	<div class="list">
		<swiper :options="swiperOption" >
			<swiper-slide v-for="item in imgArr"><img :src="item.src"/></swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	const imgArr = [{
    src: '@/assets/home/banner1.png'
  },{
    src: '@/assets/home/banner2.png'
  },{
    src: '@/assets/home/banner3.png'
  },{
    src: '@/assets/home/banner4.png'
  }];
	export default {
		name: 'swipeList',
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				swiperOption: {
                    slidesPerView: 4,
                    spaceBetween: 10,
				},
				imgArr: imgArr
			}
		}
  }
</script>

<style lang='scss' scoped>
	.list {
		width:100%;
		left: 0;
		top: 790px;
		height: 222px;
        margin-bottom: -16px;
		img {
      height: 210px;
      left: 0;
			width: 100%;
    }
	}
</style>
