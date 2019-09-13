<template>
    <div>
        <cmtList :id="id"></cmtList>
    </div>
</template>
<script>
import comments from "../globalcomponents/comments.vue"
export default {
    data() {
        return {
            id : this.$route.params.id
        }
    },
    components:{
        "cmtList":comments
    }
}
</script>