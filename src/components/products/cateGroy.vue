<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd
        v-for="(item, index) in classicList"
        :key="index"
      >
        <pro-select
          :name='item.title'
          :list='item.subList'
        />
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd
        v-for="(item, index) in areaList"
        :key="index"
      >
        <pro-select
          :name='item.title'
          :list='item.subList'
        />
      </dd>
    </dl>
  </div>

</template>

<script>
import proSelect from './select'
export default {
  components: {
    proSelect
  },
  data() {
    return {
      classicList: [{
        "title": "美食",
        "type": "food",
        "subList": [{
          "name": "日本菜",
          "id": "Japan"
        }]
      }, {
        "title": "酒店住宿",
        "type": "hotal",
        "subList": [{
          "name": "温泉酒店",
          "id": "hot_spring"
        }]
      }],
      areaList: [{
        "title": "推荐商圈",
        "subList": [{
          "name": "望京",
          "id": 120000
        }, {
          "name": "昌平",
          "id": 12222
        }]
      }]
    }
  }
}
</script>

<style>
</style>