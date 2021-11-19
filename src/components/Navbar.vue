<template>
  <div class="navbar">
    <!-- sidebar抽屉按钮 -->
    <div class="sidebar-switch" @click="switchSidebar">
      <i :class="open ? 'el-icon-s-fold':'el-icon-s-unfold'" />
    </div>
    <!-- breadcrumb -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- nav menu -->
    <el-dropdown class="nav-menu">
      <div class="avatar-wrapper">
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

export default {
  name: 'Navbar',
  props: {
    open: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    switchSidebar() {
      this.$emit('switchSidebar')
    }
  }
}
</script>
<style lang="scss">
.navbar {
  height: 50px;
  -webkit-box-shadow: 0 1px 4px rgba(0,21,41,0.08);
  box-shadow: 0 1px 4px rgba(0,21,41,0.08);
  .sidebar-switch {
    height: 100%;
    width: 50px;
    padding: 0 15px;
    line-height: 50px;
    float: left;
    cursor: pointer;
    i {
      font-size: 22px;
      line-height: 50px;
    }
  }
  .el-breadcrumb {
    float: left;
    height: 100%;
    line-height: 50px;
  }
  .nav-menu {
    float: right;
    cursor: pointer;
    height: 50px;
    line-height: 50px;
    .avatar-wrapper {
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 5px;
    }
  }
}
</style>