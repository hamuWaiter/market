<template>
    <div class="numBox">
        <div class="mui-numbox" data-numbox-step='1' data-numbox-min='1' :data-numbox-max='max'>
            <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
            <input class="mui-numbox-input" type="number" @change="getValue" ref="number"/>
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
        console.log(this.max)
        mui(".mui-numbox").numbox()
    },
    methods : {
        getValue() {
            this.$emit("getNum",parseInt(this.$refs.number.value));
        }
    },
    props:["max"]
}
</script>
<style lang="scss" scoped>
.numBox{
    display: inline;
}
</style>

