<template>
  <div>
      <div v-if="hasToken">
        <button v-on:click="doLogout()">Logout</button>
      </div>
  </div>
</template>

<script>
import checkToken from '../assets/js/mixins/checkToken'
import axios from 'axios'
import router from '../router'

export default {
    name: 'Logout',
    mixins: [checkToken],
    data() {
      return {

      }
    },
    methods: {
      doLogout: function() {
        localStorage.removeItem('token');
        this.hasToken = false;
        router.push({name:'Welcome'});
    }
  }
}
</script>

<style>

</style>
