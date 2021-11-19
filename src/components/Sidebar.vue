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

<style lang="scss">
// 这里是个人覆盖的一些样式，喜欢官方的就不用加了
@import '@/assets/theme.scss';
.sidebar { //外套一个sidebar类。声明以下样式仅限sidebar的组件生效
  .sidebar-container {
    transition: width 0.5s;
    width: $sideBarWidth;
    background-color: $menuBg;
    height: 100%;
    position: fixed;
    font-size: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
   .el-menu-item.is-active {
      color: $subMenuActiveText !important;;
      background-color: $menuActiveBg !important;
    }
    .horizontal-collapse-transition {
      transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
    }

    .scrollbar-wrapper {
      overflow-x: hidden !important;
    }

    .el-scrollbar__bar.is-vertical { 
      right: 0px;
    }

    .el-scrollbar {
      height: 100%;
    }

    &.has-logo {
      .el-scrollbar {
        height: calc(100% - 50px);
      }
    }

    .is-horizontal {
      display: none;
    }

    .svg-icon {
      margin-right: 16px;
    }

    .sub-el-icon {
      margin-right: 12px;
      margin-left: -2px;
    }

    .el-menu {
      border: none;
      height: 100%;
      width: 100% !important;
    }

    // menu hover
    .submenu-title-noDropdown,.el-submenu__title {
      &:hover {
        color: $subMenuActiveText !important;
        background-color: $menuHover !important;
      }
    }
    .el-submenu__title i{
      color: $subMenuActiveText !important;
    }
    .is-active>.el-submenu__title {
      color: $subMenuActiveText !important;
    }

    & .nest-menu .el-submenu>.el-submenu__title,
    & .el-submenu .el-menu-item {
      min-width: $sideBarWidth !important;
      background-color: #191a23 !important;

      &:hover {
        color: $subMenuActiveText !important;
        background-color: $subMenuHover !important;
      }
    }
    & .el-submenu .el-menu-item.is-active{
      color: $subMenuActiveText !important;;
      background-color: $menuActiveBg !important;
    }
  }
}
</style>