<template>
<div class="qr-generate">
  
      <div class="card">
         <h4>QR GENERATE TEST APP</h4>
      
       <div class="card-content">
         <button @click="QRGenerate">Generate QR</button>
       </div> 
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

<style></style>

