<template>
  <div
    id="app"
    class="container-lg mx-auto bg-grey-lightest"
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
