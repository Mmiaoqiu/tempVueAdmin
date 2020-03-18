<template>
    <div class="demo">
        陈志超demo
        http://api-ms-test.threeman.online/goods/queryPage
    </div>
</template>

<script>
  import request from '@/utils/request'
  export default {
    name: 'index',
    mounted() {
      request({
        url: '/goods/queryPage',
        method: 'post',
        data:{
          current: 1,
          // size: 10,
          goodsType: "111"
        }
      }).then(res=>{
        console.log(res,123)
      }).catch(res=>{
        console.error(res,12312312)
      })
    }
  }
</script>

<style lang="scss" scoped>
    .demo{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
