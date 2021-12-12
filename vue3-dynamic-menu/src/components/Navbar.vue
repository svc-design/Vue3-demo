<template> 
  <div class="navbar">
    <!-- sidebar抽屉按钮 -->
    <div class="sidebar-switch" >
      <i class="fa fa-caret-square-o-right" aria-hidden="true"></i>
    </div>

    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/echart">echart</a></el-breadcrumb-item>
    </el-breadcrumb>
  
      <el-dropdown class="nav-menu">
      <div class="avatar-wrapper">
        <i class="fa fa-user-circle-o" aria-hidden="true"></i> 
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="a">用户设置</el-dropdown-item>
          <el-dropdown-item command="a">退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown class="nav-menu">
      <div class="avatar-wrapper">
        <i class="fa fa-envelope" aria-hidden="true"></i>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="a">通知:xxx</el-dropdown-item>
          <el-dropdown-item command="a">进度:xxx</el-dropdown-item>
          <el-dropdown-item command="a">代办:xxx</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
el-row {
  height: 30px;
}

.navbar {
  white-space: nowrap;
  height: 30px;
  -webkit-box-shadow: 0 1px 4px rgba(0,21,41,0.08);
  box-shadow: 0 1px 4px rgba(0,21,41,0.08);
}

.sidebar-switch {
    width: 30px;
    padding: 1 1px;
    float: left;
    cursor: pointer;
    i {
      font-size: 22px;
      line-height: 30px;
    }
  }

.el-breadcrumb {
    float: left;
    line-height: 30px;
  }

.nav-menu {
    float: right;
    margin-right: 20px;
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    white-space: nowrap;
}
.nav-menu.avatar-wrapper .nav-menu.mail {
      display: flex;
      align-items: center;
}

</style>