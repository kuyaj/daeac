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
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore"; 
import { StreamBarcodeReader } from "vue-barcode-reader";
import { reactive } from 'vue';

export default {
  name: 'QRSCanner',
  setup(){
    let state = reactive({ message: "QR decoded here.."})

  
    let onDecode = function(text){

      // state.message = text;
      // alert("QRMessage: "+state.message);

      var list = [];
      const querySnapshot = await getDocs(collection(db, "employees"));
            querySnapshot.forEach((doc) => {
                let id = doc.id;
      
                list.push({...doc.data(),id })
            });
           let fetchData = list.filter(x => x.id == text);
           alert(fetchData);
    
    }

    let onLoaded = function() {
      alert(`Ready to start scanning barcodes`);
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

