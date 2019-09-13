<template>
    <div>
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.src" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    props:["list"]
    
}
</script>
<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    .mint-swipe-items-wrap{
       img{
           width: 100%;
       } 
    }
}
// .mint-swipe-items-wrap div:nth-of-type(1){
//     background-color: rgba(0,255,0,.2);
// }
// .mint-swipe-items-wrap div:nth-of-type(2){
//     background-color: rgba(255,0,0,.4);
// }
// .mint-swipe-items-wrap div:nth-of-type(3){
//     background-color: rgba(0,255,255,.2);
// }
</style>
