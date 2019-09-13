
import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import router from "./router.js"


import Vuex from "vuex"

Vue.use(Vuex)

// 获取本地存储中的商品数据
var storage = JSON.parse(localStorage.getItem("car") || "[]")

var store = new Vuex.Store({
    state: { //共享数据
        car: storage  //商品对象数组，用于存放商品
    },
    mutations: {
        // 添加商品进购物车
        addToShopcar(state,arg){

            var mark = false;
            state.car.some(item=>{
                if(item.id == arg.id){
                    item.count += arg.count;
                    mark = true;
                    return true;
                }
            })
            if(!mark){
                state.car.push(arg)
            }

            // 将数据保存至本地存储
            localStorage.setItem("car",JSON.stringify(state.car))
        },
        update(state,arg){
            // 当数量改变时根据商品id更新数据（数量）
            state.car.some(item=>{
                if(item.id == arg.id){
                    item.count = arg.count;
                    return true;
                }
            })
            // 将跟新的数据存储到本地
            localStorage.setItem("car",JSON.stringify(state.car))
        },
        remove(state,arg){
            // 购物车点击删除删除本地数据中对应id的数据
            state.car.some((item,i)=>{
                if(item.id == arg){
                    state.car.splice(i,1);
                    return true;
                }
            })
            // 将更新的数据存储到本地
            localStorage.setItem("car",JSON.stringify(state.car))
        },
        selectedChange(state,arg){
            // 更新状态更改的商品
            state.car.some(item=>{
                if(item.id == arg.idVal){
                    item.shiftFlag = arg.flagVal;
                }
            })
            // 将更新的数据存储到本地
            localStorage.setItem("car",JSON.stringify(state.car))
        }

    },
    getters: {
    // 计算商品数量
        getTotal(state) {
            var num = 0;
            state.car.forEach(item => {
                num += item.count;
            });
            return num
        },
        getdata(state,arg){
            // 当商品前面的按钮状态开启时，同步数量和总价到本地
            var o = {
                count: 0,
                Amount: 0
            }
            state.car.forEach(item=>{
                if(item.shiftFlag){
                    o.count += item.count;
                    o.Amount += item.count*item.price
                }
            })
            return o;

        }
    }
})


// 全局时间过滤器
Vue.filter("date",function(datastr){
    var D = new Date(datastr),
        yy = D.getFullYear(),
        mm = D.getMonth()+1,
        dd = D.getDate(),
        hour = D.getHours(),
        min = D.getMinutes(),
        sec = D.getSeconds()
    return yy+"-"+mm+"-"+dd+" "+hour+":"+min+":"+sec
})


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

// 安装缩略图插件
import VuePreview from 'vue-preview'
// defalut install

Vue.use(VuePreview)

// 引入MUI的样式表使用MUI的选项卡才有效果
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"
import "./lib/mui/js/mui.js"

import app from "./app.vue"
import { stringify } from "querystring";
var vm = new Vue({
    el:'#app',
    data:{},
    render : c => c(app),
    router,
    store
})