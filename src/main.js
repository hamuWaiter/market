
import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import router from "./router.js"

import app from "./app.vue"


// 按需引用mintUI的组件
import "mint-ui/lib/style.css"
import {Header,Swipe, SwipeItem} from "mint-ui"
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

// 引入MUI的样式表使用MUI的选项卡才有效果
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"


var vm = new Vue({
    el:'#app',
    data:{},
    render : c => c(app),
    router
})