<template>
 <el-row>
   <el-col>{{ name }}</el-col>
   <el-col>{{ count }} </el-col>
   <el-button @click='add'> add+1 </el-button> 
 </el-row>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import Store from './store'

export default {
  name: 'VueX',
  computed: {
    ...mapState([
      'name',
      'count' 
    ])
  },
  methods: {
    ...mapMutations([
      'add',
      'adds'
     ]) 
  }
} 
</script>

<style>
</style>
