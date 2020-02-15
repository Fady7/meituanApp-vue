<template>
  <div class="categroy">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd
        v-for="(item, index) in cateList"
        :key="index"
      >
        <a :href="'#city-' + item">{{item}}</a>
      </dd>
    </dl>
    <dl
      v-for="(item, index) in cityGroup"
      :key="index"
      class="m-categroy-section"
      :id="'city-' + index"
    >
      <dt>{{index}}</dt>
      <dd><span
          v-for="city in item"
          :key="city.id"
        >{{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cateList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      cityList: [],
      cityGroup: null
    }
  },
  created() {
    const data = [{
      "id": 1,
      "name": "北京",
      "pinyin": "beijing",
      "arconym": 'bj',
      "rank": "S",
      "firstChar": "b"
    }, {
      "id": 2,
      "name": "成都",
      "pinyin": "chengdu",
      "arconym": 'cd',
      "rank": "S",
      "firstChar": "c"
    }, {
      "id": 3,
      "name": "上海",
      "pinyin": "shanghai",
      "arconym": 'sh',
      "rank": "S",
      "firstChar": "s"
    }];
    const obj = {};
    data.forEach((item, index) => {
      if (!obj[item.firstChar]) {
        obj[item.firstChar.toUpperCase()] = [];
      }
      obj[item.firstChar.toUpperCase()].push(item);
      this.cityGroup = obj;
    })
  }
}
</script>

<style lang='scss'>
@import '@/assets/css/changeCity/categroy.scss';
</style>