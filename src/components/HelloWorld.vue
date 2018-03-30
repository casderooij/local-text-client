<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <a href="/#/login">To login</a>

    <ul>
      <li v-for="order in orders">
        {{ order.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
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
