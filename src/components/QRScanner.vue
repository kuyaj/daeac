<template>
  <div>
    <div class="card" v-for="item in state.QRFetchData" :key="item" v-show="toggleDisplay">
      <div class="card-content">
        {{ item.name }} is {{ item.age }} years old.
      </div>
      <div class="card-content">
        <button @click="toggleScanner">Scan Again</button>
      </div>
    </div>
    <div class="card" v-show="state.toggleShow">
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
    let state = reactive({ QRFetchData: "", toggleShow: true, toggleDisplay: true})

  
    let onDecode = async function(text){

      var list = [];
      const querySnapshot = await getDocs(collection(db, "employees"));
            querySnapshot.forEach((doc) => {
                let id = doc.id;
      
                list.push({...doc.data(),id })
            });
           let fetchData = list.filter(x => x.id == text);
           state.QRFetchData = fetchData;
           state.toggleShow = false;
           state.toggleDisplay = true;
    
    }

    let toggleScanner = function(){
       state.toggleShow = true;
    }

    let toggleDisplay = function (){
      state.toggleDisplay = false;
    }

    let onLoaded = function() {
      alert(`Ready to start scanning barcodes`);
    }

   

    return {
      state,
      onDecode,
      onLoaded, 
      toggleScanner,
      toggleDisplay
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

