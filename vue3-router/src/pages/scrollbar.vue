<template>
<div class="tags-view">
  <el-scrollbar>
      <p v-for="item in 50" :key="item" class="scrollbar-item">
        {{ item }}
      </p>
  </el-scrollbar>
</div>
</template>

<style>

.tags-view {
  width: 100%;
  height: 30px;
  white-space: nowrap;
}

.el-crollbar {
  height: 100%;
}

.el-scrollbar .el-scrollbar__wrap .el-scrollbar__view{
  white-space: nowrap;
  overflow: hidden;
}

.scrollbar-item {
    display:inline-block;
    width: 30px;
}
</style>