<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Karla');

  body {
    font-family: 'Karla', sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  #app {
    width: 100vw;
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: #3B3B3B;
    text-align: center;
  }
</style>
