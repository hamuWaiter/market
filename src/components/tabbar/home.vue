<template>
  <div>
    <!-- <h3>首页</h3> -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
						<router-link to="/home/newslist">
		                    <img src="../../images/6.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div>
							</router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		                    <img src="../../images/5.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
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
export default {}
</script>
<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
}
.mint-swipe-items-wrap div:nth-of-type(1){
    background-color: rgba(0,255,0,.2);
}
.mint-swipe-items-wrap div:nth-of-type(2){
    background-color: rgba(255,0,0,.4);
}
.mint-swipe-items-wrap div:nth-of-type(3){
    background-color: rgba(0,255,255,.2);
}
.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: none;
}
</style>
