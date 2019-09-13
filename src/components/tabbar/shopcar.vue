<template>
    <div class="shopCar">
        <div class="myGoods" v-for="(item,i) in list" :key="item.id">
            <mt-switch v-model="item.shiftFlag"  @change="flagChanged(item.id,item.shiftFlag)"></mt-switch>
            <img src="../../images/goodslist/7.jpg" alt="">
            <div class="box">
                <h1>小米，为发烧而生&nbsp;&nbsp;&nbsp; 商品序号：{{item.id}}</h1>
                <div class="goods-price">
                    <span class="price">￥{{item.price}}</span>
                    <numbox :val="item.count" :id="item.id"></numbox>
                    <a href="javascript:;" @click="removeItem(item.id,i)">删除</a>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="text">
                        <p>总计（不含运费）</p>
                        <p>已勾选商品<span class="red">{{$store.getters.getdata.count}}</span>件，总价
                        <span class="red">￥{{$store.getters.getdata.Amount}}</span></p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import numbox from "../globalcomponents/shopCarBox.vue"
export default {
    data(){
        return {
            list:[],
            flag:true
        }
    },
    created(){
        this.list = JSON.parse(localStorage.getItem("car"))
    },
    mounted(){
        mui('.mui-switch')['switch']();
    },
    methods:{
        removeItem(id,index){
            this.list.splice(index,1);
            this.$store.commit("remove",id)
        },
        flagChanged(id ,val) {
            // 更新本地存储中的按钮状态
            this.$store.commit("selectedChange",{
                idVal: id,
                flagVal: val
            })
        }
    },
    components:{
        "numbox":numbox
    }
}
</script>
<style lang="scss" scoped>
.shopCar{
    background-color: rgba(0,0,0,.1);
    padding: 0;
    margin: 0;
    overflow: hidden;
    .myGoods{
        margin: 10px;
        display: flex;
        align-items: center;
        background-color: white;
        padding: 20px 10px;
        border-radius: 4px;
        box-shadow: 0 0 4px rgba(0,0,0,.4);

        img{
            width: 60px;
            height: 60px;
        }
        .box{
            h1{
                font-size: 14px;

            }
            .goods-price{
                display: flex;
                align-items: center;
                .price{
                    color: red;
                }
                a{
                    font-size: 13px;
                }
            }
        }
    }
    .mui-card{
        .mui-card-content-inner{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                font-size: 14px;
                .red{
                    font-size: 18px;
                    color:red;
                }
            }
            .mint-button{
                background-color: blue;
                font-size: 16px;
            }
        }
    }
}
</style>
