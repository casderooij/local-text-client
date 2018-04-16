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
        <div class="menu-button" @click="menu = true">menu</div>
        
      </div>
    </div>

    <transition name="slide-menu">
      <div class="menu-container" v-if="menu">
        <div class="menu-container__heading">
          <div class="menu-container__title">menu</div>
          <div class="menu-container__close-container">
            <img class="close-svg" src="./assets/img/close.svg" alt="menu close" @click="menu = false">
          </div>
        </div>
      </div>
    </transition>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      menu: false
    }
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
    font-size: 1.8rem;
    font-weight: bold;
    transform: rotate(270deg);
  }

  .slide-menu-enter-active {
    transition: all .4s ease;
  }

  .slide-menu-leave-active {
    transition: all .2s ease;
  }

  .slide-menu-enter, .slide-menu-leave-to {
    transform: translateX(60vw);
  }

  .menu-container {
    background-color: #474747;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    width: 60vw;
    height: 100vh;
  }

  .menu-container__heading {
    display: flex;
  }

  .menu-container__title {
    color: #fff;
    align-self: center;
    font-size: 1.8rem;
    font-weight: bold;
    transform: rotate(270deg);
  }

  .menu-container__close-container {
    flex: 1;
    padding: 0 0 3.4rem 3.4rem;
  }

  .close-svg {
    position: relative;
    top: 0.6rem;
  }
</style>
