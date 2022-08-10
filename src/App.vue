<template>
  <!-- <qr-scanner></qr-scanner> -->
  <!-- <qr-display></qr-display> -->
  <qr-generate></qr-generate>
</template>

<script>
// import QRScanner from './components/QRScanner.vue';
// import QRDisplay from './components/QRDisplay.vue';
import QRGenerate from './components/QRGenerate.vue';


export default {
  name: 'App',
  components: {
    // "qr-scanner": QRScanner,
    // "qr-display": QRDisplay,
    "qr-generate": QRGenerate
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0; 
  background: rgba(0, 0, 0, 0.1);
}
</style>
