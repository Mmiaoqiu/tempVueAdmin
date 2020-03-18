<template>
    <div class="demo">
        陈志超demo
        http://api-ms-test.threeman.online/goods/queryPage
    </div>
</template>

<script>
  import request from '@/utils/request'
  import { getGoodsList } from '@/api/table'
  export default {
    name: 'index',
    mounted() {
      let data = {
        current: 1,
        size: 10,
        goodsType: ''
      }
      getGoodsList(data).then(res=>{
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
        min-height: 900px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: green;
    }
</style>
