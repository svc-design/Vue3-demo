<template>
  <el-row>
    <el-container>
      <el-header> <Navbar />  </el-header>
      <el-container>
        <el-aside >   <Sidebar /> </el-aside>
        <el-main>   <AppMain /> </el-main>
      </el-container>
      <el-footer> Pan Haitao ©2021 Created by xz@onwalk.net </el-footer>
    </el-container>
  </el-row>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import AppMain from '@/components/AppMain.vue'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  }
}
</script>

<style scoped>
    /*整体显示区域布局样式*/
.el-container {
    height: 100%;
}

body > .el-container {
    margin-bottom: 40px;
}

.el-aside {
    line-height: 150px;
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 50px;
  }

.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    height: 20px;
    font-size: 14px;
  }
  

</style>