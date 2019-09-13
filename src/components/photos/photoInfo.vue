<template>
    <div class="photoInfo">
        <h3>图片详情页标题</h3>
        <div class="data">
            <div class="data_left">
                <span>发表时间：</span>
                <span>{{photoData.time | date}}</span>
            </div>
            <div class="data_right">
                <span>点击：{{photoData.click}}次</span>
            </div>
        </div>
        <div class="content">
            <div class="imgs">
                <!-- 缩略图 -->
                <vue-preview :slides="list" @close="handleClose"></vue-preview>
            </div>
            <div class="text">
                <p>{{photoData.content}}</p>
            </div>
        </div>
        <cmtList :id="id"></cmtList>
    </div>
</template>
<script>

import comment from "../globalcomponents/comments.vue"

export default {
    data() {
        return {
            id:this.$route.params.id,
            photoData:{
                title : "自己想标题",
                time : new Date(),
                click : 2,
                content : "不是你想象中的图片详情description，我是有灵魂的description~~"
            },
            list:[
                {
                    src:"../../images/photolistimg/largeImg/1.jpg",
                    msrc:"../../images/photolistimg/largeImg/1.jpg",
                    alt:"美女",
                    title:"图片",
                    w:600,
                    h:400
                },
                {
                    src:"../../images/photolistimg/largeImg/5.jpg",
                    msrc:"../../images/photolistimg/largeImg/5.jpg",
                    alt:"美女",
                    title:"图片",
                    w:600,
                    h:400
                },
                {
                    src:"../../images/photolistimg/largeImg/3.jpg",
                    msrc:"../../images/photolistimg/largeImg/3.jpg",
                    alt:"美女",
                    title:"图片",
                    w:600,
                    h:400
                },
                {
                    src:"../../images/photolistimg/largeImg/4.jpg",
                    msrc:"../../images/photolistimg/largeImg/4.jpg",
                    alt:"美女",
                    title:"图片",
                    w:600,
                    h:400
                },
                {
                    src:"../../images/photolistimg/largeImg/2.jpg",
                    msrc:"../../images/photolistimg/largeImg/2.jpg",
                    alt:"美女",
                    title:"图片",
                    w:600,
                    h:400
                }
            ]
        }
    },
    components:{
        "cmtList" : comment
    },
    created(){
        this.getPhotoInfo(); //获取数据，没有数据接口模拟一下
    },
    methods:{
        getPhotoInfo(){
            console.log("获取数据");
            console.log(this.id);
        },
        handleClose () {
        console.log('close event')
      }
    }
}
</script>
<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
.photoInfo{
    h3{
    font-size:16px;
    text-align: center;
    color: #007aff;
    line-height: 1.5em;
    }
    .data{
        margin: 0 4px;
        padding-bottom: 4px;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        border-bottom:1px solid #999;
        color: #999;
    }
    .content{
        padding: 0 4px;
        .imgs{
            /deep/ .my-gallery{   //deep深层作用选择器
              display: flex;
              flex-wrap:wrap;//默认换行
              figure{
                  width: 30%;  
                  margin: 5px; 
                  img{
                      width: 100%;
                      box-shadow: 0 0 8px #999;  
                      border-radius: 5px;
                  }
              }
          }
        }
        .text p{
            font-size: 12px;
            color: black;        
        }
    }
}
</style>