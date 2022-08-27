 /* eslint-disable */
<template>
    <div>
        <div class="card">
            <h1>Employee Page</h1>
            <div class="card-content">
                {{ $route.params.id }} <br>
            </div>
        </div>
    </div>
</template>
<script>
// import { db } from '../firebase.js';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';


export default {
  name: "employee-page", 
  setup(){

    // let state = reactive({ display:""})
    let route = useRoute();

    onMounted(()=> {
        alert(route.params.id);
    })


    return {
    
    }
  }
}
</script>
