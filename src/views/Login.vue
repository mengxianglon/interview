<template>
  <div class="login-container">
    <el-card class="box-card">
      <h3 class="title">欢迎来到采访后台管理</h3>
    </el-card>

    <el-tabs type="border-card" class="login-card" @tab-click="handleClick" v-model="activeName">
      <el-tab-pane label="用户登陆"  name="loginTab">
        <el-form
          @submit.native.prevent="login"
          label-width="70px"
          ref="logins"
          :rules="rules"
          :model="logins"
        >
          <el-form-item label="登陆名" prop="username">
            <el-input v-model="logins.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="logins.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('logins')">登陆</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>

      <el-tab-pane label="用户注册"  name="registerTab">
        <el-form
          @submit.native.prevent="register"
          label-width="80px"
          ref="registers"
          :rules="rules"
          :model="registers"
        >
          <el-form-item label="登录名" prop="username">
            <el-input v-model="registers.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="registers.password"></el-input>
          </el-form-item>
          <el-form-item label="密码确认" prop="checkPass">
            <el-input type="password" v-model="registers.checkPass"></el-input>
          </el-form-item>
           <el-form-item label="真实姓名" prop="realname">
            <el-input v-model="registers.realname"></el-input>
          </el-form-item>
          <el-form-item label="电子邮件" prop="email">
            <el-input type="password" v-model="registers.email"></el-input>
          </el-form-item>
          <el-form-item label="手机" prop="phone">
            <el-input type="password" v-model="registers.phone"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('registers')">注册</el-button>
            <el-button type="primary" @click="resetForm('registers')">重置</el-button>
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
    var validatePass = (rule, value, callback) => {
      if (this.registers.password !== this.registers.checkPass) {
        console.log("两次输入密码不一致!");
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      let pattern = /^([\w]+)\@([\w]+\.)([a-zA-Z0-9]{2,4})+$/;
      if (!pattern.test(this.registers.email)) {
        //console.log("两次输入密码不一致!")
        callback(new Error("邮箱格式不正确!"));
      }else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      let pattern = /^1(3|4|5|6|7|8|9)\d{9}$/;
      if (!pattern.test(this.registers.phone)) {
        callback(new Error("请输入正确的手机号!"));
      }else {
        callback();
      }
    };
    return {
      activeName: 'loginTab',
      forgets: {},
      logins: {
        username: "",
        password: ""
      },
      registers: {
        username: "",
        password: "",
        checkPass: "",
        realname:"",
        email: "",
        phone: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入登录名", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "登录名长度在 2 到 10 个字符",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "change" }
        ],
        checkPass: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" }
        ],
           realname: [
          { required: true, message: "请输入真实姓名", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "真实姓名长度在 2 到 10 个字符",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "请输入电子邮件",
            trigger: "change"
          },
          { validator: validateEmail, trigger: "blur" }
        ],
        phone: [
          {
            required: true,
            message: "请输入手机号",
            trigger: "change"
          },
          { validator: validatePhone, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
     handleClick(tab, event) {
        //console.log(tab, event);
      },
    async login() {
      const res = await this.$http.post("login", this.logins);
     // console.log( res.data)
      sessionStorage.token = res.data.token
      sessionStorage.username =res.data.username
      localStorage.token = res.data.token
      localStorage.username =res.data.username
      this.$router.push("/interviews/list");
      this.$message({
        type: "success",
        message: "登录成功"
      });
    //  console.log(this.logins);
    },
    async register(formField) {
      const res = await this.$http.post("register", this.registers);
      console.log(res)
      this.$message({
        type: "success",
        message: "注册成功"
      });
      formField.resetFields()
      this.activeName ='loginTab'
     
    },

    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if(this.registers.email !== ''){
            let formField =this.$refs[formName]  //重置所有字段
             this.register(formField)    
          }else{
            this.login()
          }
        } else {
            console.log('error submit!!');
          return false;
        }
      });
    },
      resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  watch: {},
  created() {}
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
