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
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
       <router-view :key="$route.path"></router-view>
      </el-main>
       <el-footer>共：2008条数据</el-footer>
    </el-container>
  </el-container>
</template>

<style>
.el-header,.el-footer {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
</style>

<script>

</script>