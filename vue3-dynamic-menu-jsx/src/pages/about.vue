<template>
    <div  >
        {{ info }} {{ count }}
    </div>
</template>

<script >
export default {
  name: 'About',
  setup() {
    const info="this is about test page" 
    const count=19
    return {
        info,
        count
    }
  }
}
</script>

<style scoped>
</style>
