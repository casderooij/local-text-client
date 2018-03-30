<template>
  <div class="hello">
    <p>virtual graffiti...</p>

    <a href="/#/login">login</a>
    <a href="/#/register">register</a>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Welcome',
  data () {
    return {
      orders: '',
      errors: []
    }
  },
  created() {
    axios({
      method: 'get',
      url: 'http://localhost:3000/orders',
      headers: {'token': localStorage.getItem('token')}
    })
    .then(response => {
      this.orders = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

    console.log(localStorage.getItem('token'));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

li {
  list-style: none;
}

</style>
