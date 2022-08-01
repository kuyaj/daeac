<template>
  <barcode-reader></barcode-reader>
</template>

<script>
import BarcodeReader from './components/BarcodeReader.vue';


export default {
  name: 'App',
  components: {
    "barcode-reader": BarcodeReader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
