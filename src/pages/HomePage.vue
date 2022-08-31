 /* eslint-disable */

<template>
    <div>
        <div class="card">
            <h1>HomePage</h1>
        </div>
        <profile-roll></profile-roll>
    </div>
</template>
<script>
import QRProfileRoll from "../components/QRProfileRoll.vue";
export default {
  name: "home-page", 
  components: {
    "profile-roll": QRProfileRoll
  }

}
</script>
