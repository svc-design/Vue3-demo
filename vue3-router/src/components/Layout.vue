<template>
  <el-row >
    <el-col :span=3>
      <el-aside class="grid-content" > <Sidebar /> </el-aside>
    </el-col>
    <el-col :span=21>
      <el-container class="grid-content" >
        <el-header> <Navbar /> <ScrollTabs /> </el-header>
        <el-main>  <AppMain /> </el-main>
      </el-container>
    </el-col>
  </el-row>
  <el-row>
    <el-footer> Pan Haitao ©2021 Created by xz@onwalk.net </el-footer>
  </el-row>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import AppMain from '@/components/AppMain.vue'
import ScrollTabs from '@/components/TagsView.vue'

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

.el-row {
    display: flex;
    position: relative;
    box-sizing: border-box;
    flex-direction: row;
    flex-wrap: nowrap;
}

.el-aside  {
    width: auto;
    line-height: 150px;
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
}

.el-header {
    background: #fff;
    color: #333;
    text-align: left;
    line-height: 30px;
    height: 60px;
    padding-left: 1px;
    padding-right: 1px;
    position: relative;
    -webkit-box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    border-bottom: 1px solid #d8dce5;
    box-shadow: 1 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
  }

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}
.el-footer {
    width: 100%;
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    height: 20px;
    font-size: 14px;
}
</style>