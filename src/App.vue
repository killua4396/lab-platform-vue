<template>
  <div id="app">
    <el-menu 
      mode="horizontal"
      background-color="#5e87b0"
      text-color="#fff"
      active-text-color="#fff"
      style="margin: 0px;">
      <el-menu-item index="0" disabled>
        <template slot="title" >
          <img style="height: 100%;" src="@/assets/platform-logo.png">
        </template>
      </el-menu-item>
      <el-menu-item index="1">基本信息</el-menu-item>
      <el-menu-item index="2">电池数据</el-menu-item>
      <el-menu-item index="3">位置信息</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body{
  margin: 0px;
}
#app {
  margin: 0px;
}
.el-menu-item.is-active {
  background-color: #80a0c1!important;
}
</style>
