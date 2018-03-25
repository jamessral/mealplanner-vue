<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar/NavBar.vue'
export default {
  components: {
    NavBar,
  },
  name: 'App'
}
</script>

<style>
body {
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
}
</style>
