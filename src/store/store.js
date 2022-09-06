import { defineStore } from "pinia";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore"; 

export const useProfileStore = defineStore("profiles", {
    state: () => ({
        profiles: []
    }),
    getters: {

    },
    actions: {
        async fetchFromFirebase(){
            var list = []
                const querySnapshot = await getDocs(collection(db, "employees"));
                querySnapshot.forEach((doc) => {
                    let id = doc.id;
                    list.push({...doc.data(),id })
                    this.profiles = list;

                });
        } 
    }
})