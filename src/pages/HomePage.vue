 /* eslint-disable */

<template>
    <div>
        <div class="card">
            <h1>HomePage</h1>
        </div>

        <div class="card" v-for="item in state.display" :key="item">
            {{ item.name }} ({{ item.age }})
            <br><br>
            <div class="card-content">
                <button @click="deleteFromFirebase(item.id)">Delete</button>
            </div>
            <div class="card-content">
                <button @click="routeToEmployeePage(item.id)">View</button>
            </div>
        </div>
        
    </div>
</template>
<script>
import { db } from '../firebase.js';
import { reactive, onMounted } from 'vue';
import { collection, getDocs } from "firebase/firestore"; 
import { doc, deleteDoc } from "firebase/firestore";

import { useRouter } from "vue-router";


export default {
  name: "home-page", 
  setup(){

    let state = reactive({ display:""})
    let router = useRouter()

        onMounted(()=> {

                getFromFirebase();
            })


            let getFromFirebase = async function() {

            var list = [];
        
            const querySnapshot = await getDocs(collection(db, "employees"));
            querySnapshot.forEach((doc) => {
                let id = doc.id;
                
                list.push({...doc.data(),id })
                state.display = list;
            });
     
   }

        let deleteFromFirebase = async function(itemID) {
            

                let answer = confirm("Do you want to delete this data?")
                if(answer == true){
                        await deleteDoc(doc(db, "employees",itemID));
                        alert("ID: "+itemID+" is deleted!");
                        window.location.reload();
                        return true;        
                    }
                    else {
                        alert("Data is not deleted!")
                    }
        } 

        let routeToEmployeePage = function(id) {
            router.push({name: "employeepage",params: { id }});
        }


    


    return {
        state,
        deleteFromFirebase, 
        routeToEmployeePage 

    }
  }
}
</script>
