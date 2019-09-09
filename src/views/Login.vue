<template>
  <div class="login-container">
    <el-card class="box-card">
      <h3 class="title">欢迎来到采访后台管理</h3>
    </el-card>

    <el-tabs type="border-card" class="login-card">
      <el-tab-pane label="用户登陆">
        <el-form @submit.native.prevent="login" label-width="60px">
          <el-form-item label="用户名">
            <el-input v-model="logins.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="logins.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" native-type="submit">登录</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>

      <el-tab-pane label="用户注册">
        <el-form @submit.native.prevent="register" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="registers.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="registers.password"></el-input>
          </el-form-item>
          <el-form-item label="密码确认">
            <el-input type="password" v-model="registers.checkPass"></el-input>
          </el-form-item>
          <el-form-item label="电子邮件">
            <el-input type="password" v-model="registers.email"></el-input>
          </el-form-item>
          <el-form-item label="手机">
            <el-input type="password" v-model="registers.phone"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" native-type="submit">注册</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>

      <el-tab-pane label="忘记密码">
        <el-form @submit.native.prevent="forget" label-width="80px">
          <el-form-item label="电子邮件">
            <el-input type="password" v-model="forgets.email"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routes:this.$route.name,
      forgets:{},
      logins: {
        username:'',
        password:''
      },
      registers:{
        username:'',
        password:'',
        checkPass:'',
        email:'',
        phone:''
      }
    };
  },
  methods: {
    async login() {
      const res = await this.$http.post("login", this.logins);
      // sessionStorage.token = res.data.token
      //localStorage.token = res.data.token;

     // this.$router.push("/");
     // this.$message({
      //  type: "success",
     //   message: "登录成功"
     // });
     console.log(this.logins)
    },
    async register() {
    console.log(this.registers)
    }
  },
  watch: {
  },
  created() {
    // this.loginOrResiter()
   //  console.log(this.$route.name);
  }
};
</script>

<style scoped>
.inputLen {
  width: 50%;
}


h3.title {
    text-align: center;
}
.login-card {
  width: 50rem;
  margin: 1rem auto;
}

.box-card {
  width: 480px;
  margin: 2em auto;
}
</style>
