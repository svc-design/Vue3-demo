<template>
 <div>
   <p>this->name {{ this.$store.state.name }}</p>
   <p>this->count {{ this.$store.state.count }}</p>
 </div>

 <div>
   <p>mapName {{ name }}</p>
   <p>mapCount {{ count }}</p>
 </div>

 <div>
   <p>computed->name {{ get_value_name }}</p>
   <p>computed->count {{ get_vaule_count }}</p>
 </div>

  <div>
    <p>getters->name {{ getters_name }}</p>
    <p>getters->count {{ getters_count }}</p>
  </div>

  <div>
    <p>modules->name {{ modules_name }}</p>
  </div>

   <button @click='add'> add+1 </button> 
   <button @click='adds'> add+10 </button>   
   <button @click='sync_adds'> sync_add+10 </button>   

</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  name: 'VueX',
  computed: {
    ...mapState([
      'name',
      'count' 
    ]),
   get_value_name() {
     return this.$store.state.name   
   },
   get_vaule_count() {
     return this.$store.state.count   
   }, 
   getters_name() {
     console.log(this.$store)
     return this.$store.getters.name  
   },
   getters_count() {
     console.log(this.$store)
     return this.$store.getters.count  
   },
   modules_name() {
     console.log(this.$store)
     return this.$store.state.a.name  
   }
  },
  methods: {
    ...mapMutations([
      'add',
     ]), 
    adds(){
      this.$store.commit('adds',10)
    },
    sync_adds(){
      this.$store.dispatch('async_commit_adds', { num: 10 } )
  }
 }
} 
</script>

<style>
</style>
