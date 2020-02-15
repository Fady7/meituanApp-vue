<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <my-menu />
      </el-col>
      <el-col :span="19">
        <my-life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <my-style :navList='iStyleList' />
      </el-col>
      <el-col :span="24">
        <my-style :navList='recomment'/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import myMenu from '@/components/index/Menu'
import myLife from './Life'
import myStyle from '@/components/index/Container'
export default {
  data() {
    return {
      iStyleList: {
        class: 'iStyle',
        title: '有格调',
        list: [
          {
            tab: 'all',
            text: '全部'
          },
          {
            tab: 'food',
            text: '约会聚会'
          }, {
            tab: 'spa',
            text: '丽人SPA'
          },
          {
            tab: 'movie',
            text: '电影演出'
          }, {
            tab: 'travel',
            text: '品质出游'
          }
        ]
      },
      recomment: {
        class: 'youhui',
        title: '很优惠',
        list: [{
            tab: 'all',
            text: '全部'
          },
          {
            tab: 'food',
            text: '美食'
          }, {
            tab: 'releax',
            text: '休闲'
          }]
      }
    }
  },
  components: {
    myMenu,
    myLife,
    myStyle
  }
}
</script>

<style lang='scss'>
@import '@/assets/css/index/index.scss';
</style>