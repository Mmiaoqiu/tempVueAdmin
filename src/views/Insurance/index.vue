<template>
    <div class="main">
        <div class="fromHead">
            商品类型：
            <el-select v-model="selectValue" placeholder="请选择">
                <el-option
                        v-for="item in goodsType"
                        :key="item.id"
                        :label="item.tel"
                        :value="item.id">
                </el-option>
            </el-select>
            <el-button class="btn" type="primary" @click="getGoodsList(1)" plain>主要按钮</el-button>
        </div>
        <div class="tableBox" v-if="goodsList!=null">
            <el-table
                    :data="goodsList.records"
                    style="width: 100%"
                    :row-class-name="tableRowClassName">
                <el-table-column
                        fixed
                        prop="goodsId"
                        label="商品ID"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="goodsType"
                        label="商品类型"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="goodsCnName"
                        label="商品名称"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="originalPriceStr"
                        label="商品原价"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="payPriceStr"
                        label="优惠价格"
                        width="120">
                </el-table-column>
                <el-table-column
                        label="商品图片"
                        width="120">
                    <template slot-scope="scope">
                        <el-button @click="viewPicture(scope.row.briefImg)" type="text" size="small">查看图片</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                        label="推广图片"
                        width="120">
                    <template slot-scope="scope">
                        <el-button @click="viewPicture(scope.row.promoteImg)" type="text" size="small">查看图片</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="createTime"
                        label="创建时间"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="discountOverTime"
                        label="优惠截止时间"
                        width="180">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="200">
                    <template slot-scope="scope">
                        <el-button type="text" size="small">商品详情</el-button>
                        <el-button type="text" size="small">修改商品</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <el-pagination
                v-if="goodsList!=null"
                :current-page.sync="pageCount"
                @current-change="changeIndex"
                style="display: flex;justify-content: center;"
                background
                layout="prev, pager, next"
                :total="goodsList.total">
        </el-pagination>
    </div>
</template>

<script>
  import { getGoodsList } from '@/api/table'
  export default {
    name: 'index',
    data(){
      return {
        currentPage:null,
        goodsType: [
          {
            tel:'全部',
            id:''
          },
          {
            tel:'课程',
            id:1
          },
          {
            tel:'虚拟服务',
            id:2
          },
          {
            tel:'组合课程',
            id:3
          },
        ],
        selectValue:'',
        pageCount:1,
        goodsList:null
      }
    },
    mounted(){
        this.getGoodsList(1)
    },
    methods:{
      viewPicture(data){
        console.log(data)
      },
      changeIndex(e){
        this.pageCount = e;
        this.getGoodsList(e)
      },
      getGoodsList(pageNo){
        this.pageCount = pageNo;
        let data = {
          current: pageNo,
          size: 10,
          goodsType: this.selectValue
        }
        getGoodsList(data).then(res=>{
          this.goodsList = res.data
        }).catch(res=>{
          console.error(res,12312312)
        })
      },
        tableRowClassName({row, rowIndex}) {
          if (rowIndex%2==1) {
            return 'warning-row';
          } else if (rowIndex%2==0) {
            return 'success-row';
          }
          return '';
        }
    },
  }
</script>

<style lang="scss" scoped>
.main{
    width: 100%;
    height: 100vh;
    background: #f1f1f1;
    .fromHead{
        box-sizing: border-box;
        padding: 20px;
        padding-top: 40px;
        padding-bottom: 15px;
        box-shadow: 0 -10px 20px 1px #000000;
        .btn{
            margin-left: 100px;
        }
    }
    .tableBox{
        width: 95%;
        padding-top:10px;
        height: 78vh;
        margin: 0 auto;
        overflow-y: scroll;
        margin-bottom: 20px;

        .el-table .warning-row {
            background: oldlace;
        }

        .el-table .success-row {
            background: #f0f9eb;
        }
    }
}

</style>
<style>
        .el-table .warning-row {
            background: oldlace;
        }

        .el-table .success-row {
            background: #f0f9eb;
        }
</style>
