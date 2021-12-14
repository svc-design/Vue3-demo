<template>
  <el-row>
    <el-col>
      <el-menu default-active="/home" 
               class="el-menu-vertical-demo" 
               :collapse=false 
               :router="true"
               @open="handleOpen"
               @close="handleClose" >
          
          <el-menu-item index='/home' >
              <template #title>
                <el-icon> <i class="fa fa-gear"></i> </el-icon>
                <span>平台首页</span>
              </template>
          </el-menu-item>    
      
          <el-sub-menu >
            <template #title>
              <el-icon><i class="fa fa-cloud"></i></el-icon>
              <span>集群管理</span>
            </template>
              <el-menu-item index='/echart' ><i class="fa fa-address-card-o"></i> 添加集群 </el-menu-item>
              <el-menu-item index='/about'  ><i class="fa fa-envelope-o"></i> 删除集群 </el-menu-item>
           </el-sub-menu>

          <el-sub-menu >
            <template #title>
              <el-icon><i class="fa fa-bar-chart-o"></i></el-icon>
              <span>可观测性</span>
            </template>
              <el-menu-item index='/home' ><i class="fa fa-address-card-o"></i> 网络变更 </el-menu-item>
              <el-menu-item index='/button'><i class="fa fa-envelope-o"></i> 路由规则 </el-menu-item>
           </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  export default {
  name: "Sidebar",
  setup() {
    function handleOpen(key, keyPath) {
      console.log(key, keyPath);
    }
    function handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
    return {
      handleOpen,
      handleClose,
    }
  }
};
</script>