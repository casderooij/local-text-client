<template>
    <div class="text-container">
        <h2 class="text-title">{{ text.title }}</h2>

        <div class="text-body">{{ text.body }}</div>
    </div>
</template>

<script>
import router from '../router'
import axios from 'axios'
import getLocation from '../assets/js/methods/getLocation'

export default {
    name: 'Add',
    data() {
        return {
            id: '',
            text: null
        }
    },
    created() {
        this.id = window.location.href.split('/')[5];

        axios({
            method: 'get',
            url: 'https://local-text.nl/server/texts/' + this.id,
            headers: {'token': JSON.parse(localStorage.getItem('token'))}
        })
        .then(response => {
            this.text = response.data;
        })
        .catch(error => {
            console.log(error);
        })
    }
}
</script>

<style>
    .text-container {
        padding: 0 2rem;
    }

    .text-title {

    }

    .text-body {
        margin-top: 2rem;
        font-size: 1.4rem;
    }
</style>
