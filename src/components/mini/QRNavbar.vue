<template>
    <div class="qr-navbar">
      <router-link to="/home">Home</router-link>
      <router-link to="/createprofile">Create Profile</router-link>
      <router-link to="/scannerpage">QR Scanner</router-link>
    </div>
  
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,100&display=swap');

.qr-navbar {
  width: 100%;
  background-color: #2c3e50;
  overflow: auto;
  font-weight: bold;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
}
.qr-navbar a {
  float: left;
  padding: 12px;
  color: white;
  text-decoration: none;
  cursor: default;
}

@media screen and (max-width: 600px) {
     
.qr-navbar {
  width: 100%;
  background-color:#2c3e50;
  overflow: auto;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
}
}  

</style>