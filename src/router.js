
import VueRouter from "vue-router"
import home from "./components/tabbar/home.vue"
import menber from "./components/tabbar/menber.vue"
import shopcar from "./components/tabbar/shopcar.vue"
import search from "./components/tabbar/search.vue"
import newslist from "./components/news/newslist.vue"
import newsinfo from "./components/news/newsinfo.vue"
import photolist from "./components/photos/photolist.vue"
import photoInfo from "./components/photos/photoInfo.vue"
import goodsList from "./components/goods/goodsList.vue"
import goodsInfo from "./components/goods/goodsInfo.vue"
import goodsDesc from "./components/goods/goodsDesc.vue"
import goodscomment from "./components/globalcomponents/comments.vue"


var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path : "/home",component:home},
        {path : "/menber",component:menber},
        {path : "/shopcar",component:shopcar},
        {path : "/search",component:search},
        {path : "/home/newslist",component:newslist},
        {path:"/home/newsinfo/:id",component:newsinfo},
        {path : "/home/photolist" ,component:photolist},
        {path:"/home/photoInfo/:id",component:photoInfo},
        {path : "/home/goodslist" ,component:goodsList},
        {path:"/home/goodsInfo/:id",component:goodsInfo},  //name用于编程式跳转
        {path:"/home/goodsDesc/:id",component:goodsDesc,name:"goodsDesc"},  //name用于编程式跳转
        {path:"/home/goodscomment/:id",component:goodscomment,name:"goodscomment"} //name用于编程式跳转

    ],
    linkActiveClass:"mui-active"
})

export default router