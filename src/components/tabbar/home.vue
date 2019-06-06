<template>
  <div>
    <!-- <h3>首页</h3> -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
}
.mint-swipe-items-wrap div:nth-of-type(1){
    background-color: rgba(0,255,0,.4);
}
.mint-swipe-items-wrap div:nth-of-type(2){
    background-color: rgba(0,255,0,.2);
}
.mint-swipe-items-wrap div:nth-of-type(3){
    background-color: rgba(0,255,0,.6);
}
</style>
