/* eslint-disable */
<template>
    <div>
        <div class="card-header">
            <h1>Show Profile</h1>
          </div>
        <div class="container">
          <div class="card">
            {{ state.profile.name }}
          </div>
          <div class="card">
            {{ state.profile.age }}
          </div>
          <div class="card">
            <div class="card-content">
                <img :src="state.profile.photoUrl"/>  
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <a :href="state.QRPhoto" download="myqrcode.jpg">
                         <img :src="state.QRPhoto"/>
                    </a>
            </div>
          </div>
          <div class="card">
  
            <button><a :href="state.QRPhoto" download="myqrcode.jpg"> 
                       download
                </a></button>
            <button @click="deleteUser(state.profile)">delete</button>
          </div>
        </div>
        </div>
</template>
<script>

import { reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProfileStore } from '@/store/profile';
import QRCode from 'qrcode';

import { storage } from "../firebase";
import { ref, deleteObject } from 'firebase/storage'

export default {
  name: "show-profile", 
  setup(){

    let state = reactive({ profile: {}, QRPhoto: ""})
    let route = useRoute();
    let router = useRouter(); 
    var userID = route.params.id;
    let store = useProfileStore();
    let { deleteFromFirebase } = store;
    
    let deleteUser = function(profile){
      deleteFromFirebase(profile.id);
      let photoRef = ref(storage, profile.shUrl)
      deleteObject(photoRef).then(()=> { console.log("Delete in storage")}).catch((err) => { console.log(err)});
      router.push({ name: "home"});
    }


    onMounted(()=> {
        state.profile = store.getDataById(userID);
        QRCode.toDataURL(state.profile.id, {width: 400}, (err, url) => state.QRPhoto = url)

    })

    return {
        state, 
        deleteUser

    }
  }
}
</script>
