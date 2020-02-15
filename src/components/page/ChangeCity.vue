<template>
  <div class="page-changeCity">
    <el-row>
      <my-province />
    </el-row>
    <el-row>
      <my-hot
        title="热门城市："
        :list='hotList'
      />
    </el-row>
    <el-row>
      <my-hot
        title="最近访问："
        :list='rencentList'
      />
    </el-row>
    <el-row>
      <cate-gory />
    </el-row>
  </div>
</template>

<script>
import myProvince from '@/components/changeCity/province'
import myHot from '@/components/changeCity/hot'
import cateGory from '@/components/changeCity/category'

import api from "@/api/index.js"

export default {
  components: {
    myProvince,
    myHot,
    cateGory
  },
  data() {
    return {
      hotList: [],
      rencentList: [],
    }
  },
  created() {
    api.getHotList().then(data => {
      this.hotList = data.data.data
    });
    api.getRencentList().then(data => {
      this.rencentList = data.data.data
    })
  }
}
</script>

<style>
</style>