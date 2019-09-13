<template>
    <div class="goodsInfo">
        <!-- 购物车小球 -->
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="flag" ref="ball"></div>
        </transition>
        
        
        <!-- 轮播图区域 -->
        <div class="swiper">
            <mtswiper :list="list"></mtswiper>
        </div>
        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">小米Note 128G</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="price">
                        市场价：<del>¥2699</del> 销售价：<span class="sell-price">¥2199</span>  
                    </div>
                    <div class="number">
                        购买数量：
                        <numbox @getNum="getNumber" :max = "max"></numbox>
                    </div>
                    <div class="buy">
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addShopcar">加入购物车</mt-button>
                    </div>
                </div>                
            </div>
        </div>
        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：2H3431313</p>
                    <p>库存情况：{{max}}件</p>
                    <p>上架时间：2019-08-01 11:26:12</p>

                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="gotDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
import swiper from "../globalcomponents/swiper.vue"
import numBox from "../globalcomponents/numBox.vue"
export default {
	data() {
		return {
            id : this.$route.params.id,
            flag : false,
            max : 55,
            price: 2399,
            list:[
				{
					id : 0,
					src : "../../images/goodslist/4.jpg"
				},
				{
					id : 1,
					src : "../../images/goodslist/6.jpg"
				},
				{
					id : 2,
					src : "../../images/goodslist/8.jpg"
				}
            ],
            buyNumber : 1
		}
    },
    created(){
        // 调用获取数据方法
        this.getGoodsInfo();
        console.log(this.id);
    },
    methods:{
        getGoodsInfo() {
            console.log("根据商品id获取页面数据");
        },
        gotDesc(id) {
            // 根据id进入对应图文介绍
            this.$router.push({name:'goodsDesc',params:{id}});
        },
        goComment(id) {
            // 进入评论
            this.$router.push({name:'goodscomment',params:{id}});
        },
        addShopcar() {
            // 点击加入购物车(出现小球)
            this.flag = !this.flag;
            // 组织出一个商品对象加入购物车
            var goods = {
                id: this.id,
                count: this.buyNumber,
                price: this.price,
                shiftFlag: true
            }
            this.$store.commit("addToShopcar",goods)

        },
        beforeEnter(el){
            el.style.transform = "translate(0,0)";
        },
        enter(el,done){

            el.offsetWidth;


            // 解决不同屏幕分辨率下小球兼容问题
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            const badgePosition = document.getElementById("badge").getBoundingClientRect();
            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top;


            el.style.transform = "translate("+xDist+"px,"+yDist+"px)";
            el.style.transition = "all 1s cubic-bezier(.24,-0.44,.94,.63)";
            done()
        },
        afterEnter(el){
            this.flag = !this.flag;
        },
        getNumber(count) {
            // 当数量框值改变时将numbox的值传递给父组件
            this.buyNumber = count;
        }
    },
	components:{
        "mtswiper" : swiper,
        "numbox" : numBox
	}
}
</script>
<style lang="scss" scoped>

.goodsInfo{
    width: 100%;
    position: relative;
    .ball{
        width:14px;
        height: 14px;
        background-color: red;
        border-radius: 50%;
        position: absolute;
        z-index: 99;
        top: 310px;
        left: 148px;
    }
    .swiper{
        width: 98%;
        margin: 0 auto;
        margin-top: 4px;
    }
    .mui-card{
        .price{
            font-size: 12px;
            .sell-price{
                font-size: 16px;
                color:red;
            }
        }
        .number{
            margin: 10px 0;
        }
        .mui-card-footer{
            display: block;
            button{
                margin: 12px 0;
            }
        }
    }
}
</style>
