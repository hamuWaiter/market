<template>
    <div class="goodslist">
        <router-link tag="div" :to="'/home/goodsInfo/'+item.id" class="goods-item" v-for="item in list" :key="item.id">
            <div class="img-box">
                <img :src="item.src" alt="">
                <h3>{{item.title}}</h3>
            </div>
            <div class="sell">
                <div class="price">
                    <span class="newprice">¥{{item.newPrice}}</span>
                    <span class="oldprice">¥{{item.oldPrice}}</span>
                </div>
                <div class="goodsSatus">
                    <span>热卖中</span>
                    <span>剩余{{item.number}}件</span>
                </div>
            </div>
        </router-link>
        <mt-button type="danger" size="large" style="font-size:16px; " @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pageIndex : 1,//默认显示第一页数据
            list:[
                {
                    id : 0,
                    title : "小米，为发烧而生",
                    src : "../../images/goodslist/1.jpg",
                    newPrice : 2889, 
                    oldPrice : 3450,
                    number : 60
                },
                {
                    id : 1,
                    title : "小米，为发烧而生",
                    src : "../../images/goodslist/2.jpg",
                    newPrice : 2889, 
                    oldPrice : 3450,
                    number : 60
                },
                {
                    id : 2,
                    title : "小米，为发烧而生",
                    src : "../../images/goodslist/3.jpg",
                    newPrice : 2889, 
                    oldPrice : 3450,
                    number : 60
                },
                {
                    id : 3,
                    title : "小米，为发烧而生",
                    src : "../../images/goodslist/4.jpg",
                    newPrice : 2889, 
                    oldPrice : 3450,
                    number : 60
                },
                {
                    id : 4,
                    title : "小米，为发烧而生",
                    src : "../../images/goodslist/5.jpg",
                    newPrice : 2889, 
                    oldPrice : 3450,
                    number : 60
                },
                {
                    id : 5,
                    title : "小米，为发烧而生",
                    src : "../../images/goodslist/6.jpg",
                    newPrice : 2889, 
                    oldPrice : 3450,
                    number : 60
                },
                {
                    id : 6,
                    title : "小米，为发烧而生",
                    src : "../../images/goodslist/7.jpg",
                    newPrice : 2889, 
                    oldPrice : 3450,
                    number : 60
                },
                {
                    id : 7,
                    title : "小米，为发烧而生",
                    src : "../../images/goodslist/8.jpg",
                    newPrice : 2889, 
                    oldPrice : 3450,
                    number : 60
                },
                {
                    id : 8,
                    title : "小米，为发烧而生",
                    src : "../../images/goodslist/9.jpg",
                    newPrice : 2889, 
                    oldPrice : 3450,
                    number : 60
                },
                {
                    id : 9,
                    title : "小米，为发烧而生",
                    src : "../../images/goodslist/10.png",
                    newPrice : 2889, 
                    oldPrice : 3450,
                    number : 60
                }
            ]
        }
    },
    created() {
        this.getGoodslist();
    },
    methods:{
        getGoodslist(){
            console.log("获取图片详情数据")
        },
        getMore(){
            this.pageIndex++; //加载下一页
            console.log("加载更多"+this.pageIndex);
            this.getGoodslist();
        }
    }
}
</script>

<style lang="scss" scoped>
*{
    padding: 0;
    margin: 0;
}
.goodslist{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 12px;
    justify-content: space-between;
    .goods-item{
        width: 48%;
        box-shadow: 0 0 6px black;
        margin-bottom: 12px;
        .img-box{
            width: 100%;
            position: relative;
            height: 160px;
            overflow: hidden;
            img{
            width: 100%;
            display: block;
            }
            h3{
                width: 100%;
                position: absolute;
                bottom: 0;
                color: white;
                line-height: 2em;
                font-size: 16px;
                background-color: rgba(0,0,0,.4);
            }

        }
        .sell{
            width: 100%;
            background-color: rgba(0,0,0,.1);
            padding: 10px 6px;
            .price{
                .newprice{
                    font-size: 16px;
                    color: red;
                }
                .oldprice{
                    font-size: 12px;
                    color: #333;
                    text-decoration: line-through;
                }

            }
            .goodsSatus{
                display: flex;
                justify-content: space-between;
                span{
                    font-size: 14px;
                    color:#333;
                }
            }

        }
    }
}
</style>

