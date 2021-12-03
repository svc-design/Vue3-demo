<template>
  <el-row class="sidebar">
   <el-col class="sidebar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper" >
      <el-menu 
        class="el-menu-vertical-demo"
        :router="true" 
        :background-color="theme.menuBg" 
        :text-color="theme.menuText" 
        :active-text-color="theme.subMenuActiveText" >
        <div v-for="(item,i) in MenuData" :key="i" >
          <el-submenu v-if="item.children" :index="item.path" class="hide-title">
            <template #title>
              <i class="el-icon-sunny" />
              <span> {{ item.name }} </span> 
            </template>
            <el-menu-item v-for="(children,index) in item.children" :key="index" :index="item.path+'/'+children.path">{{children.name}}
            </el-menu-item>
          </el-submenu>
            <el-menu-item v-else :index="item.path">
              <i class="el-icon-menu" />
              <template #title>{{ item.name }}</template>
            </el-menu-item>
        </div>
      </el-menu>
    </el-scrollbar>
  </el-col>
 </el-row> 
</template>

<script setup>
import theme from '@/assets/theme.scss'
import { routes } from '@/router/index'

const MenuData = routes

</script>