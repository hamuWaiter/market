
import VueRouter from "vue-router"
import home from "./components/tabbar/home.vue"
import menber from "./components/tabbar/menber.vue"
import shopcar from "./components/tabbar/shopcar.vue"
import search from "./components/tabbar/search.vue"



var router = new VueRouter({
    routes:[
        {path : "/home",component:home},
        {path : "/menber",component:menber},
        {path : "/shopcar",component:shopcar},
        {path : "/search",component:search}
    ],
    linkActiveClass:"mui-active"
})

export default router