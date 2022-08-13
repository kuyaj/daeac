<template>
    <div class="qr-display">
      <div class="card">
        <div class="card-content">
          <div class="input-field">
             <input type="text" v-model="state.qr">
          </div>
        </div>
       
      </div>

     <div class="card">
       <div class="qr-code">
           <qr-code :text="state.qr"></qr-code>
      </div>
     </div>
      </div>
</template>
<script>
import VueQRCodeComponent from 'vue-qr-generator';
import { reactive } from 'vue';

export default {
  name: 'QRDisplay',
  setup(){
    let state = reactive({ qr: "",})

   

    return {
      state,
    }
  },
  components: {
    "qr-code": VueQRCodeComponent,
  }
}      
</script>

<style>
</style>

