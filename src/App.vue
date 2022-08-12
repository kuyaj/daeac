<template>
  <!-- <qr-scanner></qr-scanner> -->
  <!-- <qr-display></qr-display> -->
  <qr-navbar></qr-navbar>
   <router-view></router-view>
</template>

<script>
import QRNavbar from './components/mini/QRNavbar.vue';


export default {
  name: 'App',
  components: {
    "qr-navbar": QRNavbar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0; 
  background: rgba(0, 0, 0, 0.1);
}
</style>
