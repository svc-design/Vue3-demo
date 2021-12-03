<template>
  <div class="navbar">
    <!-- sidebar抽屉按钮 -->
    <div class="sidebar-switch" @click="switchSidebar">
      <button :class="open ? 'el-icon-s-fold':'el-icon-s-unfold'" />
    </div>
    <!-- breadcrumb -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">Dashbord</a></el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in levelList" :key="item.path">{{ item.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- nav menu -->
    <el-dropdown >
      <div>
        <img :src="'https://upload.jianshu.io/users/upload_avatars/20351000/e6ae7017-e428-4e0d-819b-59c1ae535835.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'">
        <span>Vue3</span>
        <i class="el-icon-caret-bottom" />
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="a">个人中心</el-dropdown-item>
          <el-dropdown-item command="e" divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import route from '@/router'

export default {
  name: 'Navbar'
}
</script>