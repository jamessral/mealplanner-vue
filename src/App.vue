<template>
  <div
    class="container-lg mx-auto bg-grey-lightest"
    id="app"
  >
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import '@/assets/styles/main.css'
import NavBar from '@/components/common/NavBar/NavBar'

export default {
  name: 'App',
  components: {
    NavBar,
  },
}
</script>

<style lang="scss">
</style>
