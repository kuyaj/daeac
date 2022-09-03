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
import { useRouter } from "vue-router";

export default {
  name: 'QRSCanner',
  setup(){
    let router = useRouter()

    let onDecode = function(id) {
      router.push({name: "profilepage", params: { id }});
    }
 1
    let onLoaded = function() {
      alert(`Ready to start scanning barcodes`);
    }

    return {
      onDecode,
      onLoaded, 
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

