<template>
    <div class="qr-navbar">
      <router-link to="/home">Home</router-link>
      <router-link to="/createprofile">Create Profile</router-link>
      <router-link to="/scannerpage">QR Scanner</router-link>
    </div>
</template>

<style>


.qr-navbar {
  width: 100%;
  background-color: #34495e;
  overflow: auto;
}
.qr-navbar a {
  float: left;
  padding: 12px;
  color: white;
  text-decoration: none;
  cursor: default;
}


</style>