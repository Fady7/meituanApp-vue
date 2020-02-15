<template>
  <div class="page-login">
    <div class="login-header">
      <a
        class="logo"
        href="http://www.meituan.com"
      ></a>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        >
      </div>
      <div class="form">
          <h4 class="tips" v-if="error">{{error}}</h4>
        <p><span>账号登录</span></p>
        <el-input
          v-model="userName"
          placeholder="请输入用户名"
          prefix-icon='el-icon-user-solid'
          :class="{'error': error && !userName}"
        ></el-input>
        <el-input
          type="password"
          v-model="password"
          placeholder="请输入密码"
          prefix-icon='el-icon-eleme'
          :class="{'error': error && !password}"
        ></el-input>
        <div class="foot"><a href="#">忘记密码？</a></div>
        <el-button
          type="primary"
          class="btn-login"
          @click="submit"
        >登录</el-button>
        <p class="reg">
          <span>还没有账号？</span>
          <router-link
            tag="a"
            to="/register"
          >免费注册</router-link>
        </p>
        <div class="oauth-wrapper">
          <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
          <div class="oauth cf">
            <a
              class="oauth__link oauth__link--qq"
              href="/account/connect/tencent"
              data-mtevent="{&quot;la&quot;:&quot;oauth/qq&quot;}"
              target="_blank"
            ></a>
            <a
              class="oauth__link oauth__link--weibo"
              href="/account/connect/sina"
              data-mtevent="{&quot;la&quot;:&quot;oauth/sina&quot;}"
              target="_blank"
            ></a>
          </div>
        </div>
      </div>
    </div>
    <footer>
        <ul>
            <li><a href="#">关于美团</a></li>
            <li><a href="#">加入我们</a></li>
            <li><a href="#">商家入驻</a></li>
            <li><a href="#">帮助中心</a></li>
            <li><a href="#">美团手机版</a></li>
        </ul>
        <p>©2018 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </footer>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      userName: '',
      password: '',
      error: ''
    }
  },
  methods: {
      submit() {
          if(!this.userName){
              this.error = '请输入账户'
              return;
          }
          if(!this.password) {
              this.error = '请输入密码'
          }
          //
          api.login({
              userName: this.userName,
              password: this.password
          }).then(data => {
              const res = data.data;
              if(res.status == 'success') {
                  this.$router.push({name: 'index'})
                  this.$store.commit('setUserName', this.userName)
              }else{
                  this.error = res.msg;
              }
          })
      }
  }
}
</script>

<style lang='scss'>
@import '@/assets/css/login/index.scss';
</style>