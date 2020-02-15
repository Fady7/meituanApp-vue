<template>
  <div class="province">
    <span>按省份选择:</span>
    <my-select
      :list='province.list'
      :value='province.value'
      title="省份"
      :showWrapperActive='provinceActive'
      @change_active='changeProvinceActive'
      @change='changeProvince'
    />
    <my-select
      :list='citys.list'
      :value='citys.value'
      title="城市"
      :showWrapperActive='cityActive'
      @change_active='changeCityActive'
      @change='changeCity'
    />
    <span>直接搜索:</span>
    <el-select
      v-model="searchWorld"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option
        v-for="(item, index) in searchList"
        :key="index"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import mySelect from './select'
import api from '@/api/index.js'

export default {
  created() {
    api.getProvinceList().then(data => {
      this.data = data.data.data;
    }).then(_ => {
      this.province.list = this.data.map((item, index) => item.provinceName)
    }).then(_ => {
      this.citys.list = this.data[0].cityInfoList.map(item => item.name)
    })
  },
  data() {
    return {
      data: [],
      province: {
        list: [],
        value: '省份'
      },
      citys: {
        list: [],
        value: '城市'
      },
      provinceActive: false,
      cityActive: false,
      searchList: ['四川', '云南', '贵州', '湖南', '山东', '广东', '北京', '成都', '南充', '蓬安', '湖南', '山东', '广东', '北京'],
      searchWorld: '',
      loading: false
    }
  },
  components: {
    mySelect
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince(val, index) {
      this.province.value = val;
      this.citys.list = this.data[index].cityInfoList.map(item => item.name)
    },
    changeCity(val) {
      this.citys.value = val;
      this.$store.dispatch('setPosition', val);
    },
    remoteMethod(val) {
      //ajax
      console.log(val)
    }
  }
}
</script>

<style lang='scss'>
@import '@/assets/css/changeCity/iselect.scss';
</style>