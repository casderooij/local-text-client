<template>
  <div id="app">
    <div class="logo">
      <img src="./assets/logo.svg" alt="">
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
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3B3B3B;
  margin-top: 60px;
}

body {
  background-color: #FFF9E7;
  font-family: 'Times New Roman', Times, serif;
}
</style>
