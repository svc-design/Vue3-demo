<template>
  <a-layout id="main" :style="{ overflow: 'auto', height: '100vh' }">
      <a-layout-sider id="sider"
           collapsible
           v-model="collapsed">

         <!--这个位置可以放上面讲到的menu代码-->
         <div class="logo" />
         <Sider />
      </a-layout-sider>
      <a-layout>
          <a-layout-header id="HomeHeader" >
              <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" 
                      @click="() => (collapsed = !collapsed)" />
          </a-layout-header>
          <a-layout-content>
          <!--行内样式记得写成class-->
            <router-view />
          </a-layout-content>
          <a-layout-footer >
             Pan Haitao ©2021 Created by Xz
         </a-layout-footer>
      </a-layout>
  </a-layout>
</template>

<script setup>
import Sider from './sider.vue'
</script>

<style>

#HomeHeader {
          margin: '1.5vh 10px';
          padding: '10px';
          background: '#fff';
          height: '90vh';
}

#sider .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}

</style>
