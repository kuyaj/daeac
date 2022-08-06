<template>
  <div>
      <div class="qr-reader">
        <qr-reader
        @decode="onDecode"
        @loaded="onLoaded"
      ></qr-reader>
      </div>

        <input type="text" v-model="state.qr">

      <br>
      <div class="qr-code">
          <qr-code 
            :text="state.qr" 
          ></qr-code>
      </div>
      <br>
{{ state.message }} 
<br>
  </div>
</template>

<script>
// import { StreamBarcodeReader } from "vue-barcode-reader";
import VueQRCodeComponent from 'vue-qr-generator';
import { reactive } from 'vue';

export default {
  name: 'BarcodeReader',
  setup(){
    let state = reactive({ message: "QR decoded here..", qr: ""})

    let onDecode = function(text){
      // alert('The decoded qr code is '+text);
      state.message = text;
      alert("QRMessage: "+text);
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
    "qr-code": VueQRCodeComponent
  }
}
</script>
<style>

.qr-reader {
  border: 1px solid #2ecc71;
  padding: 10px 10px;
}

.qr-code {
  border: 1px solid #3498db;
  padding: 10px 10px;
  text-align: center;
}
</style>

