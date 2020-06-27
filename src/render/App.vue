<template>
  <div id="app">
    <head-tools></head-tools>
    <router-view />
  </div>
</template>
<script>
import headTools from './components/header-tools'
export default {
  components:{headTools},
  created () {
    window.document.onselectstart = () => false
    window.document.ondragstart = () => false
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
