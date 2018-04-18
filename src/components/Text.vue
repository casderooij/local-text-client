<template>
    <div class="text-container">
        <h2 class="text-title">{{ id }}</h2>
        <div>{{ message }}</div>
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
            title: '',
            body: '',
            message: ''
        }
    },
    created() {
        let url_string = window.location.href;
        let id = window.location.href.split('/')[5];
        this.message = id;
    }
}
</script>

<style>
</style>
