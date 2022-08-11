<template>
<div class="qr-generate">
  
      <div class="card">
         <h2>QR GENERATE TEST APP</h2>
      
       <div class="card-content">
         <button @click="QRGenerate">Generate QR</button>
       </div>
        {{ state.qrcode }}    
          <div class="card-content" v-show="state.qrimage !==''">
            <a :href="state.qrimage" download="myqrcode.jpg">
               <img :src="state.qrimage"/>
            </a>
            <a :href="state.qrimage" download="myqrcode.jpg">Download QR</a>
          </div>
    </div>
</div>
</template>
<script>
import { reactive, onMounted, } from 'vue';
import QRCode from 'qrcode';

export default {
  name: 'QRGenerate',
  setup(){
    
    let state = reactive({ 
        photo: "", 
        qrcode: "i143mk22",
        qrimage: ""  
      })
    
    onMounted(()=> {
  
      // QRCode.toDataURL(state.qrcode, function (err, url) {
      //     // state.qrimage = url;
      
      // })
    })

    function QRGenerate(){
       QRCode.toDataURL(state.qrcode, function (err, url) {
          state.qrimage = url;
      
      })
    }
        // QRCode.toDataURL('I am a pony!')
        // .then(url => {
        //     console.log(url)
        //     state.photo = url;
        // })
        // .catch(err => {
        //     console.error(err)
        // })

   


    return {
        state,
        QRGenerate
    }
  },
  components: {
  }
}      
</script>

<style>
.qr-code {
  border: 1px solid transparent;
  padding: 5px 5px;
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

    button {
        border-radius: 10px;  
        margin-right: 4px;
        outline: none;
        width: 70px;
        padding: 7px;  
        background: transparent;
        color: #2d3436;
    }

    img {
        width: 200px;
        height:200px;
    }
   
</style>

