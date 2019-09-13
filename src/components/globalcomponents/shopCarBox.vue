<template>
    <div>
        <div class="mui-numbox" data-numbox-step='1' data-numbox-min='0' data-numbox-max='60'>
            <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
            <input class="mui-numbox-input" type="number" ref="number" :value="val" @change="newdata" readonly/>
            <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    mounted(){
        mui(".mui-numbox").numbox()
    },
    methods:{
        newdata() {
            // 当数量改变时更新本地数据
            this.$store.commit("update",{
                id: this.id,
                count: parseInt(this.$refs.number.value)  //数量
            })
        }
    },
    props:["val","id"]
}
</script>
<style lang="scss" scoped>
.mui-numbox{
    margin: 0 6px;
}
</style>
