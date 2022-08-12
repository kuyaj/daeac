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
  border: 1px solid transparent;
  padding: 5px 5px;
}

.card {
    border: transparent;
    border-radius: 3px;
    padding: 20px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    font-family: 'Shadows Into Light', cursive;
    margin-bottom: 5px;
    background: #fafafa;
    margin: 5px;
  }
  
  .card-header {
    border: transparent;
    padding: 10px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    margin-bottom: 5px;
    background: #fafafa;
  }
  
  
  .card .card-content {
    display: flex;
    flex-direction: column;
    border: transparent;
    padding: 10px;
  }
  

     .row {
      display: flex;
      flex-direction: row;
    }

</style>

