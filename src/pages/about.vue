<template>
    <div  >
        {{ info }} {{ count }}
      <a-button @click="add" type="primary">ADD+1</a-button>
      <a-button @click="adds" type="primary">ADD+10</a-button>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

let store = useStore()
let info  = computed(()=>store.state.name)
let count = computed(()=>store.state.count)

function add(){    
  store.commit('add') 
}

function adds(){    
  store.commit('add',10) 
}
  
</script>


<style lang="stylus" scoped>
</style>
