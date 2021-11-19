<template>
  <!-- 整体页面布局 -->
  <el-row class="app-wrapper">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="open ? '210px' : '0px'" >
        <sidebar :open="open" />
      </el-aside>
      <el-container>
        <!-- 顶部 -->
        <el-header height="50px">
          <Navbar @switchSidebar="switchSidebar" />
          <ScrollTabs/>
        </el-header>
        <!-- 主页面 -->
        <el-main>
          <AppMain />
        </el-main>
      </el-container>
    </el-container>
  </el-row>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import AppMain from '@/components/AppMain.vue'
import ScrollTabs from '@/components/ScrollTabs.vue'   

export default {
  name: 'Layout',
  components: {
    AppMain,
    Sidebar,
    Navbar,
    ScrollTabs
  },
  data() {
    return {
      open: true
    }
  },
  methods: {
    switchSidebar() {
      this.open = !this.open
    }
  }
}


</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  .el-aside{
    transition: .5s;
  }
  .sidebar-switch {
    height: 100%;
    width: 50px;
    line-height: 50px;
    cursor: pointer;
    i {
      font-size: 22px;
    }
  }
  .el-main {
    margin-top: 32px;
  }
}
</style>