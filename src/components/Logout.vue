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
    }
  }
}
</script>

<style>

</style>
