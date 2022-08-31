 /* eslint-disable */
<template>
    <div>
          <div class="card">
            <h1>Show Profile Page</h1>
        </div>
          <div class="card">
            {{ state.profile.id}}
          </div>
          <div class="card">
            {{ state.profile.name }}
          </div>
          <div class="card">
            {{ state.profile.age }}
          </div>
          
        </div>
</template>
<script>

import { reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useProfileStore } from '@/store/profile';

export default {
  name: "employee-page", 
  setup(){

    let state = reactive({ profile: {} })
    let route = useRoute();
    var userID = route.params.id;
    const store = useProfileStore()

    onMounted(()=> {
        state.profile = store.getDataById(userID);
    })

    return {
        state
    }
  }
}
</script>
