import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { db } from "../firebase";

import { collection, getDocs } from "firebase/firestore"; 
import { doc, deleteDoc } from "firebase/firestore";

export const useProfileStore = defineStore('profiles', () => {
   const profiles = ref("")
   const getDataById = computed(()=> (id) => profiles.value.find((x) => x.id == id));


    async function fetchFromFirebase(){
        var list = []
            const querySnapshot = await getDocs(collection(db, "employees"));
            querySnapshot.forEach((doc) => {
                let id = doc.id;
                list.push({...doc.data(),id })
                profiles.value = list;
            });
    }

    async function deleteFromFirebase(itemID) {
        
        let answer = confirm("Do you want to delete this data? SELAH!")
        if(answer == true){
                await deleteDoc(doc(db, "employees",itemID));
                alert("ID: "+itemID+" is deleted from Pinia store!");
                window.location.reload();
                return true;        
            }
            else {
                alert("Data is not deleted!")
            }
    }

    // async function addFromFirebase() {
              
    //     try {
    //         const docRef = await addDoc(collection(db, "employees"), {
    //             name: state.name ,
    //             age: state.age,
    //         });

          
    //       QRCode.toDataURL(docRef.id, {width: 350}, function(err, url){
    //         state.QRimage = url;
    //       })


    //         alert("Data posted! with ID: "+docRef.id);
    //         state.name = "";
    //         state.age = "";

    //         } catch (e) {
    //         console.error("Error adding document: ", e);
    //         }
    // }


  
    return { getDataById, profiles, fetchFromFirebase, deleteFromFirebase }
  })