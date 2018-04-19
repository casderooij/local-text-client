<template>
    <div class="username-container">
        {{ user.username }}
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Username',
    props: ['id'],
    data () {
        return {
            user: null,
            message: ''
        }
    },
    created() {
        axios({
            method: 'get',
            url: 'https://local-text.nl/server/users/' + this.id
        })
        .then(response => this.user = response.data)
        .catch(error => console.log(error));
    }
}
</script>

<style>
</style>
