<template>
  <div>
     <StreamBarcodeReader
        @decode="onDecode"
        @loaded="onLoaded"
      ></StreamBarcodeReader>
{{ state.message }}
  </div>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";
import { reactive } from 'vue';

export default {
  name: 'BarcodeReader',
  setup(){
    let state = reactive({ message: "let it begin!"})

    let onDecode = function(text){
      console.log(`Decode text from QR code is ${text}`);
      alert('The decoded qr code is '+text);
    }

    let onLoaded = function() {
      console.log(`Ready to start scanning barcodes`);
    }

    return {
      state,
      onDecode,
      onLoaded
    }
  },
  components: {
    StreamBarcodeReader
  }
}
</script>