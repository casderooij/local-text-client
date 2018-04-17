<template>
  <div id="app">
    <div class="page-header">
      <div class="page-header__logo-container">
        <router-link :to="{name: 'Welcome'}">
          <img class="logo-svg" src="./assets/img/logo.svg" alt="local-text logo" @click="menu = false">
        </router-link>
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
      <div class="menu-container" v-if="menu && !hasToken">
        <div class="menu-container__heading">
          <div class="menu-container__title" @click="menu = false">menu</div>
          <div class="menu-container__close-container">
            <img class="close-svg" src="./assets/img/close.svg" alt="menu close" @click="menu = false">
          </div>
        </div>
        <div class="menu-horizontal-line">
          <svg width="100%" height="100%">
            <line x1="15%" y1="50%" x2="85%" y2="50%" style="stroke:#fff;stroke-width:2" />
          </svg>
        </div>
        <div class="menu-routes-container">
          <router-link :to="{name: 'Login'}" class="route-link"><div @click="menu = false">login</div></router-link>
          <router-link :to="{name: 'Register'}" class="route-link"><div @click="menu = false">register new user</div></router-link>
        </div>
        <div class="menu-horizontal-line">
          <svg width="100%" height="100%">
            <line x1="15%" y1="50%" x2="85%" y2="50%" style="stroke:#fff;stroke-width:2" />
          </svg>
        </div>
        <div class="menu-routes-container">
          <router-link :to="{name: 'Map'}" class="route-link"><div @click="menu = false">show map</div></router-link>
        </div>
      </div>

      <div class="menu-container" v-if="menu && hasToken">
        <div class="menu-container__heading">
          <div class="menu-container__title" @click="menu = false">menu</div>
          <div class="menu-container__close-container">
            <img class="close-svg" src="./assets/img/close.svg" alt="menu close" @click="menu = false">
          </div>
        </div>
        <div class="menu-horizontal-line">
          <svg width="100%" height="100%">
            <line x1="15%" y1="50%" x2="85%" y2="50%" style="stroke:#fff;stroke-width:2" />
          </svg>
        </div>
        <div class="menu-routes-container">
          <router-link :to="{name: 'Profile'}" class="route-link"><div @click="menu = false">profile</div></router-link>
        </div>
        <div class="menu-horizontal-line">
          <svg width="100%" height="100%">
            <line x1="15%" y1="50%" x2="85%" y2="50%" style="stroke:#fff;stroke-width:2" />
          </svg>
        </div>
        <div class="menu-routes-container">
          <router-link :to="{name: 'Add'}" class="route-link"><div @click="menu = false">add text</div></router-link>
          <router-link :to="{name: 'All'}" class="route-link"><div @click="menu = false">all texts</div></router-link>
        </div>
        <div class="menu-horizontal-line">
          <svg width="100%" height="100%">
            <line x1="15%" y1="50%" x2="85%" y2="50%" style="stroke:#fff;stroke-width:2" />
          </svg>
        </div>
        <div class="menu-routes-container">
          <router-link :to="{name: 'Map'}" class="route-link"><div @click="menu = false">show map</div></router-link>
        </div>
        <div class="logout-button" @click="doLogout(), menu = false">
          logout
        </div>
      </div>
    </transition>
    <router-view/>
  </div>
</template>

<script>
import checkToken from './assets/js/mixins/checkToken';

export default {
  name: 'App',
  mixins: [checkToken],
  data() {
    return {
      menu: false
    }
  },
  methods: {
    doLogout: function() {
      localStorage.removeItem('token');
      // router.push({name: 'Welcome'});
      location.reload();
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
    max-width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  #app {
    width: 100vw;
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: #474747;
  }

  .router-link {
    text-decoration: none;
    color: #474747;
  }

  .page-header {
    display: flex;
  }

  .page-header__logo-container {
    padding: 2rem;
    flex: 0.4;
    align-self: center;
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
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .slide-menu-enter-active {
    transition: all .4s ease;
  }

  .slide-menu-leave-active {
    transition: all .4s ease;
  }

  .slide-menu-enter, .slide-menu-leave-to {
    transform: translateX(60vw);
    /* opacity: 0; */
  }

  .menu-container {
    background-color: #474747;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .menu-container__close-container {
    flex: 1;
    padding: 0 0 3.4rem 3.4rem;
  }

  .close-svg {
    position: relative;
    top: 0.6rem;
  }

  .menu-horizontal-line {
    height: 1rem;
  }

  .menu-routes-container {
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding: 2rem;
  }

  .route-link {
    color: #fff;
    text-decoration: none;
    text-align: left;
    font-size: 1.4rem;
    padding: .4rem 0;
  }

  .route-link:first-child {
    padding: 0 0 .4rem 0;
  }

  .logout-button {
    background: #ff5757;
    color: #fff;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: center;
    padding: 1rem 2rem;
  }
</style>
