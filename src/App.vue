<template>
  <div id="app" class="container-fluid">
    <navbar></navbar>
    <router-view/>
    <footer-app></footer-app>
  </div>
</template>

<script>
import Navbar from '@/components/includes/Navbar.vue'
import Footer from '@/components/includes/Footer.vue'
export default {
  name: 'App',
  components: {
    'navbar': Navbar,
    'footer-app': Footer
  }
}
</script>

<style>
#app {
  font-family: 'Karla', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
