<template>
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
@import url(style.css);

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
