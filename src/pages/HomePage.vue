<template>
    <div>
        <div class="card">
            <h1>HomePage</h1>
        </div>
        
    </div>
</template>
<script>
export default {
  name: "Home"
}
</script>
<style> 
.qr-code {
  border: 1px solid transparent;
  padding: 5px 5px;
  text-align: center;
}

.card {
    border: transparent;
    border-radius: 3px;
    padding: 20px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    font-family: 'Shadows Into Light', cursive;
    margin-bottom: 5px;
    background: #fafafa;
    margin: 5px;
  }
  
  .card-header {
    border: transparent;
    padding: 10px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    font-family: 'Shadows Into Light', cursive;
    margin-bottom: 5px;
    background: #fafafa;
  }
  
  
  .card .card-content {
    display: flex;
    flex-direction: column;
    border: transparent;
    padding: 10px;
  }
  
   .card-content .input-field input {
      border: transparent;
      border-radius: 3px;
      font-family: 'Shadows Into Light', cursive;
      font-size: 15px;
      background: #ecf0f1;
      padding: 10px;
      width: 100%;
      margin-bottom: 4px;
      box-sizing: border-box;
    }

     .row {
      display: flex;
      flex-direction: row;
    }

    button {
        border: 1px solid black;
        border-radius: 3px;  
        margin-right: 4px;
        outline: none;
        width: 70px;
        padding: 7px;  
        background: transparent;
    }

    img {
        width: 200px;
        height:200px;
    }

    a {
       text-decoration: none;
       color: #2d3436;
    }
</style>