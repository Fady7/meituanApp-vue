<template>
  <div class="m-menu">
    <div
      class="nav"
      @mouseleave="menuLeave"
    >
      <dl>
        <dt>全部分类</dt>
        <dd
          v-for="(item, index) in menuList"
          :key="index+'i'"
          @mouseenter="menuEnter(item)"
        >
          <i :class="item.type" />
          {{item.name}}
          <span class="arrow" />
        </dd>
      </dl>
      <div
        v-if="curDetail"
        class="detail"
      >
        <template v-for="(item, index) in curDetail">
          <h2 :key="index+'_'">{{item.title}}</h2>
          <span
            v-for="(v, i) in item.items"
            :key="v+'_'+i"
          >{{v}}</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      curDetail: null,
      menuList: []
    }
  },
  created() {
    api.getMenuList().then(data => {
      this.menuList = data.data.data
    })
  },
  methods: {
    menuEnter(item) {
      this.curDetail = item.items;
    },
    menuLeave() {
      this.curDetail = null;
    }
  }
}
</script>

<style>
</style>