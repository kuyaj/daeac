<template>
  <div>
    <div class="card">
      <div class="card-content">
              <div class="qrscanner">
          <qr-reader
            @decode="onDecode"
            @loaded="onLoaded"
        ></qr-reader>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";
import { reactive } from 'vue';

export default {
  name: 'QRSCanner',
  setup(){
    let state = reactive({ message: "QR decoded here.."})

    let onDecode = function(text){

      state.message = text;
      alert("QRMessage: "+state.message);
    
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
    "qr-reader": StreamBarcodeReader
  }
}
</script>
<style>

.qrscanner {
  border: 1px solid #dfe6e9;
  border-radius: 5px;
  padding: 5px 5px;
}
</style>

