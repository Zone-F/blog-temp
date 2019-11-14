<template>
  <div class="login-warp">
    <el-form label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password"></el-input>
      </el-form-item>
      <el-button type="primary" style="margin-left:80px;" @click="login">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { doLogin } from "~/api/login";
const Cookies = require('js-cookie')

export default {
  layout: "login",
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    login() {
      doLogin({ username: this.name, password: this.password })
        .then(res => {
          Cookies.set('token', res.token, { expires: 1 });
          this.$router.push('/admin')
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss">
.login-warp {
  width: 400px;
  position: fixed;
  background: #fff;
  top: 50%;
  left: 50%;
  padding: 50px;
  border-radius: 6px;
  transform: translate(-50%, -50%);
}
</style>
