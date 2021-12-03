<template>
  <div class="tabs">
    <scroll-pane ref="scrollPane" class="tabs-wrapper">
      <router-link
        v-for="tab in visitedViews"
        ref="tag"
        :key="tab.path"
        class="tabs-item"
        :class="isActive(tab)?'active':''"
        :to="{ path: tab.path, query: tab.query, fullPath: tab.fullPath }"
        tag="span"
      >
        {{ tab.title }}
        <span class="el-icon-close" />
      </router-link>
    </scroll-pane>
  </div>
</template>

<script>
import ScrollPane from './ScrollPane.vue'
export default {
  name: 'Tabs',
  components: { ScrollPane }
}
</script>