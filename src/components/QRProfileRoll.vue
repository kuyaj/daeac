<template>
    <div>
    
      <div class="card" v-for="item in state.display" :key="item">
            {{ item.name }} ({{ item.age }})
            <br><br>
            <div class="card-content">
                <button @click="routeToEmployeePage(item.id)">view</button>
            </div>
        </div>
      
    </div>
</template>
<script>
import { reactive, onMounted } from 'vue';
import { useRouter } from "vue-router";

import { storeToRefs } from 'pinia';
import { useProfileStore } from '@/store/profile';


 export default {
    name: "ProfileRoll",
    setup(){

           let state = reactive({ display:[]})
           let router = useRouter()


            const store = useProfileStore()
            const { profiles } = storeToRefs(store)
            const { fetchFromFirebase} = store;
            const { deleteFromFirebase } = store;

        
         onMounted(()=> {
            fetchFromFirebase();
            state.display = profiles;
          
         })

        let routeToEmployeePage = function(id) {
            router.push({name: "profilepage", params: { id }});
        }

        return {
            state, 
            routeToEmployeePage,
            deleteFromFirebase
        }
    }
 }
</script>