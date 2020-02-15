<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col
        :span='3'
        class="left"
      >
        <img
          src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
          alt="美团"
        >
      </el-col>
      <el-col
        :span='15'
        class="center"
      >
        <div class="wrapper">
          <el-input
            v-model="searchWorld"
            placeholder="请输入内容"
            @focus="focus"
            @blur="blur"
            @input="inputSearch"
          ></el-input>
          <el-button
            type="primary"
            icon="el-icon-search"
          ></el-button>
          <dl
            class="hotPlace"
            v-if="isHotPlace"
          >
            <dt>热门搜索</dt>

            <dd
              v-for="(item, index) in hotPlaceList"
              :key="index"
            >
              <router-link to="/s">{{item}}</router-link>
            </dd>
          </dl>
          <dl
            class="searchList"
            v-if="isSearchList"
          >
            <dd
              v-for="(item, index) in searchList"
              :key="index"
            >
              <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a
            href="#"
            v-for="(item, index) in suggestList"
            :key="index"
          >{{item}}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      searchWorld: '',
      isFocus: false,
      hotPlaceList: [],
      searchList: [],
      suggestList: []
    }
  },
  created() {
    api.getHotPlaceList()
      .then(data => {
        const result = data.data.data;
        this.hotPlaceList = result;
        this.suggestList = result;
      }).catch(err => {
        console.log(err)
      })
  },
  computed: {
    isHotPlace() {
      return this.isFocus && !this.searchWorld;
    },
    isSearchList() {
      return this.isFocus && this.searchWorld;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      setTimeout(_ => {
        this.isFocus = false;
      }, 400)
    },
    inputSearch() {
      let val = this.searchWorld;
      api.getSearchList().then(data => {
        this.searchList = data.data.data.list.filter((item, index) => {
          return item.indexOf(val) != -1;
        });
      })
    }
  }
}
</script>

<style lang='scss'>
@import '@/assets/css/public/header/index.scss';
@import '@/assets/css/public/header/search.scss';
</style>