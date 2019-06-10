
import VueRouter from "vue-router"
import home from "./components/tabbar/home.vue"
import menber from "./components/tabbar/menber.vue"
import shopcar from "./components/tabbar/shopcar.vue"
import search from "./components/tabbar/search.vue"
import newslist from "./components/news/newslist.vue"
import newsinfo from "./components/news/newsinfo.vue"
import photolist from "./components/photos/photolist.vue"



var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path : "/home",component:home},
        {path : "/menber",component:menber},
        {path : "/shopcar",component:shopcar},
        {path : "/search",component:search},
        {path : "/home/newslist",component:newslist},
        {path:"/home/newsinfo/:id",component:newsinfo},
        {path : "/home/photolist" ,component:photolist}
    ],
    linkActiveClass:"mui-active"
})

export default router