<template>
    <div  >
        {{ info }} {{ count }}
    </div>
    <div> {{ state_name }} </div>
    <div> {{ module_menu }} </div>
</template>

<script >
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: 'About',
  setup() {
    let store = useStore()
    console.log(store)
    console.log()
    let state_name = computed(() => store.state.name)
    let module_menu = computed(() => store.state.menus.items)
    console.log(state_name)
    const info="this is about test page" 
    const count=19
    return {
        info,
        count,
        state_name,
        module_menu
    }
  }
}
</script>

<style scoped>
</style>
