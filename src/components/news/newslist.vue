<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" src="../../images/女孩.jpg">
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
                <span>发表时间：{{item.time|date}}</span>
                <span>次数：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
 data(){
   return{
     list:[
       {
         id:1,
         title:'1',
         content:'111',
         time:new Date(),
         click:1
       },
       {
         id:2,
         title:'2',
         content:'222',
         time:new Date(),
         click:2
       },
       {
         id:3,
         title:'3',
         content:'333',
         time:new Date(),
         click:1
       },
       {
         id:4,
         title:'4',
         content:'444',
         time:new Date(),
         click:4
       },
       {
         id:5,
         title:'5',
         content:'111',
         time:new Date(),
         click:1
       },
       {
         id:6,
         title:'6',
         content:'222',
         time:new Date(),
         click:2
       },
       {
         id:7,
         title:'7',
         content:'333',
         time:new Date(),
         click:1
       },
       {
         id:8,
         title:'1',
         content:'111',
         time:new Date(),
         click:1
       },
       {
         id:9,
         title:'2',
         content:'222',
         time:new Date(),
         click:2
       },
       {
         id:10,
         title:'3',
         content:'333',
         time:new Date(),
         click:1
       },
       {
         id:11,
         title:'4',
         content:'444',
         time:new Date(),
         click:4
       },
       {
         id:12,
         title:'5',
         content:'111',
         time:new Date(),
         click:1
       },
       {
         id:13,
         title:'6',
         content:'222',
         time:new Date(),
         click:2
       },
       {
         id:14,
         title:'7',
         content:'333',
         time:new Date(),
         click:1
       }
     ]
   }
 }   
}
</script>
<style lang="scss" scoped>
    .mui-table-view{
        li{
            h1{
                font-size: 16px;
            }
            .mui-ellipsis{
                color: #00f;
                font-size: 12px;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>
