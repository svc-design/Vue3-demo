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
          <div class="sidebar-switch" @click="open = !open">
            <i :class="open ? 'el-icon-s-fold':'el-icon-s-unfold'" />
          </div>
          <el-col>header</el-col>
        </el-header>
        <!-- 主页面 -->
        <router-view />
        <el-main>主页面</el-main>
      </el-container>
    </el-container>
  </el-row>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'Layout',
  components: {
    Sidebar
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
}
</style>