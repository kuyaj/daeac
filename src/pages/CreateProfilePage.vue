<template>
    <div>
        <div class="card-header">
            <h1>Create Profile Page</h1>
        </div>
       <div class="container">
        <div class="card">
            <div class="card-content">
                <div class="input-field">
                    <input type="text" placeholder="Name" v-model.trim="state.name">
                </div>

                <div class="input-field">
                    <input type="text" placeholder="Age" v-model.trim="state.age">
                </div>
                <br>
                    <div class="input-field">
                        <button @click="addToFirestore">add</button>
                    </div>
            </div>
             <div class="card-content" v-show="state.QRimage !==''">
                    <a :href="state.QRimage" download="myqrcode.jpg">
                         <img :src="state.QRimage"/>
                    </a>
                    <a :href="state.QRimage" download="myqrcode.jpg">Download QR</a>
          </div>
          <div class="card-content">
            <input type="file" placeholder="upload" @change="previewFile" multiple>
          </div>
        </div>
        <div class="card">
            <div class="card-content">
                {{ state.file.name }} <br>
            </div>
          </div>
       </div>
    </div>
</template>
<script>
// import { v4 as uuidv4 } from 'uuid';
import { reactive } from 'vue';
import { db, storage } from "../firebase";
// import QRProfileRoll from "../components/QRProfileRoll.vue";
import { collection, addDoc } from "firebase/firestore"
// import QRCode from "qrcode";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
export default {
    name: "create-profile",
    setup(){

        let state = reactive(
            { name: "",
              age: "", 
              QRimage: "",
              file: "",
              photoUrl: ""
            })



        let checkIfEmpty = (input) => input.length > 0 ? true : false;

        let previewFile = function(event){
            const file = event.target.files[0];
            state.file = file;
        }

        let addToFirestore = function(){
       
            if(checkIfEmpty(state.name) && 
            checkIfEmpty(state.age))
            { 
         try {
            let file = state.file;
            // const storageRef = ref(storage, "images/" + file.name);
            const storageRef = ref(storage, file.name);
            uploadBytes(storageRef, file).then(() => {

                getDownloadURL(storageRef).then(async (url) => {
                    await addDoc(collection(db, "employees"), {
                        name: state.name ,
                        age: state.age,
                        photoUrl: url
                    });
                });
               
            })
           
            alert("Data posted! with ID:");
    
            
            //   QRCode.toDataURL(docRef.id, {width: 350}, function(err, url){
            //       state.QRimage = url;
            //    })

            
            } catch (e) {
            console.error("Error adding document: ", e);
            }
              
           }

           else {
            alert("Please fill in the blanks")
           }
            
         
        }

        return {
            previewFile,
            addToFirestore,
            state
        }   
    },
    components: {

    }
}
</script>

