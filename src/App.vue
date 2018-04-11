<template>
  <div id="app">
    <div class="logo">
      <img src="./assets/img/logo.svg" alt="">
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans');

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #3B3B3B;
    margin-top: 50px;
  }

  body {
    font-family: 'IBM Plex Sans', sans-serif;
  }
</style>
