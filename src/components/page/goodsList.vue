<template>
  <div class="page-product">
    <el-row class="m-crumbs">
      <my-crumbs />
    </el-row>
    <el-row>
      <el-col :span='19'>
        <el-row>
          <my-categroy />
        </el-row>
        <el-row>
            <my-list />
        </el-row>
      </el-col>
      <el-col :span='5'>
        右 map+fav
      </el-col>
    </el-row>
  </div>
</template>

<script>
import myCrumbs from '@/components/products/crumbs'
import myCategroy from '@/components/products/cateGroy'
import myList from '@/components/products/list'
export default {
  components: {
    myCrumbs,
    myCategroy,
    myList
  }
}
</script>

<style lang='scss'>
@import '@/assets/css/products/index.scss';
</style>