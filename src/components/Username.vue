<template>
    <div class="username-container">
        <p>{{ id }}</p>
        <p>{{ message }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Username',
    props: ['id'],
    data () {
        return {
            userId: id,
            user: null,
            message: ''
        }
    },
    watch: {
        userId: () => {
            console.log('id is set!!!');
            this.message = 'id is set!!!';
        }
    }
}
</script>

<style>

</style>
