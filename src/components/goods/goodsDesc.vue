<template>
    <div class="goodsDesc">
        <h1>商品图文详情</h1>
        <hr>
        <div class="img">
            <img src="../../images/goods/tuwen.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.goodsDesc{
    padding: 4px;
    h1{
        width: 100%;
        text-align: center;
        color: #26a2ff;
        font-size: 16px;
    }
    .img{
        width: 100%;
        img{
            display:block;
            width: 100%;
        }
    }
}
</style>

