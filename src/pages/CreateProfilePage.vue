<template>
    <div>
        <div class="card">
            <h1>Create Profile Page</h1>
        </div>
        <div class="card">
            <div class="card-content">
                {{ state.name }} 
                <br>
                {{ state.age }}
                <div class="input-field">
                    <input type="text" placeholder="Name" v-model="state.name">
                </div>
                <div class="input-field">
                    <input type="text" placeholder="Age" v-model="state.age">
                </div>
                <br>
                    <div class="input-field">
                        <button @click="addToFirestore">Add Data</button>
                    </div>
            </div>
             <!-- <div class="card-content" v-show="state.qrimage !==''">
                    <a :href="state.qrimage" download="myqrcode.jpg">
                         <img :src="state.qrimage"/>
                    </a>
          </div> -->
        </div>
    </div>
</template>
<script>
// import { v4 as uuidv4 } from 'uuid';
// import QRCode from 'qrcode';
import { reactive } from 'vue';

import { db } from '../firebase.js';
 

export default {
    name: "create-profile",
    setup(){
        // let unique_id = uuidv4()

        let state = reactive(
            { name: "",
              age: "", 
              qrimage: ""
            })


        function addToFirestore(){
        
            db.collection("employees").add({ 
                name: "bar", 
                age: "19"
            })
            .then(function(){
                alert("Data has been posted!");
            })
        }


        // function generateQR(){
        //    QRCode.toDataURL(unique_id, function(err, url){
        //         state.qrimage = url;
        //    })
        //}


        return {
            addToFirestore,
            state
        }   
    }
}
</script>

