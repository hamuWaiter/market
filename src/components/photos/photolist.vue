<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item',item.id == 0 ? 'mui-active':'']" v-for="item in cates" :key="item.id">{{item.title}}</a>
          
        </div>
      </div>
    </div>
    <ul>
      <!-- 点击跳转到图片详情组件 -->
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoInfo/'+item.id" tag="li">
        <img v-lazy="item.url">
        <div class="content">
          <h1>{{item.title}}</h1>
          <p>{{item.content}}~~</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import  mui from "../../lib/mui/js/mui.js"
export default {
  data() {
    return {
      cates: [
        {
          title:"全部",
          id:0
        },
        {
          title:"家居生活",
          id:1
        },
        {
          title:"摄影设计",
          id:2
        },
        {
          title:"明星美女",
          id:3
        },
        {
          title:"清纯甜美",
          id:4
        },
        {
          title:"古典美女",
          id:5
        }
      ],
      list:[
        {
          id:0,
          title:"微博小姐姐",
          content:"是你得不到的lolita小姐姐",
          url:"../../images/photolistimg/page1/img-0e4e76c19aba2ae5ea008e01cbc30500.jpg"
        },
         {
          id:1,
          title:"微博小姐姐",
          content:"是你得不到的lolita小姐姐",
          url:"../../images/photolistimg/page1/img-4abdc1f9cee9d231352d282e28b46e43.jpg"
        },
         {
          id:2,
          title:"微博小姐姐",
          content:"是你得不到的lolita小姐姐",
          url:"../../images/photolistimg/page1/img-1c8258d63a631d6463030c16c15943b9.jpg"
        },
         {
          id:3,
          title:"微博小姐姐",
          content:"是你得不到的lolita小姐姐",
          url:"../../images/photolistimg/page1/img-1cb285e6d94f1a5bb02a8221814ddd85.jpg"
        },
         {
          id:4,
          title:"微博小姐姐",
          content:"是你得不到的lolita小姐姐",
          url:"../../images/photolistimg/page1/img-1dc5a8945b22faeb4be9b4a8c23679e4.jpg"
        },
         {
          id:5,
          title:"微博小姐姐",
          content:"是你得不到的lolita小姐姐",
          url:"../../images/photolistimg/page1/img-2b77880895d79e651a4ce1da37ae53bc.jpg"
        },
         {
          id:6,
          title:"微博小姐姐",
          content:"是你得不到的lolita小姐姐",
          url:"../../images/photolistimg/page1/img-2c1a91a09cf34fff121d28662ef8e135.jpg"
        },
         {
          id:7,
          title:"微博小姐姐",
          content:"是你得不到的lolita小姐姐",
          url:"../../images/photolistimg/page1/img-2d8544817dfdf62264407c4a9d587618.jpg"
        }
      ]
    };
  },
  created(){
    this.getData();
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods:{
    getData(){
      console.log("获取数据")
    }
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  touch-action: pan-y;
}
ul li:first-child{
  margin-top: 0px;
}
ul li:last-child{
  margin-bottom: 0px;
}
ul li{
  list-style: none;
  margin: 10px;
  background-color: #999;
  box-shadow: 0 0 6px;
  position: relative;
}
ul li .content{
  width: 100%;
  position: absolute;
  height: 4em;
  background-color: rgba(0, 0, 0, 0.4);
  bottom: 0;
  left: 0;
}
ul li h1{
  font-size: 14px;
  color: white;
  line-height: 2em;
  font-weight: 500;
}
ul li p{
  color: rgba(255,255,255,.8);
  text-indent: 2em;
}
img{
  display: block;
  width: 100%;
  text-align: center;
}
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>