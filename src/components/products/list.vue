<template>
  <div class="m-products-list">
    <ul>
      <li
        v-for="item in nav"
        :key="item.key"
        :class="{'s-nav-active': item.active}"
      >{{item.name}}</li>
    </ul>
    <el-row>
      <my-item
        :meta='item'
        v-for="(item, index) in productList"
        :key="index"
      />
    </el-row>
  </div>
</template>

<script>
import myItem from './item'
import api from '@/api/index'
export default {
  components: {
    myItem
  },
  data() {
    return {
      nav: [{
        key: 's-default',
        name: '智能排序',
        active: true
      }, {
        key: 's-price',
        name: '价格最低',
        active: false
      }, {
        key: 's-score',
        name: '人气最高',
        active: false
      }, {
        key: 's-comment',
        name: '评价最高',
        active: false
      }],
      productList: []
    }
  },
  created() {
    api.getProductsList().then(data => {
      this.productList = data.data.data
    })
  }
}
</script>

<style lang='scss'>
@import '@/assets/css/products/list.scss';
</style>