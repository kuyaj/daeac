 /* eslint-disable */

<template>
    <div>
      <div class="card-header">
              <h1>HomePage</h1>
          </div>
        <div class="container">
          <profile-roll></profile-roll>
        </div>
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

