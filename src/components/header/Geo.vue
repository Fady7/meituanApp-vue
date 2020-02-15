<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-s-flag" />
      {{$store.state.position}}
      <router-link
        class="changeCity"
        :to="{name: 'changeCity'}"
      >切换城市</router-link>
      [
      <a href="#">春熙路</a>
      <a href="#">九眼桥</a>
      <a href="#">龙爪堰</a>
      ]
    </div>
    <div v-if="!$store.state.userName" class="m-user">
      <router-link
        class="login"
        to='/login'
      >立即登录</router-link>
      <router-link
        class="register"
        to="/register"
      >注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeCity() {

    },
    login() {

    },
    register() {

    }
  }
}
</script>

<style>
</style>