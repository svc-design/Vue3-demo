<template>

<el-container>
  <el-aside> <Sidebar /> </el-aside>
  <el-container>
    <el-header> <Navbar /> <ScrollTabs /> </el-header>
    <el-main> <AppMain /> </el-main>
    <el-footer> Pan Haitao ©2021 Created by xz@onwalk.net </el-footer>
  </el-container>
</el-container>

</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import AppMain from '@/components/AppMain.vue'
import ScrollTabs from '@/components/ScrollTabs.vue'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    ScrollTabs
  }
}
</script>

<style scoped>

.el-aside {
  width: 200px;
  line-height: 150px;
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 150px;
}

.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 100px;
  }

.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    height: 20px;
    font-size: 14px;
  }
  

</style>