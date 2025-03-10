<template>
  <div id="app">
    <div>
      <el-row>
        <el-col :span="4" style="background-color: #5e87b0; width: 300px;">
          <img src="@/assets/platform-logo.png" style="height: 56px;">
        </el-col>
        <el-col :span="20" :style="{width: navWidth}">
          <el-menu 
            mode="horizontal"
            background-color="#5e87b0"
            text-color="#fff"
            active-text-color="#fff">
            <el-menu-item index="1">基本信息</el-menu-item>
            <el-menu-item index="2">电池数据</el-menu-item>
            <el-menu-item index="3">位置信息</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      navWidth: window.innerWidth - 300 + 'px'
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize(){
      this.navWidth = window.innerWidth - 300 + 'px'
    }
  }
}
</script>

<style>
body{
  margin: 0px;
  background-color: #f4f4f4;
}
#app {
  margin: 0px;
}
.el-menu-item.is-active {
  background-color: #80a0c1!important;
}
</style>
