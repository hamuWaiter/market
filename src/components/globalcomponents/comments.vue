<template>
    <div class="cmt-container">
        <h1>发表评论</h1>
        <hr>
        <textarea placeholder="请输入要发表的评论" v-model="msg" @keyup.enter="submit"></textarea>
        <mt-button type="primary" size="large" @click="submit">发表评论</mt-button>
        <p class="cmt-list" v-for="(item,i) in list" :key="item.id">
            <span>{{i+1}}楼：&nbsp;用户 ：&nbsp;{{item.name}}&nbsp;发表时间：{{item.date|date}}</span>
            <span>{{item.content}}</span>
        </p>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:"",
            list:[
                {id:1,date:new Date(),name:"匿名用户",content:"高考结束后的第一个年头"},
                {id:2,date:new Date(),name:"匿名用户",content:"高考结束后的第二个年头"},
                {id:3,date:new Date(),name:"匿名用户",content:"高考结束后的第三个年头"},
                {id:4,date:new Date(),name:"匿名用户",content:"高考结束后的第四个年头"}
            ]
        }
    },
   methods:{
       submit(){
           if(this.msg.match(" ")) return;
           this.list.unshift({
               id:Date.now(),
               date:new Date(),
               name:"匿名用户",
               content:this.msg
           })
           this.msg = ""
       }
   }
    
}
</script>
<style lang="scss" scoped>
    .cmt-container{
        h1{font-size: 16px;}
        textarea{
            font-size: 14px;
            margin: 0;
            }
        .cmt-list{
            margin: 0;
        }
        .cmt-list span{
            display: block;
        }
        .cmt-list span:nth-of-type(1){
            background-color:rgba(0,0,0,.1);
            line-height: 30px;
        }
        .cmt-list span:nth-of-type(2){
            background-color:#fff;
            line-height: 30px;
            text-indent: 2em;
        }
    }
</style>
