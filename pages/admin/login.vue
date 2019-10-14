<template>
  <div class="login-warp">
    <el-form label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password"></el-input>
      </el-form-item>
          <el-button type="primary" style="margin-left:80px;">登录</el-button>
    </el-form>
  </div>
</template>
 
<script>
export default {
  layout: "login",
      data() {
      return {
        name:'',
        password:''
      };
    },
    methods: {
      login() {
        console.log('submit!');
      }
    }
};
</script>
 
<style lang="scss">
  .login-warp{
    width: 400px;
    position: fixed;
    background: #fff;
    top: 50%;
    left: 50%;
    padding: 50px;
    border-radius: 6px;
    transform: translate(-50%,-50%)
  }
</style>