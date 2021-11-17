<template>
    <div>
        {{ info }}
    </div>
    <div>
        {{ count }}
    </div>
    <a-button @click="ADD" type="primary">ADD+1</a-button>
    <a-button @click="ADDS" type="primary">ADD+10</a-button>
</template>

<script>
export default {
    name: "About",
    data() {
            return {
              info: this.$Store.state.name
         }
    }
}
</script>

<script>
export default {
    name: "About",
    data() {
            return {
              count: this.$Store.state.count
         }
    },
    methods: {
      ADD() {
        this.$Store.commit('ADD')
        console.log(this.$Store.state.count)
      },
      ADDS() {
        this.$Store.commit('ADDS',10)
        console.log(this.$Store.state.count)
      }
  }
}
</script>

<style lang="stylus" scoped>
</style>
