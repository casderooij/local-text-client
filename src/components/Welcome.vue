<template>
  <div>
    <div class="welcome-container">

      <transition name="wait">
        <div class="wait-container" v-if="!text">
          <img class="wait-svg" src="../assets/img/wait.svg" alt="waiting for texts">
          <div class="wait-text">waiting for location</div>
        </div>
      </transition>

      <div class="nearest-text-container">
        <div class="nearest-item" v-if="text" v-for="t in text">
          <router-link class="router-link" :to="{name: 'Text'}">
            <div class="nearest-item-title">{{ t.title }}</div>
            <div v-if="t.distance < 4" class="nearest-item-distance"><div class="distance">{{ Math.floor(t.distance * 1000) }}</div> m away</div>
            <div v-if="t.distance >= 4" class="nearest-item-distance"><div class="distance">{{ t.distance }}</div> km away</div>
          </router-link>
        </div>
      </div>

      <div v-if="login" class="logoutButton">
        <router-link :to="{name: 'User'}">User</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import authMixin from '../assets/js/mixins/authMixin'
import axios from 'axios'

export default {
  name: 'Welcome',
  mixins: [authMixin],
  data () {
    return {
      // text: [
      //   {
      //     distance: 0.0167,
      //     id: 1,
      //     title: 'First text',
      //     user_id: 1
      //   },
      //   {
      //     distance: 0.0167,
      //     id: 3,
      //     title: 'Third text',
      //     user_id: 1
      //   },
      //   {
      //     distance: 0.452,
      //     id: 2,
      //     title: 'Hotel Zwolle',
      //     user_id: 1
      //   }
      // ],
      text: null,
      textFound: false,
      errors: [],
      user: '',
      login: false
    }
  },
  created() {
    if('geolocation' in navigator) {
      let position;

      let success = (p) => {
        position = p;
        queryPosition(position.coords.latitude, position.coords.longitude);
        navigator.geolocation.getCurrentPosition(success, error);
      }

      let error = (msg) => {
        console.error(msg);
      }

      let queryPosition = (lat, lon) => {
        axios({
          method: 'get',
          // url: `http://localhost:3000/nearest-texts/${lat}/${lon}`
          url: `https://local-text.nl/server/nearest-texts/${lat}/${lon}`
        })
        .then(response => {
          this.text = response.data;
          this.textFound = true;
        })
        .catch(e => {
          this.errors.push(e)
        })
      }

      navigator.geolocation.getCurrentPosition(success, error);

    } else {
      console.log('Geolocation not available...');
    }
    


    if(localStorage.getItem('token')) {
      var token = JSON.parse(localStorage.getItem('token'));
      axios({
        method: 'get',
        // url: 'http://localhost:3000/users/' + token.userId,
        url: 'https://local-text.nl/server/users/' + token.userId,
        headers: {'token': token.userToken}
      })
      .then(response => {
        this.user = response.data;
      })
      .catch(error => {
        this.errors.push(error);
      })

      if(localStorage.getItem('token')) {
        this.login = true;
      }
    }


  }
}
</script>

<style scoped>
.welcome-container {
}

.bottom-container {
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
}

.nearest-text-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60vh;
  margin: 2rem;
}

.nearest-item {
  align-self: flex-start;
}

.nearest-item:nth-child(2) {
  align-self: flex-end;
}

.distance {
  color: #ff5757;
  font-weight: bold;
  display: inline-block;
}

.nearest-item-title {
  font-size: 1.4rem;
  font-weight: bold;
  text-decoration: underline;
  line-height: 2.5rem;
  padding-left: 2rem;
}

.nearest-item-distance {
  font-size: 1.2rem;
}

.wait-container {
  position: absolute;
  width: 100vw;
  padding-top: 10rem;
}

.wait-enter-active {
  transition: opacity .4s ease;
}

.wait-leave-active {
  transition: opacity .4s ease;
}

.wait-enter, .wait-leave-to {
  opacity: 0;
}

.wait-svg {
  position: relative;
  width: 30vw;
  left: 50%;
  margin-top: -15vw;
  margin-left: -15vw;
  animation:spin 3s ease infinite;
}

.wait-text {
  position: relative;
  text-align: center;
  font-size: 1.2rem;
}

@-moz-keyframes spin { 40% { -moz-transform: rotate(180deg) scale(1.4, 1.4); } }
@-webkit-keyframes spin { 40% { -webkit-transform: rotate(180deg) scale(1.4, 1.4); } }
@keyframes spin { 50% { -webkit-transform: rotate(180deg) scale(1.4, 1.4); transform: rotate(180deg) scale(1.4, 1.4); } }

</style>
