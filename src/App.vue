<template>
  <div id="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar/NavBar';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style>
body {
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
}
</style>
