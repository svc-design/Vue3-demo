<template>
  <el-row class="app-wrapper">
    <el-container>
      <el-aside >
        <Sidebar />
      </el-aside>
      <el-container>
        <el-header height="50px">
          <Navbar />
          <ScrollTabs/>
        </el-header>
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
import ScrollTabs from '@/components/ScrollTabs.vue'
import AppMain from '@/components/AppMain.vue'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Sidebar,
    Navbar,
    ScrollTabs
  }
}
</script>