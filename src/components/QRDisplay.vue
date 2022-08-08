<template>
    <div class="qr-display">
      <div class="card">
        <div class="card-content">
          <div class="input-field">
             <input type="text" >
          </div>
        </div>
       
      </div>

     <div class="card">
       <div class="qr-code" ref="qrcode">
          <qr-code 
            :text="state.qr" 
          ></qr-code>
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
    let state = reactive({ qr: "facebook.com",})
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


.qr-code {
  border: 1px solid transparent;
  padding: 10px 10px;
  text-align: center;
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
    font-family: 'Shadows Into Light', cursive;
    margin-bottom: 5px;
    background: #fafafa;
  }
  
  
  .card .card-content {
    display: flex;
    flex-direction: column;
    border: transparent;
    padding: 10px;
  }
  
   .card-content .input-field input {
      border: transparent;
      border-radius: 3px;
      font-family: 'Shadows Into Light', cursive;
      font-size: 15px;
      background: #ecf0f1;
      padding: 10px;
      width: 100%;
      margin-bottom: 4px;
      box-sizing: border-box;
    }

     .row {
      display: flex;
      flex-direction: row;
    }
</style>

