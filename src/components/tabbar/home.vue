<template>
  <div>
    <!-- <h3>首页</h3> -->

	<mtswiper :list="list"></mtswiper>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
						<router-link to="/home/newslist">
		                    <img src="../../images/6.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div>
							</router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		                    <img src="../../images/5.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		                    <img src="../../images/3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/1.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
  </div>
</template>
<script>
import swiper from "../globalcomponents/swiper.vue"
export default {
	data() {
		return {
			list:[
				{
					id : 0,
					src : "../../images/girls/1.jpg"
				},
				{
					id : 1,
					src : "../../images/girls/2.jpg"
				},
				{
					id : 2,
					src : "../../images/girls/3.jpg"
				}
			]
		}
	},
	components:{
		"mtswiper":swiper
	}
}
</script>
<style lang="scss" scoped>

.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: none;
}
</style>
