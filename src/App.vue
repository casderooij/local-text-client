<template>
  <div id="app">
    <div class="page-header">
      <div class="page-header__logo-container">
        <img src="./assets/img/logo.svg" alt="local-text logo">
      </div>
      <div class="page-header__menu-button-container">
        <div class="line">
          <svg width="100%">
            <line x1="10%" y1="50%" x2="90%" y2="50%" style="stroke:#474747;stroke-width:5" />
          </svg>
        </div>
        <div class="menu-button">menu</div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
  methods: {
    
  }
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

  .page-header {
    display: flex;
  }

  .page-header__logo-container {
    padding: 2rem;
    flex: 0.4;
  }

  .page-header__menu-button-container {
    display: flex;
    flex: 0.6;
    flex-direction: row;
    justify-content: center;
  }

  .line {
    flex: 1;
    margin: auto 0;
  }

  .menu-button {
    align-self: center;
    font-size: 1.6rem;
    font-weight: bold;
    transform: rotate(270deg);
  }
</style>
