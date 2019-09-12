<template>
  <el-container style="height:100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router unique-opened :default-active="$route.path">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>采访登记
          </template>
          <el-menu-item-group>
            <el-menu-item index="/interviews/list">采访列表</el-menu-item>
            <el-menu-item index="/interviews/create">新增采访</el-menu-item>
            <el-menu-item index="/interviews/InterviewSearch">搜索采访</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 18px">
        <el-dropdown @command="userOptions">
          <span class="el-dropdown-link">
            {{user}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="changePass">修改密码</el-dropdown-item>
            <el-dropdown-item command="modifidy" disabled>修改个人资料</el-dropdown-item>
            <el-dropdown-item command="loginOut" @click.native="loginOut" divided>退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>

      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
.el-dropdown-link {
  cursor: pointer;
  color: #020911;
}
.el-icon-arrow-down {
  font-size: 16px;
}
</style>

<script>
export default {
  data() {
    return {
      user: localStorage.username
    };
  },
  methods: {
    userOptions(command) {
      this.$message("click on item " + command);
    },
 async  loginOut(){
     await localStorage.removeItem('token')
     await localStorage.removeItem('username')
     await this.$router.push('/login')
    }
  }
};
</script>