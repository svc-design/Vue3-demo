<template>
  <el-scrollbar style="height: 100%;">
    <router-view v-slot="{ Component }">
      <transition>
        <keep-alive v-if="$route.meta.keepAlive" :include="cachedViews">
          <component :is="Component" />
        </keep-alive>
        <component :is="Component" v-else />
      </transition>
    </router-view>
  </el-scrollbar>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>