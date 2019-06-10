<template>
  <div class="newsinfo-container">
    <h3>{{news.title}}</h3>
    <p class="title">
        <span>发表时间：{{news.time|date}}</span>
        <span>点击次数：{{news.click}}次</span>
    </p>
    <hr>
    <div class="content">
        <p v-for="item in contentinfo" :key="item.id">{{item.content}}</p>
    </div>
    <cmtlist></cmtlist>
  </div>
</template>
<script>

import comment from "../globalcomponents/comments.vue"
export default {
    data(){
        return{
            id:this.$route.params.id,
            news:{
                title : "新闻详情页",
                time : new Date(),
                click : 10,
            },
            contentinfo:[
                    {
                        id:1,
                        content:"明月几时有？"
                    },
                    {
                        id:2,
                        content:"把酒问青天"
                    },
                    {
                        id:3,
                        content:"不知天上宫阙"
                    },
                    {
                        id:4,
                        content:"今夕是何年"
                    },
                    {
                        id:5,
                        content:"我欲乘风归去"
                    },
                    {
                        id:6,
                        content:"又恐琼楼玉宇"
                    },
                    {
                        id:7,
                        content:"高处不胜寒"
                    },
                    {
                        id:8,
                        content:"起舞弄清影"
                    },
                    {
                        id:9,
                        content:"何似在人间"
                    },
                    {
                        id:10,
                        content:"转朱阁"
                    },
                    {
                        id:11,
                        content:"低绮户"
                    },
                    {
                        id:12,
                        content:"照无眠"
                    },
                    {
                        id:13,
                        content:"不应有恨"
                    },
                    {
                        id:14,
                        content:"何事长向别时圆？"
                    },
                    {
                        id:15,
                        content: "人有悲欢离合"
                    },
                    {
                        id:16,
                        content:"月有阴晴圆缺"
                    },
                   {
                        id:17,
                        content:"此事古难全"
                    },
                    {
                        id:18,
                        content:"但愿人长久"
                    },
                    {
                        id:19,
                        content:"千里共婵娟"
                    }
                ]
        }
    },
    components:{
        "cmtlist":comment
    }
}
</script>
<style lang="scss" scoped>
.newsinfo-container{
    padding: 0 4px;
    h3{
        font-size: 16px;
        line-height: 32px;
        text-align:center;
    }
    .title{
        display: flex;
        justify-content: space-between;
        color: blue;
    }

}
</style>
