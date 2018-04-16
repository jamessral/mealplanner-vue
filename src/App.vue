<template>
    <v-app>
      <v-navigation-drawer app>
        <nav-bar />
      </v-navigation-drawer>
      <v-content>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar/NavBar'

export default {
  name: 'App',
  components: {
    NavBar,
  },
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
