 /* eslint-disable */

<template>
    <div>
        <div class="card">
            <h1>HomePage</h1>
        </div>

        <div class="card" v-for="item in state.display" :key="item">
            {{ item.name }} is {{ item.age }} years old
        </div>
        
    </div>
</template>
<script>
import { db } from '../firebase.js';
import { reactive, onMounted } from 'vue';
 import { collection, getDocs } from "firebase/firestore"; 


export default {
  name: "home-page", 
  setup(){

    let state = reactive({ display:""})


 onMounted(()=> {

        getFromFirebase();
    })


   let getFromFirebase = async function() {

            var list = [];
        
    
            const querySnapshot = await getDocs(collection(db, "employees"));
            querySnapshot.forEach((doc) => {
                list.push(doc.data())
                state.display = list;
            });
     
   }
    


    return {
        state, 

    }
  }
}
</script>
